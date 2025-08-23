# VEnvFrameII

一个用于快速构建、修复与移植 Python 虚拟环境的示例项目，并内置数据库访问模块与轻量监控示例。

## 功能模块
- 虚拟环境构建与修复
  - build_env.bat 一键安装依赖
  - activate_env.bat 一键激活环境
  - Tools/fix_venv_path.* 修复因路径变更导致的虚拟环境失效
- 数据库模块（DB）
  - SQLite 管理与示例：DB/sqlite/sqlite_manager.py、DB/simple_sqlite_test.py
  - 配置切换与统一入口：DB/database_manager.py、DB/db_switch.py
  - Redis 管理：DB/redis/redis_manager.py（如本地未安装 Redis，可忽略）
- 监控示例（Monitor）
  - 轻量服务示例：Monitor/app.py（模板在 Monitor/templates/）

## 目录结构（节选）
- DB/ 数据库管理与示例代码
- Monitor/ 轻量监控服务与模板
- Tools/ 工具脚本（虚拟环境路径修复等）
- requirements.txt、requirements_clean.txt 依赖清单
- venv_config.ini 虚拟环境配置
- 文案/ 文档与演示资源

## 快速开始（Windows）
1) 克隆仓库
   - git clone https://github.com/is716652/VEnvFrameII.git
   - cd VEnvFrameII

2) 一键构建与激活（推荐）
   - 双击或在终端执行 build_env.bat 安装/修复依赖
   - 双击或在终端执行 activate_env.bat 激活虚拟环境

3) 手动安装依赖（可选）
   - 确保 Python 3.12 环境可用
   - pip install -r requirements.txt

4) 运行监控示例（如需）
   - python Monitor/app.py
   - 浏览器访问提示地址（若为 Flask/本地服务，将在控制台输出）

## 数据库说明
- 本地数据库文件与缓存不纳入版本控制（已在 .gitignore 中配置）
- 如需切换数据库类型/配置，请参考 DB/database_config.json 与 DB/db_switch.py

## Git 说明
- 已配置 .gitignore，忽略虚拟环境、缓存、日志、数据库文件等
- 常规流程：
  - git add -A
  - git commit -m "feat/fix/docs: your message"
  - git push

## 许可
- 如需添加许可证，请在根目录放置 LICENSE 文件并更新本说明。