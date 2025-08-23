#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
VEnvFrame 监控界面
提供虚拟环境和数据库的可视化管理
"""

from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import json
import os
import sys
import subprocess
import pkg_resources
from datetime import datetime
import logging

# 添加项目根目录到路径
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(project_root)

# 设置工作目录到项目根目录
os.chdir(project_root)

# 延迟导入DatabaseManager，避免初始化时的路径问题
DatabaseManager = None
try:
    from DB.database_manager import DatabaseManager
except Exception as e:
    print(f"警告: 无法导入DatabaseManager: {e}")

app = Flask(__name__)
CORS(app)  # 启用跨域支持

# 配置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class VEnvMonitor:
    """虚拟环境监控器"""
    
    def __init__(self):
        self.project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        self.venv_path = os.path.join(self.project_root, "VEnvFrame-Env")
        self.config_file = os.path.join(self.project_root, "Monitor", "config.json")
        self.load_config()
    
    def load_config(self):
        """加载配置"""
        default_config = {
            "port": 88,
            "host": "0.0.0.0",
            "debug": False
        }
        
        try:
            if os.path.exists(self.config_file):
                with open(self.config_file, 'r', encoding='utf-8') as f:
                    self.config = json.load(f)
            else:
                self.config = default_config
                self.save_config()
        except Exception as e:
            logger.error(f"加载配置失败: {e}")
            self.config = default_config
    
    def save_config(self):
        """保存配置"""
        try:
            os.makedirs(os.path.dirname(self.config_file), exist_ok=True)
            with open(self.config_file, 'w', encoding='utf-8') as f:
                json.dump(self.config, f, ensure_ascii=False, indent=2)
        except Exception as e:
            logger.error(f"保存配置失败: {e}")
    
    def get_python_info(self):
        """获取Python信息"""
        try:
            python_version = sys.version
            python_executable = sys.executable
            
            return {
                "version": python_version.split()[0],
                "full_version": python_version,
                "executable": python_executable,
                "platform": sys.platform
            }
        except Exception as e:
            logger.error(f"获取Python信息失败: {e}")
            return {"error": str(e)}
    
    def get_venv_info(self):
        """获取虚拟环境信息"""
        try:
            venv_name = os.path.basename(self.venv_path)
            venv_exists = os.path.exists(self.venv_path)
            
            info = {
                "name": venv_name,
                "path": self.venv_path,
                "exists": venv_exists,
                "active": False
            }
            
            # 检查是否激活
            if hasattr(sys, 'real_prefix') or (hasattr(sys, 'base_prefix') and sys.base_prefix != sys.prefix):
                info["active"] = True
            
            # 获取虚拟环境配置
            if venv_exists:
                pyvenv_cfg = os.path.join(self.venv_path, "pyvenv.cfg")
                if os.path.exists(pyvenv_cfg):
                    with open(pyvenv_cfg, 'r', encoding='utf-8') as f:
                        cfg_content = f.read()
                        info["config"] = cfg_content
            
            return info
        except Exception as e:
            logger.error(f"获取虚拟环境信息失败: {e}")
            return {"error": str(e)}
    
    def get_installed_packages(self):
        """获取已安装的包列表"""
        try:
            packages = []
            for dist in pkg_resources.working_set:
                packages.append({
                    "name": dist.project_name,
                    "version": dist.version,
                    "location": dist.location
                })
            
            # 按名称排序
            packages.sort(key=lambda x: x["name"].lower())
            
            return {
                "count": len(packages),
                "packages": packages
            }
        except Exception as e:
            logger.error(f"获取包列表失败: {e}")
            return {"error": str(e)}
    
    def get_database_info(self):
        """获取数据库信息"""
        try:
            # 直接读取配置文件，不依赖DatabaseManager
            config_path = os.path.join(self.project_root, "DB", "database_config.json")
            
            if not os.path.exists(config_path):
                return {"error": "数据库配置文件不存在"}
            
            with open(config_path, 'r', encoding='utf-8') as f:
                db_config = json.load(f)
            
            current_db = db_config.get("current_database")
            databases = db_config.get("databases", {})
            
            # 获取支持的数据库类型
            supported_dbs = []
            for db_name, db_info in databases.items():
                supported_dbs.append({
                    "name": db_name,
                    "type": db_info.get("type"),
                    "display_name": db_info.get("name"),
                    "enabled": db_info.get("enabled", False),
                    "current": db_name == current_db
                })
            
            return {
                "current_database": current_db,
                "supported_count": len(supported_dbs),
                "databases": supported_dbs,
                "config": db_config
            }
        except Exception as e:
            logger.error(f"获取数据库信息失败: {e}")
            return {"error": str(e)}

# 创建监控器实例
monitor = VEnvMonitor()

@app.route('/')
def index():
    """主页"""
    return render_template('index.html')

@app.route('/api/system/info')
def get_system_info():
    """获取系统信息"""
    try:
        info = {
            "timestamp": datetime.now().isoformat(),
            "python": monitor.get_python_info(),
            "venv": monitor.get_venv_info(),
            "packages": monitor.get_installed_packages(),
            "database": monitor.get_database_info()
        }
        return jsonify({"status": "success", "data": info})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

@app.route('/api/database/switch', methods=['POST'])
def switch_database():
    """切换数据库"""
    try:
        data = request.get_json()
        db_name = data.get('database')
        
        if not db_name:
            return jsonify({"status": "error", "message": "数据库名称不能为空"})
        
        # 更新配置文件
        config_path = os.path.join(monitor.project_root, "DB", "database_config.json")
        with open(config_path, 'r', encoding='utf-8') as f:
            db_config = json.load(f)
        
        if db_name not in db_config.get("databases", {}):
            return jsonify({"status": "error", "message": f"不支持的数据库类型: {db_name}"})
        
        db_config["current_database"] = db_name
        
        with open(config_path, 'w', encoding='utf-8') as f:
            json.dump(db_config, f, ensure_ascii=False, indent=2)
        
        return jsonify({
            "status": "success", 
            "message": f"已切换到 {db_name} 数据库",
            "current_database": db_name
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

@app.route('/api/database/test', methods=['POST'])
def test_database():
    """测试数据库连接"""
    try:
        if DatabaseManager is None:
            return jsonify({"status": "error", "message": "DatabaseManager未正确导入"})
        
        db_manager = DatabaseManager()
        result = db_manager.test_connection()
        
        if result.get("status") == "success":
            # 执行写入测试
            test_key = f"monitor_test_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
            test_value = {"message": "监控界面测试", "timestamp": datetime.now().isoformat()}
            
            write_result = db_manager.set_data(test_key, test_value)
            if write_result:
                # 读取测试
                read_result = db_manager.get_data(test_key)
                if read_result:
                    # 清理测试数据
                    db_manager.delete_data(test_key)
                    return jsonify({
                        "status": "success",
                        "message": "数据库连接和读写测试成功",
                        "test_data": {
                            "write": True,
                            "read": True,
                            "data": read_result
                        }
                    })
        
        return jsonify(result)
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

@app.route('/api/config/port', methods=['POST'])
def update_port():
    """更新端口配置"""
    try:
        data = request.get_json()
        port = data.get('port')
        
        if not port or not isinstance(port, int) or port < 1 or port > 65535:
            return jsonify({"status": "error", "message": "端口号必须是1-65535之间的整数"})
        
        monitor.config["port"] = port
        monitor.save_config()
        
        return jsonify({
            "status": "success",
            "message": f"端口已更新为 {port}，重启服务后生效",
            "port": port
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

@app.route('/api/config')
def get_config():
    """获取配置信息"""
    return jsonify({"status": "success", "data": monitor.config})

if __name__ == '__main__':
    port = monitor.config.get("port", 88)
    host = monitor.config.get("host", "0.0.0.0")
    debug = monitor.config.get("debug", False)
    
    print(f"🚀 VEnvFrame 监控界面启动中...")
    print(f"📱 访问地址: http://localhost:{port}")
    print(f"🌐 网络访问: http://{host}:{port}")
    print(f"🔧 调试模式: {'开启' if debug else '关闭'}")
    
    app.run(host=host, port=port, debug=debug)