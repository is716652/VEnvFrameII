#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
SQLite数据库管理器
提供SQLite数据库的专用操作方法
"""

import sqlite3
import json
import os
from typing import List, Dict, Any, Optional, Tuple
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

class SQLiteManager:
    """SQLite数据库管理器"""
    
    def __init__(self, db_path: str = "./sqlite/app.db"):
        """初始化SQLite管理器"""
        self.db_path = db_path
        self.ensure_database_exists()
        self.init_tables()
    
    def ensure_database_exists(self):
        """确保数据库文件存在"""
        os.makedirs(os.path.dirname(self.db_path), exist_ok=True)
    
    def get_connection(self) -> sqlite3.Connection:
        """获取数据库连接"""
        conn = sqlite3.connect(self.db_path, timeout=30)
        conn.execute("PRAGMA foreign_keys = ON")
        conn.row_factory = sqlite3.Row  # 使结果可以通过列名访问
        return conn
    
    def init_tables(self):
        """初始化数据表"""
        with self.get_connection() as conn:
            # 创建用户表
            conn.execute("""
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username VARCHAR(50) UNIQUE NOT NULL,
                    email VARCHAR(100) UNIQUE NOT NULL,
                    password_hash VARCHAR(255) NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            
            # 创建日志表
            conn.execute("""
                CREATE TABLE IF NOT EXISTS logs (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    level VARCHAR(20) NOT NULL,
                    message TEXT NOT NULL,
                    module VARCHAR(100),
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            
            # 创建配置表
            conn.execute("""
                CREATE TABLE IF NOT EXISTS config (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    key VARCHAR(100) UNIQUE NOT NULL,
                    value TEXT,
                    description TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            
            conn.commit()
            logger.info("SQLite数据表初始化完成")
    
    def execute_query(self, query: str, params: Tuple = ()) -> List[Dict[str, Any]]:
        """执行查询语句"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute(query, params)
            
            # 获取列名
            columns = [description[0] for description in cursor.description] if cursor.description else []
            
            # 获取结果
            rows = cursor.fetchall()
            
            # 转换为字典列表
            result = []
            for row in rows:
                result.append(dict(zip(columns, row)))
            
            return result
    
    def execute_update(self, query: str, params: Tuple = ()) -> int:
        """执行更新语句"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute(query, params)
            conn.commit()
            return cursor.rowcount
    
    def insert_user(self, username: str, email: str, password_hash: str) -> int:
        """插入用户"""
        query = """
            INSERT INTO users (username, email, password_hash)
            VALUES (?, ?, ?)
        """
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute(query, (username, email, password_hash))
            conn.commit()
            return cursor.lastrowid
    
    def get_user_by_username(self, username: str) -> Optional[Dict[str, Any]]:
        """根据用户名获取用户"""
        query = "SELECT * FROM users WHERE username = ?"
        result = self.execute_query(query, (username,))
        return result[0] if result else None
    
    def insert_log(self, level: str, message: str, module: str = None) -> int:
        """插入日志"""
        query = """
            INSERT INTO logs (level, message, module)
            VALUES (?, ?, ?)
        """
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute(query, (level, message, module))
            conn.commit()
            return cursor.lastrowid
    
    def get_logs(self, limit: int = 100, level: str = None) -> List[Dict[str, Any]]:
        """获取日志"""
        if level:
            query = "SELECT * FROM logs WHERE level = ? ORDER BY created_at DESC LIMIT ?"
            params = (level, limit)
        else:
            query = "SELECT * FROM logs ORDER BY created_at DESC LIMIT ?"
            params = (limit,)
        
        return self.execute_query(query, params)
    
    def set_config(self, key: str, value: str, description: str = None) -> bool:
        """设置配置"""
        try:
            # 先尝试更新
            update_query = """
                UPDATE config SET value = ?, description = ?, updated_at = CURRENT_TIMESTAMP
                WHERE key = ?
            """
            rows_affected = self.execute_update(update_query, (value, description, key))
            
            if rows_affected == 0:
                # 如果没有更新任何行，则插入新记录
                insert_query = """
                    INSERT INTO config (key, value, description)
                    VALUES (?, ?, ?)
                """
                self.execute_update(insert_query, (key, value, description))
            
            return True
        except Exception as e:
            logger.error(f"设置配置失败: {e}")
            return False
    
    def get_config(self, key: str) -> Optional[str]:
        """获取配置"""
        query = "SELECT value FROM config WHERE key = ?"
        result = self.execute_query(query, (key,))
        return result[0]['value'] if result else None
    
    def get_all_config(self) -> Dict[str, str]:
        """获取所有配置"""
        query = "SELECT key, value FROM config"
        result = self.execute_query(query)
        return {row['key']: row['value'] for row in result}
    
    def get_database_info(self) -> Dict[str, Any]:
        """获取数据库信息"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            
            # 获取SQLite版本
            cursor.execute("SELECT sqlite_version()")
            sqlite_version = cursor.fetchone()[0]
            
            # 获取数据库大小
            db_size = os.path.getsize(self.db_path) if os.path.exists(self.db_path) else 0
            
            # 获取表信息
            cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
            tables = [row[0] for row in cursor.fetchall()]
            
            # 获取每个表的记录数
            table_counts = {}
            for table in tables:
                cursor.execute(f"SELECT COUNT(*) FROM {table}")
                table_counts[table] = cursor.fetchone()[0]
            
            return {
                "database_path": self.db_path,
                "sqlite_version": sqlite_version,
                "database_size": db_size,
                "database_size_human": self._format_size(db_size),
                "tables": tables,
                "table_counts": table_counts,
                "total_records": sum(table_counts.values())
            }
    
    def _format_size(self, size_bytes: int) -> str:
        """格式化文件大小"""
        if size_bytes == 0:
            return "0 B"
        
        size_names = ["B", "KB", "MB", "GB"]
        i = 0
        while size_bytes >= 1024 and i < len(size_names) - 1:
            size_bytes /= 1024.0
            i += 1
        
        return f"{size_bytes:.1f} {size_names[i]}"
    
    def backup_database(self, backup_path: str = None) -> str:
        """备份数据库"""
        if backup_path is None:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            backup_path = f"./sqlite/backup/app_backup_{timestamp}.db"
        
        # 确保备份目录存在
        os.makedirs(os.path.dirname(backup_path), exist_ok=True)
        
        # 执行备份
        with self.get_connection() as source:
            with sqlite3.connect(backup_path) as backup:
                source.backup(backup)
        
        logger.info(f"数据库备份完成: {backup_path}")
        return backup_path
    
    def vacuum_database(self):
        """优化数据库"""
        with self.get_connection() as conn:
            conn.execute("VACUUM")
            conn.commit()
        logger.info("数据库优化完成")


# 创建全局SQLite管理器实例
sqlite_manager = SQLiteManager()

def get_sqlite_manager() -> SQLiteManager:
    """获取SQLite管理器实例"""
    return sqlite_manager