#!/usr/bin/env python
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
        return True
    
    def get_database_config(self, db_name: str = None) -> Dict[str, Any]:
        """获取数据库配置"""
        if db_name is None:
            db_name = self.get_current_database()
        
        if db_name not in self.config['databases']:
            raise ValueError(f"数据库 {db_name} 不存在")
        
        return self.config['databases'][db_name]
    
    def get_connection(self, db_name: str = None):
        """获取数据库连接"""
        if db_name is None:
            db_name = self.get_current_database()
        
        # 如果连接已存在且有效，直接返回
        if db_name in self.connections:
            conn = self.connections[db_name]
            if self._is_connection_valid(conn, db_name):
                return conn
            else:
                # 连接无效，移除并重新创建
                del self.connections[db_name]
        
        # 创建新连接
        db_config = self.get_database_config(db_name)
        db_type = db_config['type']
        config = db_config['config']
        
        try:
            if db_type == 'sqlite':
                conn = self._create_sqlite_connection(config)
            elif db_type == 'redis':
                conn = self._create_redis_connection(config)
            elif db_type == 'mysql':
                conn = self._create_mysql_connection(config)
            else:
                raise ValueError(f"不支持的数据库类型: {db_type}")
            
            self.connections[db_name] = conn
            logger.info(f"成功连接到数据库: {db_name}")
            return conn
            
        except Exception as e:
            logger.error(f"连接数据库 {db_name} 失败: {e}")
            raise
    
    def _create_sqlite_connection(self, config: Dict[str, Any]):
        """创建SQLite连接"""
        db_path = config['database_path']
        
        # 确保目录存在
        os.makedirs(os.path.dirname(db_path), exist_ok=True)
        
        conn = sqlite3.connect(
            db_path,
            timeout=config.get('timeout', 30),
            check_same_thread=config.get('check_same_thread', False)
        )
        
        # 启用外键约束
        conn.execute("PRAGMA foreign_keys = ON")
        
        return conn
    
    def _create_redis_connection(self, config: Dict[str, Any]):
        """创建Redis连接"""
        conn = redis.Redis(
            host=config['host'],
            port=config['port'],
            db=config.get('db', 0),
            password=config.get('password'),
            socket_timeout=config.get('socket_timeout', 5),
            socket_connect_timeout=config.get('socket_connect_timeout', 5),
            decode_responses=config.get('decode_responses', True)
        )
        
        # 测试连接
        conn.ping()
        
        return conn
    
    def _create_mysql_connection(self, config: Dict[str, Any]):
        """创建MySQL连接"""
        conn = pymysql.connect(
            host=config['host'],
            port=config['port'],
            user=config['user'],
            password=config['password'],
            database=config['database'],
            charset=config.get('charset', 'utf8mb4'),
            autocommit=config.get('autocommit', True)
        )
        
        return conn
    
    def _is_connection_valid(self, conn, db_name: str) -> bool:
        """检查连接是否有效"""
        try:
            db_config = self.get_database_config(db_name)
            db_type = db_config['type']
            
            if db_type == 'sqlite':
                conn.execute("SELECT 1")
                return True
            elif db_type == 'redis':
                conn.ping()
                return True
            elif db_type == 'mysql':
                conn.ping()
                return True
            else:
                return False
                
        except Exception:
            return False
    
    def test_connection(self, db_name: str = None) -> Dict[str, Any]:
        """测试数据库连接"""
        if db_name is None:
            db_name = self.get_current_database()
        
        try:
            conn = self.get_connection(db_name)
            db_config = self.get_database_config(db_name)
            
            result = {
                "status": "success",
                "database": db_name,
                "type": db_config['type'],
                "name": db_config['name'],
                "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                "message": "连接测试成功"
            }
            
            # 获取额外信息
            if db_config['type'] == 'sqlite':
                cursor = conn.cursor()
                cursor.execute("SELECT sqlite_version()")
                version = cursor.fetchone()[0]
                result["version"] = f"SQLite {version}"
                
            elif db_config['type'] == 'redis':
                info = conn.info()
                result["version"] = f"Redis {info['redis_version']}"
                result["memory_usage"] = info['used_memory_human']
                
            elif db_config['type'] == 'mysql':
                cursor = conn.cursor()
                cursor.execute("SELECT VERSION()")
                version = cursor.fetchone()[0]
                result["version"] = f"MySQL {version}"
            
            return result
            
        except Exception as e:
            return {
                "status": "error",
                "database": db_name,
                "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                "message": f"连接测试失败: {str(e)}"
            }
    
    def get_database_list(self) -> Dict[str, Any]:
        """获取数据库列表"""
        current_db = self.get_current_database()
        databases = []
        
        for db_name, db_config in self.config['databases'].items():
            databases.append({
                "name": db_name,
                "type": db_config['type'],
                "display_name": db_config['name'],
                "enabled": db_config['enabled'],
                "current": db_name == current_db
            })
        
        return {
            "current_database": current_db,
            "databases": databases
        }
    
    def close_connection(self, db_name: str = None):
        """关闭数据库连接"""
        if db_name is None:
            db_name = self.get_current_database()
        
        if db_name in self.connections:
            try:
                conn = self.connections[db_name]
                db_config = self.get_database_config(db_name)
                
                if db_config['type'] in ['sqlite', 'mysql']:
                    conn.close()
                elif db_config['type'] == 'redis':
                    conn.connection_pool.disconnect()
                
                del self.connections[db_name]
                logger.info(f"已关闭数据库连接: {db_name}")
                
            except Exception as e:
                logger.error(f"关闭数据库连接失败: {e}")
    
    def close_all_connections(self):
        """关闭所有数据库连接"""
        for db_name in list(self.connections.keys()):
            self.close_connection(db_name)
    
    def __del__(self):
        """析构函数，确保连接被关闭"""
        self.close_all_connections()


# 全局数据库管理器实例
db_manager = DatabaseManager()

def get_db_manager() -> DatabaseManager:
    """获取数据库管理器实例"""
    return db_manager

def get_current_connection():
    """获取当前数据库连接"""
    return db_manager.get_connection()

def switch_database(db_name: str) -> bool:
    """切换数据库"""
    return db_manager.set_current_database(db_name)