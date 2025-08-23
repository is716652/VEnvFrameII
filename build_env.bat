@echo off
chcp 65001 >nul
setlocal EnableExtensions

set "SCRIPT_DIR=%~dp0"
set "VENV_DIR=%SCRIPT_DIR%VEnvFrame-Env"
set "REQ_FILE=%SCRIPT_DIR%requirements.txt"
set "PACKAGE_EXE=%SCRIPT_DIR%package\python-3.12.8-amd64.exe"
set "CONFIG_FILE=%SCRIPT_DIR%venv_config.ini"

REM 读取命令行镜像参数（优先级最高），示例：build_env.bat tsinghua|aliyun|douban|ustc|default
set "CLI_MIRROR=%~1"

REM 从配置文件读取 PYTHON312_HOME 与 MIRROR
set "CONF_PY312_HOME="
set "CONF_MIRROR="
if exist "%CONFIG_FILE%" (
  for /f "usebackq tokens=1,2 delims==" %%A in ("%CONFIG_FILE%") do (
    if /i "%%A"=="PYTHON312_HOME" if not "%%B"=="" set "CONF_PY312_HOME=%%~B"
    if /i "%%A"=="MIRROR" if not "%%B"=="" set "CONF_MIRROR=%%~B"
  )
)

REM 解析镜像设置（命令行 > 配置文件 > 默认无）
if not "%CLI_MIRROR%"=="" (set "MIRROR=%CLI_MIRROR%") else if not "%CONF_MIRROR%"=="" (set "MIRROR=%CONF_MIRROR%") else set "MIRROR="
set "PIP_ARGS="
if /i "%MIRROR%"=="tsinghua" set "PIP_ARGS=--index-url https://pypi.tuna.tsinghua.edu.cn/simple"
if /i "%MIRROR%"=="aliyun"   set "PIP_ARGS=--index-url https://mirrors.aliyun.com/pypi/simple/"
if /i "%MIRROR%"=="douban"   set "PIP_ARGS=--index-url https://pypi.douban.com/simple"
if /i "%MIRROR%"=="ustc"     set "PIP_ARGS=--index-url https://pypi.mirrors.ustc.edu.cn/simple"
if /i "%MIRROR%"=="default"  set "PIP_ARGS="
if not "%PIP_ARGS%"=="" echo 已选择镜像: %MIRROR%

REM 严格模式：必须使用 Python 3.12.8 创建/维护虚拟环境
set "PY_EXE="

REM 0) 优先使用配置文件中的 PYTHON312_HOME
if not "%CONF_PY312_HOME%"=="" (
  if exist "%CONF_PY312_HOME%\python.exe" (
    for /f "usebackq tokens=*" %%V in (`"%CONF_PY312_HOME%\python.exe" -c "import platform;print(platform.python_version())" 2^>nul`) do set "_CONF_VER=%%V"
    if "%_CONF_VER%"=="3.12.8" set "PY_EXE=%CONF_PY312_HOME%\python.exe"
  )
)
if not "%PY_EXE%"=="" goto HAVE_PY312

REM 1) 通过 py 启动器寻找 3.12.8
for /f "usebackq tokens=*" %%P in (`py -3.12 -c "import sys,platform;print(sys.executable if platform.python_version()=='3.12.8' else '')" 2^>nul`) do set "PY_EXE=%%P"
if not "%PY_EXE%"=="" goto HAVE_PY312

REM 2) 尝试 python3.12 命令并校验精确版本
for /f "tokens=*" %%P in ('python3.12 -c "import sys,platform;print(sys.executable if platform.python_version()=='3.12.8' else '')" 2^>nul') do set "PY_EXE=%%P"
if not "%PY_EXE%"=="" goto HAVE_PY312

REM 3) 常见安装路径并校验精确版本
for %%X in ( 
  "C:\\Users\\%USERNAME%\\AppData\\Local\\Programs\\Python\\Python312\\python.exe" 
  "C:\\Users\\%USERNAME%\\Python\\Python312\\python.exe" 
  "C:\\Python312\\python.exe" 
  "C:\\Program Files\\Python312\\python.exe" 
  "C:\\Program Files (x86)\\Python312\\python.exe" 
) do (
  if exist %%~X (
    for /f "usebackq tokens=*" %%V in (`%%~X -c "import platform;print(platform.python_version())" 2^>nul`) do set "_CHK_VER=%%V"
    if "%_CHK_VER%"=="3.12.8" set "PY_EXE=%%~X"
  )
  if not "%PY_EXE%"=="" goto HAVE_PY312
)

