// 真实项目代码内容
const realCodeContent = {
    // 数据库管理器代码
    databaseManager: `#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
数据库管理器
支持SQLite、Redis、MySQL等多种数据库的统一管理
"""

import json
import os
import sqlite3
import redis
import pymysql
from typing import Dict, Any, Optional, Union
from datetime import datetime
import logging

# 配置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class DatabaseManager:
    """数据库管理器"""
    
    def __init__(self, config_file: str = "database_config.json"):
        """初始化数据库管理器"""
        self.config_file = config_file
        self.config = self._load_config()
        self.connections = {}
        
    def _load_config(self) -> Dict[str, Any]:
        """加载配置文件"""
        try:
            with open(self.config_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            logger.error(f"配置文件 {self.config_file} 不存在")
            raise
        except json.JSONDecodeError as e:
            logger.error(f"配置文件格式错误: {e}")
            raise
    
    def _save_config(self):
        """保存配置文件"""
        with open(self.config_file, 'w', encoding='utf-8') as f:
            json.dump(self.config, f, ensure_ascii=False, indent=2)
    
    def get_current_database(self) -> str:
        """获取当前使用的数据库"""
        return self.config.get('current_database', 'sqlite')
    
    def set_current_database(self, db_name: str) -> bool:
        """设置当前使用的数据库"""
        if db_name not in self.config['databases']:
            logger.error(f"数据库 {db_name} 不存在")
            return False
        
        if not self.config['databases'][db_name]['enabled']:
            logger.error(f"数据库 {db_name} 未启用")
            return False
        
        self.config['current_database'] = db_name
        self._save_config()
        logger.info(f"已切换到数据库: {db_name}")
        return True`,

    // 监控系统代码
    monitorApp: `#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
VEnvFrame监控系统
提供Web界面监控虚拟环境状态和性能
"""

import os
import json
import time
import psutil
import platform
import subprocess
from datetime import datetime
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

# 加载配置
def load_config():
    try:
        with open('config.json', 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return {
            "refresh_interval": 5000,
            "log_level": "info",
            "max_history": 100,
            "alert_threshold": {
                "cpu": 80,
                "memory": 80,
                "disk": 90
            }
        }

config = load_config()

# 获取系统信息
def get_system_info():
    return {
        "os": platform.system(),
        "os_version": platform.version(),
        "python_version": platform.python_version(),
        "hostname": platform.node(),
        "cpu_count": psutil.cpu_count(logical=True),
        "memory_total": psutil.virtual_memory().total,
        "boot_time": datetime.fromtimestamp(psutil.boot_time()).strftime("%Y-%m-%d %H:%M:%S")
    }

# 获取虚拟环境信息
def get_venv_info():
    venv_path = os.environ.get('VIRTUAL_ENV', '')
    if not venv_path:
        return {"active": False}
    
    try:
        # 获取已安装的包
        pip_result = subprocess.run(
            [os.path.join(venv_path, 'Scripts', 'pip.exe' if os.name == 'nt' else 'pip'), 'list', '--format=json'],
            capture_output=True, text=True, check=True
        )
        packages = json.loads(pip_result.stdout)
        
        # 获取Python路径
        python_path = os.path.join(venv_path, 'Scripts', 'python.exe' if os.name == 'nt' else 'bin/python')
        
        return {
            "active": True,
            "path": venv_path,
            "name": os.path.basename(venv_path),
            "python_path": python_path,
            "package_count": len(packages),
            "top_packages": sorted(packages, key=lambda x: x['name'])[:10]
        }
    except Exception as e:
        return {
            "active": True,
            "path": venv_path,
            "name": os.path.basename(venv_path),
            "error": str(e)
        }

# 获取性能指标
def get_performance_metrics():
    return {
        "cpu": psutil.cpu_percent(interval=0.5),
        "memory": psutil.virtual_memory().percent,
        "disk": psutil.disk_usage('/').percent,
        "timestamp": datetime.now().strftime("%H:%M:%S")
    }

# 路由：首页
@app.route('/')
def index():
    return render_template('index.html', config=config)

# API：系统信息
@app.route('/api/system')
def api_system():
    return jsonify(get_system_info())

# API：虚拟环境信息
@app.route('/api/venv')
def api_venv():
    return jsonify(get_venv_info())

# API：性能指标
@app.route('/api/metrics')
def api_metrics():
    return jsonify(get_performance_metrics())

# API：配置
@app.route('/api/config', methods=['GET', 'POST'])
def api_config():
    global config
    if request.method == 'POST':
        new_config = request.json
        config.update(new_config)
        with open('config.json', 'w', encoding='utf-8') as f:
            json.dump(config, f, indent=2)
        return jsonify({"status": "success"})
    return jsonify(config)

if __name__ == '__main__':
    print("启动VEnvFrame监控系统...")
    print(f"Python版本: {platform.python_version()}")
    print(f"访问地址: http://127.0.0.1:5000")
    app.run(debug=True)`,

    // 路径修复工具代码
    fixVenvPath: `#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
虚拟环境路径修复工具
用于修复移植后的虚拟环境中的路径问题
"""

import os
import sys
import re
import shutil
import platform
from pathlib import Path

def print_header():
    """打印工具标题"""
    print("=" * 60)
    print("VEnvFrame - 虚拟环境路径修复工具")
    print("=" * 60)
    print(f"Python版本: {platform.python_version()}")
    print(f"操作系统: {platform.system()} {platform.version()}")
    print("-" * 60)

def get_venv_path():
    """获取虚拟环境路径"""
    # 首先检查当前目录下是否有虚拟环境
    current_dir = Path.cwd()
    venv_dir = current_dir / "VEnvFrame-Env"
    
    if venv_dir.exists() and (venv_dir / "pyvenv.cfg").exists():
        return venv_dir
    
    # 如果没有找到，询问用户
    print("未在当前目录找到虚拟环境(VEnvFrame-Env)。")
    venv_path = input("请输入虚拟环境路径(留空使用当前目录): ").strip()
    
    if not venv_path:
        venv_path = str(current_dir / "VEnvFrame-Env")
    
    venv_dir = Path(venv_path)
    if not venv_dir.exists():
        print(f"错误: 路径 {venv_dir} 不存在")
        sys.exit(1)
    
    if not (venv_dir / "pyvenv.cfg").exists():
        print(f"错误: {venv_dir} 不是有效的虚拟环境(缺少pyvenv.cfg)")
        sys.exit(1)
    
    return venv_dir

def fix_pyvenv_cfg(venv_path):
    """修复pyvenv.cfg文件中的路径"""
    cfg_file = venv_path / "pyvenv.cfg"
    if not cfg_file.exists():
        print(f"错误: 未找到配置文件 {cfg_file}")
        return False
    
    # 读取配置文件
    with open(cfg_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 获取系统Python路径
    system_python = sys.executable
    
    # 修改home路径
    new_content = re.sub(
        r'home\s*=\s*.*',
        f'home = {os.path.dirname(system_python)}',
        content
    )
    
    # 写回配置文件
    with open(cfg_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✅ 已更新 {cfg_file}")
    return True

def fix_scripts(venv_path):
    """修复激活脚本中的路径"""
    scripts_dir = venv_path / ("Scripts" if platform.system() == "Windows" else "bin")
    if not scripts_dir.exists():
        print(f"错误: 未找到脚本目录 {scripts_dir}")
        return False
    
    # 修复激活脚本
    activate_files = [
        scripts_dir / "activate",
        scripts_dir / "activate.bat",
        scripts_dir / "Activate.ps1"
    ]
    
    for activate_file in activate_files:
        if not activate_file.exists():
            continue
        
        with open(activate_file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # 替换旧路径为新路径
        new_content = content.replace(
            str(venv_path).replace('\\', '/'),
            str(venv_path).replace('\\', '/')
        ).replace(
            str(venv_path).replace('/', '\\'),
            str(venv_path).replace('/', '\\')
        )
        
        with open(activate_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"✅ 已更新 {activate_file}")
    
    return True

def create_activation_scripts(venv_path):
    """创建根目录下的激活脚本"""
    # 创建批处理文件
    bat_content = f'@echo off\necho 正在激活虚拟环境...\ncall "{venv_path}\\Scripts\\activate.bat"\necho 虚拟环境已激活\ncmd /k'
    with open("activate_env.bat", 'w', encoding='utf-8') as f:
        f.write(bat_content)
    
    # 创建PowerShell脚本
    ps_content = f'Write-Host "正在激活虚拟环境..." -ForegroundColor Green\n& "{venv_path}\\Scripts\\Activate.ps1"\nWrite-Host "虚拟环境已激活" -ForegroundColor Green'
    with open("activate_env.ps1", 'w', encoding='utf-8') as f:
        f.write(ps_content)
    
    print("✅ 已创建激活脚本: activate_env.bat, activate_env.ps1")
    return True

def main():
    """主函数"""
    print_header()
    
    # 获取虚拟环境路径
    venv_path = get_venv_path()
    print(f"虚拟环境路径: {venv_path}")
    
    # 修复pyvenv.cfg
    if fix_pyvenv_cfg(venv_path):
        print("✅ 配置文件修复成功")
    else:
        print("❌ 配置文件修复失败")
    
    # 修复激活脚本
    if fix_scripts(venv_path):
        print("✅ 激活脚本修复成功")
    else:
        print("❌ 激活脚本修复失败")
    
    # 创建激活脚本
    if create_activation_scripts(venv_path):
        print("✅ 根目录激活脚本创建成功")
    else:
        print("❌ 根目录激活脚本创建失败")
    
    print("\n" + "=" * 60)
    print("✅ 虚拟环境路径修复完成!")
    print("=" * 60)
    print("使用以下命令激活虚拟环境:")
    print("- Windows CMD: activate_env.bat")
    print("- Windows PowerShell: .\\activate_env.ps1")
    print("=" * 60)

if __name__ == "__main__":
    main()`,

    // 系统提示词模板
    systemPrompt: `# Python项目虚拟环境构建指南

## 项目基本信息

- 项目名称：VEnvFrame
- 根目录：VEnvFrame
- 描述：

## 虚拟环境配置

- 编程语言：Python
- Python版本：3.12
- 虚拟环境名称：VEnvFrame-Env
- 虚拟环境位置：项目根目录下

## 环境构建步骤



### 1. 创建虚拟环境

\`\`\`powershell
python -m venv VEnvFrame-Env
\`\`\`

### 2. 激活虚拟环境

- Windows (PowerShell):

\`\`\`powershell
.\\VEnvFrame-Env\\Scripts\\Activate.ps1
\`\`\`

- Windows (CMD):

\`\`\`cmd
.\\VEnvFrame-Env\\Scripts\\activate.bat
\`\`\`

- Linux/macOS:

\`\`\`bash
source ./VEnvFrame-Env/bin/activate
\`\`\`

### 3. 验证虚拟环境激活状态

**⚠️ 重要：在安装依赖包前，必须确认虚拟环境已正确激活！**

激活虚拟环境后，终端提示符前应显示 \`(VEnvFrame-Env)\` 标识，然后验证当前环境：

\`\`\`powershell
# 检查Python路径，应该指向虚拟环境
python -c "import sys; print('Python路径:', sys.executable)"

# 检查pip列表，应该只有基础包
pip list
\`\`\`

### 4. 安装依赖包到虚拟环境

**⚠️ 关键步骤：必须在激活虚拟环境的状态下安装依赖包！**

确保终端提示符前显示 \`(VEnvFrame-Env)\` 标识，然后执行以下命令：

- 使用国内镜像源（推荐清华源）:

\`\`\`powershell
# 方法1：使用虚拟环境中的pip（推荐）
pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

# 方法2：明确指定虚拟环境中的python和pip（更安全）
.\\VEnvFrame-Env\\Scripts\\python.exe -m pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
\`\`\`

- 或使用默认源:

\`\`\`powershell
pip install -r requirements.txt
\`\`\`

### 5. 验证依赖包安装

安装完成后，验证依赖包是否正确安装到虚拟环境：

\`\`\`powershell
# 检查已安装的包数量（应该有100+个包）
pip list | wc -l

# 验证关键包是否安装成功
python -c "import flask, fastapi, pandas, sqlalchemy; print('✅ 关键依赖包安装成功')"

# 确认Python路径仍指向虚拟环境
python -c "import sys; print('Python路径:', sys.executable)"
\`\`\`

## 项目开发规范

1. 所有开发工作必须在激活虚拟环境的状态下进行
2. 新增依赖包时，更新requirements.txt:

   \`\`\`powershell
   pip freeze > requirements.txt
   \`\`\`

3. 定期更新依赖包:

   \`\`\`powershell
   pip install --upgrade -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
   \`\`\`

## 虚拟环境管理命令

### 激活虚拟环境

- Windows (PowerShell):

\`\`\`powershell
.\\VEnvFrame-Env\\Scripts\\Activate.ps1
\`\`\`

- Windows (CMD):

\`\`\`cmd
.\\VEnvFrame-Env\\Scripts\\activate.bat
\`\`\`

- Linux/macOS:

\`\`\`bash
source ./VEnvFrame-Env/bin/activate
\`\`\`

### 退出虚拟环境

\`\`\`
deactivate
\`\`\`

### 删除虚拟环境

- 只需删除虚拟环境文件夹即可

\`\`\`powershell
Remove-Item -Recurse -Force .\\VEnvFrame-Env
\`\`\`

## 注意事项

### AI自动执行重要提醒

1. **虚拟环境激活验证**：AI执行时必须确认虚拟环境已正确激活，终端提示符显示 \`(VEnvFrame-Env)\`
2. **依赖包安装位置**：必须使用虚拟环境中的pip安装依赖包，避免安装到系统Python环境
3. **安装验证**：安装完成后必须验证依赖包是否正确安装到虚拟环境中
4. **路径确认**：执行过程中多次确认Python和pip路径指向虚拟环境

### 通用注意事项

1. 确保项目代码中不包含硬编码的路径，以保证在不同环境中的可移植性
2. 在版本控制系统中，通常应将虚拟环境文件夹(VEnvFrame-Env)添加到.gitignore中
3. 在团队协作中，确保所有成员使用相同版本的Python(3.12)和依赖包
4. 对于需要特定系统库的包，可能需要额外的系统级安装步骤

### 虚拟环境移植

当项目需要移植到其他机器时，可使用项目中提供的自动修复工具：
- \`fix_venv_path.py\` - Python修复脚本
- \`fix_venv_path.bat\` - Windows批处理版本  
- \`fix_venv_path.ps1\` - PowerShell版本
- \`虚拟环境移植指南.md\` - 详细使用说明

使用方法：
\`\`\`powershell
python fix_venv_path.py
\`\`\``,

    // 数据库配置
    databaseConfig: `{
  "current_database": "sqlite",
  "databases": {
    "sqlite": {
      "name": "SQLite数据库",
      "type": "sqlite",
      "enabled": true,
      "config": {
        "database_path": "DB/sqlite/app.db",
        "timeout": 30,
        "check_same_thread": false
      }
    },
    "redis": {
      "name": "Redis缓存",
      "type": "redis",
      "enabled": true,
      "config": {
        "host": "localhost",
        "port": 6379,
        "db": 0,
        "password": null,
        "socket_timeout": 5,
        "socket_connect_timeout": 5,
        "decode_responses": true
      }
    },
    "mysql": {
      "name": "MySQL数据库",
      "type": "mysql",
      "enabled": false,
      "config": {
        "host": "localhost",
        "port": 3306,
        "user": "root",
        "password": "password",
        "database": "venvframe",
        "charset": "utf8mb4",
        "autocommit": true
      }
    }
  }
}`
};