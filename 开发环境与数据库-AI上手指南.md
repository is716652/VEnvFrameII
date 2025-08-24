# 开发环境与数据库-AI上手指南

面向对象：新加入的开发人员与AI助理。目标：不跳转或少跳转，仅靠本文件即可完成环境激活、依赖安装、数据库选择/切换与常见问题排查。

---

## 1. 一句话要点
- 必须使用本项目提供的虚拟环境：VEnvFrame-Env（Python 3.12.8）
- 业务数据库由 DB/database_config.json 决定（默认 SQLite），可用 db_switch.py 一键切换
- 优先使用脚本：build_env.bat（构建/补全）、activate_env.bat（激活）、fix_venv_path.bat（迁移修复）

## 2. 快速开始（3 步到位）
1) 构建/补全虚拟环境（可选镜像）
```
./build_env.bat [tsinghua|aliyun|douban|ustc|default]
```
2) 激活虚拟环境并验证
```
./activate_env.bat
where python
python --version
python -m pip --version
```
3) 选择数据库（默认 SQLite）
```
cd DB
python db_switch.py current    # 查看当前数据库
python db_switch.py list       # 列出可用数据库
python db_switch.py switch redis  # 示例：切换到 Redis
python db_switch.py test       # 测试当前数据库连接
```

## 3. 配置文件与目录（最小必读）
- 虚拟环境配置：<mcfile name="venv_config.ini" path="d:\Trae_Project\VEnvFrameII\venv_config.ini"></mcfile>
  - PYTHON312_HOME=C:\Python312（或你的 Python 3.12.8 安装目录）
  - MIRROR=tsinghua（镜像源，可选）
- 数据库配置：<mcfile name="database_config.json" path="d:\Trae_Project\VEnvFrameII\DB\database_config.json"></mcfile>
  - current_database：默认 sqlite，可切换为 redis/mysql
  - 每个数据库的连接参数见该文件
- 关键脚本：
  - <mcfile name="build_env.bat" path="d:\Trae_Project\VEnvFrameII\build_env.bat"></mcfile>（一键构建/补全）
  - <mcfile name="activate_env.bat" path="d:\Trae_Project\VEnvFrameII\activate_env.bat"></mcfile>（激活并自检）
  - <mcfile name="fix_venv_path.bat" path="d:\Trae_Project\VEnvFrameII\fix_venv_path.bat"></mcfile>（迁移修复）
  - <mcfile name="db_switch.py" path="d:\Trae_Project\VEnvFrameII\DB\db_switch.py"></mcfile>（数据库切换）

## 4. 迁移/复制到新项目的必做事项
- 将整个 VEnvFrameII 文件夹复制到新项目根目录
- 首次在新机器上执行：
```
./fix_venv_path.bat
# 如修复失败或版本不一致：
./build_env.bat tsinghua
```
- 激活并验证：
```
./activate_env.bat
where python
python -c "import sys; print(sys.executable)"
python -m pip list | find /c /v ""
```
- 数据库确认与切换：
```
cd DB
python db_switch.py current
python db_switch.py test
```

## 5. 数据库系统（AI与新手最小模型）
- 默认数据库：SQLite（见 database_config.json 的 current_database）
- 支持数据库：SQLite、Redis、(预留)MySQL
- 统一入口：<mcfile name="database_manager.py" path="d:\Trae_Project\VEnvFrameII\DB\database_manager.py"></mcfile>
- 常用命令：
```
cd DB
python db_switch.py list
python db_switch.py switch sqlite|redis|mysql
python db_switch.py test [可选:数据库名]
```
- 代码快速示例：
```python
from DB.database_manager import DatabaseManager

# 获取当前数据库连接
conn = DatabaseManager().get_connection()

# 切换数据库
DatabaseManager().set_current_database('redis')
DatabaseManager().test_connection()
```

## 6. 手动方式（仅当你明确需要）
1) 创建虚拟环境（必须是 Python 3.12.8）
```
python -m venv VEnvFrame-Env
```
2) 激活虚拟环境
- PowerShell: `./VEnvFrame-Env/Scripts/Activate.ps1`
- CMD: `./VEnvFrame-Env/Scripts/activate.bat`
- Linux/macOS: `source ./VEnvFrame-Env/bin/activate`
3) 安装依赖
```
pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```

## 7. 常见故障与处理
- PowerShell 用 `&&`/`||` 报错
  - 用 `; if ($LASTEXITCODE -eq 0) { ... } else { ... }` 或 `cmd /c "..."`
- venv 中出现 `.pth` 报错
  - 删除 VEnvFrame-Env 目录后重建，再安装依赖
- 未配置 PYTHON312_HOME 导致脚本找不到 3.12.8
  - 在 venv_config.ini 中填写 Python 3.12.8 安装目录
- 迁移后激活失败
  - 先运行 `./fix_venv_path.bat`，仍异常则 `./build_env.bat [mirror]`

## 8. AI 执行清单（可直接照做）
1) 在项目根目录执行：`./fix_venv_path.bat` 或 `./build_env.bat tsinghua`
2) `./activate_env.bat` 后检查：`python --version` 应为 3.12.8
3) 读取 `DB/database_config.json` 中的 `current_database`
4) 如需切换：`cd DB && python db_switch.py switch redis && python db_switch.py test`
5) 运行应用或测试：`python DB/test_database_system.py`

---
本文件整合了原“环境构建与移植指南.md”与“数据库系统使用指南.md”的关键内容，作为 VEnvFrameII 的权威上手入口。