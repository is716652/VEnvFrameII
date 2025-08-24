# Developer Environment & Database – AI Quickstart Guide

Audience: New developers and AI assistants. Goal: Configure the Python virtual environment, pick/switch the database, and troubleshoot – all from this one file.

---

## 1) TL;DR
- Always use the project virtual environment: VEnvFrame-Env (Python 3.12.8)
- Business DB is selected via DB/database_config.json (default: SQLite); switch with DB/db_switch.py
- Prefer scripts: build_env.bat (build/fix deps), activate_env.bat (activate), fix_venv_path.bat (post-move repair)

## 2) Quickstart (3 steps)
1. Build/fix the venv (use a mirror if needed)
```
./build_env.bat [tsinghua|aliyun|douban|ustc|default]
```
2. Activate and verify
```
./activate_env.bat
where python
python --version
python -m pip --version
```
3. Choose the database (default SQLite)
```
cd DB
python db_switch.py current    # show current DB
python db_switch.py list       # list available DBs
python db_switch.py switch redis  # e.g. switch to Redis
python db_switch.py test       # test current DB connection
```

## 3) Minimal must-know files & dirs
- Venv config: <mcfile name="venv_config.ini" path="d:\Trae_Project\VEnvFrameII\venv_config.ini"></mcfile>
  - PYTHON312_HOME=C:\Python312 (or your Python 3.12.8 install dir)
  - MIRROR=tsinghua (optional mirror)
- DB config: <mcfile name="database_config.json" path="d:\Trae_Project\VEnvFrameII\DB\database_config.json"></mcfile>
  - current_database: default sqlite (can switch to redis/mysql)
  - Each DB connection settings live here
- Key scripts:
  - <mcfile name="build_env.bat" path="d:\Trae_Project\VEnvFrameII\build_env.bat"></mcfile> (one-click build/fix)
  - <mcfile name="activate_env.bat" path="d:\Trae_Project\VEnvFrameII\activate_env.bat"></mcfile> (activate + self-check)
  - <mcfile name="fix_venv_path.bat" path="d:\Trae_Project\VEnvFrameII\fix_venv_path.bat"></mcfile> (post-move repair)
  - <mcfile name="db_switch.py" path="d:\Trae_Project\VEnvFrameII\DB\db_switch.py"></mcfile> (DB switch)

## 4) Moving/Copying to a new machine/project
- Copy the entire VEnvFrameII folder to the new project root
- First run on the new machine:
```
./fix_venv_path.bat
# If repair fails or Python version mismatches:
./build_env.bat tsinghua
```
- Activate and validate:
```
./activate_env.bat
where python
python -c "import sys; print(sys.executable)"
python -m pip list | find /c /v ""
```
- DB check and optional switch:
```
cd DB
python db_switch.py current
python db_switch.py test
```

## 5) Database system (minimal mental model)
- Default DB: SQLite (see current_database in database_config.json)
- Supported DBs: SQLite, Redis, (planned) MySQL
- Unified entry point: <mcfile name="database_manager.py" path="d:\Trae_Project\VEnvFrameII\DB\database_manager.py"></mcfile>
- Common commands:
```
cd DB
python db_switch.py list
python db_switch.py switch sqlite|redis|mysql
python db_switch.py test [optional:db_name]
```
- Quick code example:
```python
from DB.database_manager import DatabaseManager

# get current DB connection
conn = DatabaseManager().get_connection()

# switch DB
DatabaseManager().set_current_database('redis')
DatabaseManager().test_connection()
```

## 6) Manual path (only if you know why)
1. Create the venv (must be Python 3.12.8)
```
python -m venv VEnvFrame-Env
```
2. Activate the venv
- PowerShell: `./VEnvFrame-Env/Scripts/Activate.ps1`
- CMD: `./VEnvFrame-Env/Scripts/activate.bat`
- Linux/macOS: `source ./VEnvFrame-Env/bin/activate`
3. Install dependencies
```
pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```

## 7) Troubleshooting
- PowerShell errors using `&&`/`||`
  - Use `; if ($LASTEXITCODE -eq 0) { ... } else { ... }` or `cmd /c "..."`
- `.pth` related errors in the venv
  - Remove VEnvFrame-Env and rebuild, then reinstall deps
- Scripts cannot find Python 3.12.8 (PYTHON312_HOME not set)
  - Set Python 3.12.8 install dir in venv_config.ini
- Activation fails after moving
  - Run `./fix_venv_path.bat`; if still failing run `./build_env.bat [mirror]`

## 8) AI runbook (do exactly these)
1. In project root: `./fix_venv_path.bat` or `./build_env.bat tsinghua`
2. `./activate_env.bat` then check: `python --version` should be 3.12.8
3. Read `DB/database_config.json` -> `current_database`
4. Need switch? `cd DB && python db_switch.py switch redis && python db_switch.py test`
5. Run tests/app: `python DB/test_database_system.py`

---
This document is the authoritative onboarding entry point for VEnvFrameII.