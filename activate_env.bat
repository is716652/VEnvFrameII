@echo off
chcp 65001 >nul
setlocal EnableExtensions
set "SCRIPT_DIR=%~dp0"
set "VENV_DIR=%SCRIPT_DIR%VEnvFrame-Env"
set "REQ_FILE=%SCRIPT_DIR%requirements.txt"

echo ========================================
echo    VEnvFrame 虚拟环境激活脚本
echo ========================================
echo.

REM 检查虚拟环境是否存在
if not exist "%VENV_DIR%\Scripts\activate.bat" (
    echo 错误: 虚拟环境不存在！
    echo 请先运行一键构建/补全命令: .\build_env.bat
    echo 或手动执行: python -m venv VEnvFrame-Env ^&^& .\VEnvFrame-Env\Scripts\activate.bat ^&^& python -m pip install -r requirements.txt
    echo.
    pause
    exit /b 1
)

echo 正在激活虚拟环境...
echo.

REM 激活虚拟环境并保持命令行窗口打开
call "%VENV_DIR%\Scripts\activate.bat"

REM 严格模式: 校验当前Python版本是否为 3.12.8
for /f "tokens=*" %%V in ('python -c "import platform; print(platform.python_version())" 2^>nul') do set CUR_PY_VER=%%V
if not "%CUR_PY_VER%"=="3.12.8" (
  echo 警告: 当前虚拟环境的 Python 版本为 %CUR_PY_VER%，与项目要求的 3.12.8 不一致。
  echo 建议运行 .\build_env.bat 以自动重建为 Python 3.12.8 环境。
)

REM 基础诊断
if exist "%REQ_FILE%" (
  for /f "tokens=*" %%C in ('python -c "import pathlib; req=[l.strip() for l in pathlib.Path(r'%REQ_FILE%').read_text(encoding='utf-8').splitlines() if l.strip() and not l.strip().startswith('#')]; print(len(req))"') do set REQ_COUNT=%%C
) else (
  set REQ_COUNT=0
)

REM 显示激活状态
echo 虚拟环境已激活
echo.
echo 当前 Python 路径:
where python
python -c "import sys; print(sys.executable)"
echo.
echo Python 版本与环境信息:
python -c "import sys, site; print('version:', sys.version); print('prefix:', sys.prefix); print('base_prefix:', sys.base_prefix); print('site-packages:', site.getsitepackages())"
echo.
echo PIP 路径与版本:
where pip
python -m pip --version

REM 检查是否缺包（以 pip list 数量与 requirements 大致比对为提示，不做强校验）
for /f "tokens=*" %%N in ('python -m pip list ^| find /c /v ""') do set PKG_COUNT=%%N
echo.
echo 已安装的包数量: %PKG_COUNT%
if not "%REQ_COUNT%"=="0" (
  echo 需求包数量 requirements.txt: %REQ_COUNT%
  if %PKG_COUNT% lss %REQ_COUNT% (
    echo 警告: 可能存在缺包，请运行 .\build_env.bat 进行依赖补全
  )
)

echo.
echo 已安装的包列表 - 通过 python -m pip:
python -m pip list

echo.
echo 提示: 输入 'deactivate' 可退出虚拟环境
echo ========================================
echo.

REM 保持命令行窗口打开，等待用户输入
cmd /k