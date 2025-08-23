#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
虚拟环境路径自动修复脚本
当项目移植到其他机器时，自动检测并修复虚拟环境中的Python路径配置
"""

import os
import sys
import shutil
import subprocess
from pathlib import Path
import re

CONFIG_FILE = str(Path(__file__).resolve().parent.parent / 'venv_config.ini')

def read_config_python_home() -> str | None:
    try:
        if not os.path.exists(CONFIG_FILE):
            return None
        with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith('#'):
                    continue
                if '=' in line:
                    k, v = line.split('=', 1)
                    if k.strip().upper() == 'PYTHON312_HOME':
                        v = v.strip().strip('"')
                        if v and os.path.exists(os.path.join(v, 'python.exe')):
                            # 精确校验版本
                            try:
                                out = subprocess.check_output([os.path.join(v, 'python.exe'), '-c', 'import platform;print(platform.python_version())'], text=True).strip()
                                if out == '3.12.8':
                                    return os.path.abspath(os.path.join(v, 'python.exe'))
                            except Exception:
                                pass
    except Exception:
        return None
    return None

def find_python_executable():
    """查找当前系统中的Python 3.12.8可执行文件（优先配置文件）"""
    # 优先从配置文件读取
    cfg = read_config_python_home()
    if cfg:
        return cfg

    possible_paths = [
        r"C:\\Python312\\python.exe",
        r"C:\\Python\\Python312\\python.exe",
        r"C:\\Users\\{}\\Python\\Python312\\python.exe".format(os.getenv('USERNAME', '')),
        r"C:\\Users\\{}\\AppData\\Local\\Programs\\Python\\Python312\\python.exe".format(os.getenv('USERNAME', '')),
        r"C:\\Program Files\\Python312\\python.exe",
        r"C:\\Program Files (x86)\\Python312\\python.exe",
        shutil.which("python"),
        shutil.which("python3"),
        shutil.which("python3.12"),
    ]
    for path in possible_paths:
        if path and os.path.exists(path):
            try:
                result = subprocess.run([path, "-c", "import platform;print(platform.python_version())"], capture_output=True, text=True, timeout=10)
                if result.returncode == 0 and result.stdout.strip() == '3.12.8':
                    return os.path.abspath(path)
            except (subprocess.TimeoutExpired, subprocess.SubprocessError):
                continue
    return None


def get_python_home(python_exe):
    """获取Python安装目录"""
    return os.path.dirname(python_exe)

def fix_pyvenv_cfg(venv_path, python_exe):
    """修复pyvenv.cfg文件中的路径配置"""
    pyvenv_cfg = os.path.join(venv_path, "pyvenv.cfg")
    
    if not os.path.exists(pyvenv_cfg):
        print(f"错误: 找不到 {pyvenv_cfg}")
        return False
    
    # 读取原配置
    with open(pyvenv_cfg, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # 修改配置
    python_home = get_python_home(python_exe)
    new_lines = []
    
    for line in lines:
        if line.startswith('home = '):
            new_lines.append(f'home = {python_home}\n')
            print(f"更新 home 路径: {python_home}")
        elif line.startswith('executable = '):
            new_lines.append(f'executable = {python_exe}\n')
            print(f"更新 executable 路径: {python_exe}")
        elif line.startswith('command = '):
            venv_abs_path = os.path.abspath(venv_path)
            new_lines.append(f'command = {python_exe} -m venv {venv_abs_path}\n')
            print(f"更新 command 路径: {python_exe} -m venv {venv_abs_path}")
        else:
            new_lines.append(line)
    
    # 写入新配置
    with open(pyvenv_cfg, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    return True


def fix_scripts_path(venv_path, python_exe):
    """修复Scripts目录中的可执行文件路径"""
    scripts_dir = os.path.join(venv_path, "Scripts")
    
    if not os.path.exists(scripts_dir):
        print(f"警告: Scripts目录不存在 {scripts_dir}")
        return False
    
    # 复制新的python.exe和pythonw.exe
    python_dir = os.path.dirname(python_exe)
    
    try:
        # 复制python.exe
        src_python = os.path.join(python_dir, "python.exe")
        dst_python = os.path.join(scripts_dir, "python.exe")
        if os.path.exists(src_python):
            shutil.copy2(src_python, dst_python)
            print(f"更新 python.exe: {dst_python}")
        
        # 复制pythonw.exe
        src_pythonw = os.path.join(python_dir, "pythonw.exe")
        dst_pythonw = os.path.join(scripts_dir, "pythonw.exe")
        if os.path.exists(src_pythonw):
            shutil.copy2(src_pythonw, dst_pythonw)
            print(f"更新 pythonw.exe: {dst_pythonw}")
            
    except Exception as e:
        print(f"警告: 复制可执行文件时出错: {e}")
        return False
    
    return True


def fix_bash_activate(venv_path: str) -> bool:
    """修复 Git Bash/MSYS 使用的 activate 文件中的 VIRTUAL_ENV 路径"""
    act_path = Path(venv_path) / "Scripts" / "activate"
    if not act_path.exists():
        return False
    try:
        text = act_path.read_text(encoding="utf-8", errors="ignore")
        venv_abs = str(Path(venv_path).resolve())
        venv_posix = venv_abs.replace("\\", "/")
        # 统一将 export VIRTUAL_ENV=... 重写为 POSIX 风格路径，避免反斜杠转义问题
        import re as _re
        text_new = _re.sub(r"^export VIRTUAL_ENV=.*$",
                           lambda m: f"export VIRTUAL_ENV='{venv_posix}'",
                           text, flags=_re.MULTILINE)
        if text_new != text:
            act_path.write_text(text_new, encoding="utf-8")
            print(f"更新 Bash activate 路径: {act_path}")
            return True
    except Exception as e:
        print(f"警告: 修复 Bash activate 时出错: {e}")
    return False


def fix_cmd_activate(venv_path: str) -> bool:
    """修复 Windows CMD 版 activate.bat 中的 VIRTUAL_ENV 硬编码路径"""
    act_bat = Path(venv_path) / "Scripts" / "activate.bat"
    if not act_bat.exists():
        return False
    try:
        text = act_bat.read_text(encoding="utf-8", errors="ignore")
        venv_abs = str(Path(venv_path).resolve())
        import re as _re
        pattern = r'^set\s+"VIRTUAL_ENV=.*?"\s*$'
        def _repl(_m):
            return f'set "VIRTUAL_ENV={venv_abs}"'
        new_text = _re.sub(pattern, _repl, text, flags=_re.MULTILINE)
        if new_text != text:
            act_bat.write_text(new_text, encoding="utf-8")
            print(f"更新 CMD activate 路径: {act_bat}")
            return True
    except Exception as e:
        print(f"警告: 修复 CMD activate 时出错: {e}")
    return False


def fix_pip_launchers(venv_path: str, python_exe: str) -> bool:
    """重新生成 venv 内的 pip 启动器，修复 pip.exe 指向旧路径的问题"""
    try:
        print("\n正在修复 pip 启动器与基础构建工具...")
        # 确保内置 pip 就绪
        r1 = subprocess.run([python_exe, "-m", "ensurepip", "--upgrade"], capture_output=True, text=True)
        if r1.returncode != 0:
            print("ensurepip 输出:", (r1.stdout or r1.stderr))
        # 强制重装 pip/setuptools/wheel 以重建脚本
        r2 = subprocess.run([python_exe, "-m", "pip", "install", "--upgrade", "--force-reinstall",
                              "pip", "setuptools", "wheel"], capture_output=True, text=True)
        if r2.returncode != 0:
            print("pip 安装输出:", (r2.stdout or r2.stderr))
        ok = r2.returncode == 0
        if ok:
            print("pip 启动器修复完成")
        else:
            print("警告: pip 启动器修复可能未完全成功，请手动检查")
        return ok
    except Exception as e:
        print(f"警告: 修复 pip 启动器时出错: {e}")
        return False


def test_venv(venv_path):
    """测试虚拟环境是否正常工作"""
    python_exe = os.path.join(venv_path, "Scripts", "python.exe")
    
    if not os.path.exists(python_exe):
        return False, "python.exe不存在"
    
    try:
        # 测试Python是否能正常运行
        result = subprocess.run([python_exe, "--version"], 
                              capture_output=True, text=True, timeout=10)
        if result.returncode != 0:
            return False, f"Python执行失败: {result.stderr}"
        # 测试 pip 模块
        p2 = subprocess.run([python_exe, "-m", "pip", "--version"], capture_output=True, text=True, timeout=20)
        if p2.returncode != 0:
            return False, f"pip模块异常: {p2.stdout or p2.stderr}"
        return True, f"虚拟环境正常工作: {result.stdout.strip()} | {p2.stdout.strip()}"
    except Exception as e:
        return False, f"测试失败: {e}"


def ensure_packages(venv_path: str, project_root: Path) -> None:
    """如存在 requirements.txt，则使用 venv 的 python -m pip 安装/补全依赖"""
    req = project_root / "requirements.txt"
    if not req.exists():
        print("提示: 未发现 requirements.txt，跳过依赖补全。")
        return
    py = Path(venv_path) / "Scripts" / "python.exe"
    try:
        print("\n正在检查并补全依赖...")
        r = subprocess.run([str(py), "-m", "pip", "install", "--upgrade", "pip", "setuptools", "wheel"], capture_output=True, text=True)
        if r.returncode != 0:
            print("pip 核心工具升级可能失败:", (r.stdout or r.stderr))
        r2 = subprocess.run([str(py), "-m", "pip", "install", "-r", str(req)], capture_output=True, text=True)
        if r2.returncode != 0:
            print("警告: 部分依赖安装失败:", (r2.stdout or r2.stderr))
        else:
            print("依赖补全完成。")
    except Exception as e:
        print(f"警告: 依赖补全时出错: {e}")


def main():
    """主函数"""
    print("=" * 60)
    print("虚拟环境路径自动修复工具")
    print("=" * 60)
    
    # 检查虚拟环境目录（基于脚本位置推导项目根目录，避免CWD不一致）
    venv_name = "VEnvFrame-Env"
    script_path = Path(__file__).resolve()
    project_root = script_path.parent.parent  # Tools/ 上级即项目根
    venv_path = str(project_root / venv_name)
    
    # 若 venv 不存在，给出提示并退出（保持原有行为，由 build_env.bat 负责创建）
    if not os.path.exists(venv_path):
        print(f"错误: 虚拟环境目录不存在: {venv_path}")
        print("提示: 请先运行一键构建/补全命令: .\\build_env.bat")
        return False
    
    print(f"找到虚拟环境: {venv_path}")
    
    # 严格检查现有 venv 的 Python 版本
    venv_python = os.path.join(venv_path, "Scripts", "python.exe")
    if os.path.exists(venv_python):
        try:
            result = subprocess.run([venv_python, "-c", "import platform; print(platform.python_version())"], 
                                    capture_output=True, text=True, timeout=10)
            if result.returncode == 0:
                venv_py_ver = result.stdout.strip()
                if venv_py_ver != "3.12.8":
                    print(f"严格模式检查: 发现虚拟环境Python版本为 {venv_py_ver}，非预期的 3.12.8")
                    print("建议运行 .\\build_env.bat 自动重建为Python 3.12.8环境")
                    print("或手动删除当前虚拟环境后重新创建")
                    return False
                else:
                    print(f"✅ 虚拟环境Python版本验证通过: {venv_py_ver}")
            else:
                print("警告: 无法获取虚拟环境Python版本，继续修复...")
        except Exception as e:
            print(f"警告: 版本检查时出错: {e}，继续修复...")
    
    # 查找Python可执行文件
    print("\n正在查找Python 3.12.8...")
    python_exe = find_python_executable()
    
    if not python_exe:
        print("错误: 未找到Python 3.12.8，请确保已正确安装 Python 3.12.8")
        print("提示: 可运行 .\\build_env.bat 自动安装/配置 Python 3.12.8")
        return False
    
    print(f"找到Python: {python_exe}")
    
    # 修复pyvenv.cfg
    print("\n正在修复pyvenv.cfg...")
    if not fix_pyvenv_cfg(venv_path, python_exe):
        print("错误: 修复pyvenv.cfg失败")
        return False
    
    # 修复Scripts路径
    print("\n正在修复Scripts目录...")
    if not fix_scripts_path(venv_path, python_exe):
        print("警告: 修复Scripts目录时出现问题，但可能不影响使用")
    
    # 修复 Bash/CMD activate 路径
    fix_bash_activate(venv_path)
    fix_cmd_activate(venv_path)

    # 重新生成 pip 启动器
    fix_pip_launchers(venv_path, python_exe)
    
    # 依赖补全（若存在 requirements.txt）
    ensure_packages(venv_path, project_root)
    
    # 测试虚拟环境
    print("\n正在测试虚拟环境...")
    success, message = test_venv(venv_path)
    
    if success:
        print(f"✅ {message}")
        print("\n修复完成！现在可以正常使用虚拟环境了。")
        print(f"激活命令: .\\{venv_name}\\Scripts\\Activate.ps1 (PowerShell)")
        print(f"或: .\\{venv_name}\\Scripts\\activate.bat (CMD)")
        return True
    else:
        print(f"❌ 测试失败: {message}")
        print("建议重新创建虚拟环境 (可运行 .\\build_env.bat)")
        return False


if __name__ == "__main__":
    try:
        success = main()
        sys.exit(0 if success else 1)
    except KeyboardInterrupt:
        print("\n\n用户中断操作")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n未预期的错误: {e}")
        sys.exit(1)