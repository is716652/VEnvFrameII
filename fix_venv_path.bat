@echo off
chcp 65001 >nul
setlocal EnableExtensions
set "SCRIPT_DIR=%~dp0"
set "VENV_DIR=%SCRIPT_DIR%VEnvFrame-Env"
set "CONFIG_FILE=%SCRIPT_DIR%venv_config.ini"
set "PY_CMD=python"

REM 优先从配置文件读取 Python 3.12.8 安装目录来选择解释器
if exist "%CONFIG_FILE%" (
  for /f "usebackq tokens=1,2 delims==" %%A in ("%CONFIG_FILE%") do (
    if /i "%%A"=="PYTHON312_HOME" if not "%%B"=="" set "CONF_PY_HOME=%%~B"
  )
)
if not "%CONF_PY_HOME%"=="" if exist "%CONF_PY_HOME%\python.exe" set "PY_CMD=%CONF_PY_HOME%\python.exe"

echo ========================================
echo 虚拟环境路径自动修复工具
echo ========================================
echo.

REM 如果虚拟环境不存在，提示使用构建命令
if not exist "%VENV_DIR%\Scripts\python.exe" (
    echo 错误: 未发现虚拟环境: %VENV_DIR%
    echo 请先运行一键构建/补全命令: .\build_env.bat
    echo 或手动执行: python -m venv VEnvFrame-Env ^&^& .\VEnvFrame-Env\Scripts\activate.bat ^&^& python -m pip install -r requirements.txt
    echo.
    pause
    exit /b 1
)

REM 检查Python是否可用
"%PY_CMD%" --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误: 未找到可用的 Python 解释器。
    echo 可在 venv_config.ini 中设置 PYTHON312_HOME 指向 python.exe 所在目录后重试。
    pause
    exit /b 1
)

REM 使用脚本相对路径运行修复脚本
echo 正在运行修复脚本...
"%PY_CMD%" "%SCRIPT_DIR%Tools\fix_venv_path.py"

if %errorlevel% equ 0 (
    echo.
    echo 修复完成！
    echo( 如仍提示缺包，可运行: .\build_env.bat 进行依赖补全
) else (
    echo.
    echo 修复过程中出现错误
)

echo.
echo 按任意键退出...
pause >nul