REM 4) 未找到则尝试使用本地安装包自动安装 3.12.8
if exist "%PACKAGE_EXE%" (
  echo 未检测到 Python 3.12.8，正在从本地安装包自动安装: %PACKAGE_EXE%
  "%PACKAGE_EXE%" /quiet PrependPath=1 Include_pip=1
  if %errorlevel% neq 0 (
    echo 警告: 静默安装失败，尝试交互式安装...
    start "" "%PACKAGE_EXE%"
    echo 请完成安装后按任意键继续...
    pause >nul
  )
  REM 安装后再次检测
  set "PY_EXE="
  for /f "usebackq tokens=*" %%P in (`py -3.12 -c "import sys,platform;print(sys.executable if platform.python_version()=='3.12.8' else '')" 2^>nul`) do set "PY_EXE=%%P"
  if "%PY_EXE%"=="" for /f "tokens=*" %%P in ('python3.12 -c "import sys,platform;print(sys.executable if platform.python_version()=='3.12.8' else '')" 2^>nul') do set "PY_EXE=%%P"
  if "%PY_EXE%"=="" for %%X in ("C:\\Users\\%USERNAME%\\AppData\\Local\\Programs\\Python\\Python312\\python.exe" "C:\\Python312\\python.exe") do (
    if exist %%~X (
      for /f "usebackq tokens=*" %%V in (`%%~X -c "import platform;print(platform.python_version())" 2^>nul`) do set "_CHK_VER=%%V"
      if "%_CHK_VER%"=="3.12.8" set "PY_EXE=%%~X"
    )
  )
)

if "%PY_EXE%"=="" (
  echo 错误: 仍未找到 Python 3.12.8，请手动安装后重试。
  exit /b 1
)

:HAVE_PY312
echo 使用 Python 3.12.8: %PY_EXE%

REM 5) 若已存在 venv，校验其 Python 版本是否为 3.12.8；若不是则重建
if exist "%VENV_DIR%\Scripts\python.exe" (
  for /f "tokens=*" %%V in ('"%VENV_DIR%\Scripts\python.exe" -c "import platform;print(platform.python_version())" 2^>nul') do set "VENV_PY_VER=%%V"
  if not "%VENV_PY_VER%"=="3.12.8" (
    echo 严格模式: 发现已有虚拟环境版本为 %VENV_PY_VER%，将重建为 3.12.8。
    rmdir /s /q "%VENV_DIR%"
  )
)

REM 6) 如果 venv 不存在则创建
if not exist "%VENV_DIR%\Scripts\python.exe" (
  echo 正在创建虚拟环境: %VENV_DIR%
  "%PY_EXE%" -m venv "%VENV_DIR%"
  if %errorlevel% neq 0 (
    echo 错误: 创建虚拟环境失败。
    exit /b 1
  )
)

REM 7) 使用 venv 内的 python 进行 pip 升级与依赖安装（带镜像参数，可选）
set "VENV_PY=%VENV_DIR%\Scripts\python.exe"
"%VENV_PY%" -m pip install --upgrade pip setuptools wheel %PIP_ARGS%
if %errorlevel% neq 0 (
  echo 警告: pip 核心工具升级可能失败，尝试不使用镜像重试...
  "%VENV_PY%" -m pip install --upgrade pip setuptools wheel
)
if exist "%REQ_FILE%" (
  echo 正在安装/补全依赖自: %REQ_FILE%
  "%VENV_PY%" -m pip install -r "%REQ_FILE%" %PIP_ARGS%
  if %errorlevel% neq 0 (
    echo 警告: 使用镜像安装失败，尝试不使用镜像重试...
    "%VENV_PY%" -m pip install -r "%REQ_FILE%"
  )
) else (
  echo 提示: 未找到 requirements.txt，跳过依赖安装。
)

REM 8) 输出总结
"%VENV_PY%" -c "import platform;print('Python:', platform.python_version())"
"%VENV_PY%" -m pip --version
"%VENV_PY%" -m pip list | find /c /v ""

echo.
echo [完成] 严格模式：虚拟环境构建/补全已执行（Python 3.12.8）。可运行: .\activate_env.bat 进入环境。