#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Redis数据库管理器
提供Redis数据库的专用操作方法
"""

import redis
import json
import time
from typing import List, Dict, Any, Optional, Union
from datetime import datetime, timedelta
import logging

logger = logging.getLogger(__name__)

class RedisManager:
    """Redis数据库管理器"""
    
    def __init__(self, host: str = "192.168.27.21", port: int = 6379, db: int = 0, password: str = None):
        """初始化Redis管理器"""
        self.host = host
        self.port = port
        self.db = db
        self.password = password
        self.connection_pool = None
        self._create_connection_pool()
    
    def _create_connection_pool(self):
        """创建连接池"""
        self.connection_pool = redis.ConnectionPool(
            host=self.host,
            port=self.port,
            db=self.db,
            password=self.password,
            decode_responses=True,
            socket_timeout=5,
            socket_connect_timeout=5,
            max_connections=10
        )
    
    def connect(self) -> bool:
        """连接到Redis服务器"""
        try:
            conn = self.get_connection()
            conn.ping()
            return True
        except Exception as e:
            logger.error(f"Redis连接失败: {e}")
            return False
    
    def get_connection(self) -> redis.Redis:
        """获取Redis连接"""
        return redis.Redis(connection_pool=self.connection_pool)
    
    def test_connection(self) -> Dict[str, Any]:
        """测试连接"""
        try:
            conn = self.get_connection()
            conn.ping()
            
            info = conn.info()
            return {
                "status": "success",
                "message": "Redis连接成功",
                "server_info": {
                    "redis_version": info.get('redis_version'),
                    "used_memory_human": info.get('used_memory_human'),
                    "connected_clients": info.get('connected_clients'),
                    "total_commands_processed": info.get('total_commands_processed'),
                    "uptime_in_seconds": info.get('uptime_in_seconds')
                }
            }
        except Exception as e:
            return {
                "status": "error",
                "message": f"Redis连接失败: {str(e)}"
            }
    
    def set_value(self, key: str, value: Any, expire: int = None) -> bool:
        """设置键值"""
        try:
            conn = self.get_connection()
            
            # 如果值不是字符串，转换为JSON
            if not isinstance(value, str):
                value = json.dumps(value, ensure_ascii=False)
            
            result = conn.set(key, value, ex=expire)
            return bool(result)
        except Exception as e:
            logger.error(f"设置Redis键值失败: {e}")
            return False
    
    def get_value(self, key: str, default: Any = None) -> Any:
        """获取键值"""
        try:
            conn = self.get_connection()
            value = conn.get(key)
            
            if value is None:
                return default
            
            # 尝试解析JSON
            try:
                return json.loads(value)
            except (json.JSONDecodeError, TypeError):
                return value
                
        except Exception as e:
            logger.error(f"获取Redis键值失败: {e}")
            return default
    
    def delete_key(self, key: str) -> bool:
        """删除键"""
        try:
            conn = self.get_connection()
            result = conn.delete(key)
            return bool(result)
        except Exception as e:
            logger.error(f"删除Redis键失败: {e}")
            return False
    
    def exists(self, key: str) -> bool:
        """检查键是否存在"""
        try:
            conn = self.get_connection()
            return bool(conn.exists(key))
        except Exception as e:
            logger.error(f"检查Redis键存在性失败: {e}")
            return False
    
    def get_keys(self, pattern: str = "*") -> List[str]:
        """获取键列表"""
        try:
            conn = self.get_connection()
            keys = conn.keys(pattern)
            return [key for key in keys]
        except Exception as e:
            logger.error(f"获取Redis键列表失败: {e}")
            return []
    
    def get_key_info(self, key: str) -> Dict[str, Any]:
        """获取键信息"""
        try:
            conn = self.get_connection()
            
            if not conn.exists(key):
                return {"exists": False}
            
            key_type = conn.type(key)
            ttl = conn.ttl(key)
            
            info = {
                "exists": True,
                "type": key_type,
                "ttl": ttl,
                "expire_time": None
            }
            
            # 计算过期时间
            if ttl > 0:
                expire_time = datetime.now() + timedelta(seconds=ttl)
                info["expire_time"] = expire_time.strftime("%Y-%m-%d %H:%M:%S")
            
            # 根据类型获取大小信息
            if key_type == "string":
                info["size"] = len(conn.get(key) or "")
            elif key_type == "list":
                info["size"] = conn.llen(key)
            elif key_type == "set":
                info["size"] = conn.scard(key)
            elif key_type == "zset":
                info["size"] = conn.zcard(key)
            elif key_type == "hash":
                info["size"] = conn.hlen(key)
            else:
                info["size"] = 0
            
            return info
            
        except Exception as e:
            logger.error(f"获取Redis键信息失败: {e}")
            return {"exists": False, "error": str(e)}
    
    def set_hash(self, key: str, field: str, value: Any) -> bool:
        """设置哈希字段"""
        try:
            conn = self.get_connection()
            
            if not isinstance(value, str):
                value = json.dumps(value, ensure_ascii=False)
            
            result = conn.hset(key, field, value)
            return True
        except Exception as e:
            logger.error(f"设置Redis哈希字段失败: {e}")
            return False
    
    def get_hash(self, key: str, field: str = None) -> Any:
        """获取哈希字段"""
        try:
            conn = self.get_connection()
            
            if field:
                value = conn.hget(key, field)
                if value is None:
                    return None
                
                try:
                    return json.loads(value)
                except (json.JSONDecodeError, TypeError):
                    return value
            else:
                # 获取所有字段
                hash_data = conn.hgetall(key)
                result = {}
                for k, v in hash_data.items():
                    try:
                        result[k] = json.loads(v)
                    except (json.JSONDecodeError, TypeError):
                        result[k] = v
                return result
                
        except Exception as e:
            logger.error(f"获取Redis哈希字段失败: {e}")
            return None
    
    def list_push(self, key: str, value: Any, left: bool = True) -> bool:
        """向列表添加元素"""
        try:
            conn = self.get_connection()
            
            if not isinstance(value, str):
                value = json.dumps(value, ensure_ascii=False)
            
            if left:
                conn.lpush(key, value)
            else:
                conn.rpush(key, value)
            
            return True
        except Exception as e:
            logger.error(f"向Redis列表添加元素失败: {e}")
            return False
    
    def list_pop(self, key: str, left: bool = True) -> Any:
        """从列表弹出元素"""
        try:
            conn = self.get_connection()
            
            if left:
                value = conn.lpop(key)
            else:
                value = conn.rpop(key)
            
            if value is None:
                return None
            
            try:
                return json.loads(value)
            except (json.JSONDecodeError, TypeError):
                return value
                
        except Exception as e:
            logger.error(f"从Redis列表弹出元素失败: {e}")
            return None
    
    def list_range(self, key: str, start: int = 0, end: int = -1) -> List[Any]:
        """获取列表范围"""
        try:
            conn = self.get_connection()
            values = conn.lrange(key, start, end)
            
            result = []
            for value in values:
                try:
                    result.append(json.loads(value))
                except (json.JSONDecodeError, TypeError):
                    result.append(value)
            
            return result
        except Exception as e:
            logger.error(f"获取Redis列表范围失败: {e}")
            return []
    
    def flush_db(self) -> bool:
        """清空当前数据库"""
        try:
            conn = self.get_connection()
            conn.flushdb()
            return True
        except Exception as e:
            logger.error(f"清空Redis数据库失败: {e}")
            return False
    
    def get_database_info(self) -> Dict[str, Any]:
        """获取数据库信息"""
        try:
            conn = self.get_connection()
            info = conn.info()
            
            # 获取键数量
            key_count = len(self.get_keys())
            
            return {
                "host": self.host,
                "port": self.port,
                "db": self.db,
                "redis_version": info.get('redis_version'),
                "used_memory": info.get('used_memory'),
                "used_memory_human": info.get('used_memory_human'),
                "connected_clients": info.get('connected_clients'),
                "total_commands_processed": info.get('total_commands_processed'),
                "uptime_in_seconds": info.get('uptime_in_seconds'),
                "key_count": key_count,
                "keyspace_hits": info.get('keyspace_hits', 0),
                "keyspace_misses": info.get('keyspace_misses', 0)
            }
        except Exception as e:
            logger.error(f"获取Redis数据库信息失败: {e}")
            return {"error": str(e)}
    
    def monitor_performance(self, duration: int = 10) -> Dict[str, Any]:
        """监控性能指标"""
        try:
            conn = self.get_connection()
            
            # 获取初始信息
            start_info = conn.info()
            start_time = time.time()
            
            # 等待指定时间
            time.sleep(duration)
            
            # 获取结束信息
            end_info = conn.info()
            end_time = time.time()
            
            # 计算差值
            actual_duration = end_time - start_time
            commands_diff = end_info.get('total_commands_processed', 0) - start_info.get('total_commands_processed', 0)
            
            return {
                "duration": actual_duration,
                "commands_per_second": commands_diff / actual_duration if actual_duration > 0 else 0,
                "memory_usage": end_info.get('used_memory_human'),
                "connected_clients": end_info.get('connected_clients'),
                "keyspace_hits": end_info.get('keyspace_hits', 0),
                "keyspace_misses": end_info.get('keyspace_misses', 0),
                "hit_rate": self._calculate_hit_rate(
                    end_info.get('keyspace_hits', 0),
                    end_info.get('keyspace_misses', 0)
                )
            }
        except Exception as e:
            logger.error(f"监控Redis性能失败: {e}")
            return {"error": str(e)}
    
    def _calculate_hit_rate(self, hits: int, misses: int) -> float:
        """计算命中率"""
        total = hits + misses
        if total == 0:
            return 0.0
        return (hits / total) * 100
    
    def backup_keys(self, pattern: str = "*", backup_file: str = None) -> str:
        """备份键值数据"""
        if backup_file is None:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            backup_file = f"./redis/backup/redis_backup_{timestamp}.json"
        
        try:
            # 确保备份目录存在
            import os
            os.makedirs(os.path.dirname(backup_file), exist_ok=True)
            
            conn = self.get_connection()
            keys = self.get_keys(pattern)
            
            backup_data = {
                "timestamp": datetime.now().isoformat(),
                "host": self.host,
                "port": self.port,
                "db": self.db,
                "pattern": pattern,
                "data": {}
            }
            
            for key in keys:
                key_info = self.get_key_info(key)
                key_data = {
                    "type": key_info.get("type"),
                    "ttl": key_info.get("ttl"),
                    "value": None
                }
                
                # 根据类型获取值
                if key_info.get("type") == "string":
                    key_data["value"] = self.get_value(key)
                elif key_info.get("type") == "hash":
                    key_data["value"] = self.get_hash(key)
                elif key_info.get("type") == "list":
                    key_data["value"] = self.list_range(key)
                # 可以扩展其他类型的备份
                
                backup_data["data"][key] = key_data
            
            # 保存备份文件
            with open(backup_file, 'w', encoding='utf-8') as f:
                json.dump(backup_data, f, ensure_ascii=False, indent=2)
            
            logger.info(f"Redis数据备份完成: {backup_file}")
            return backup_file
            
        except Exception as e:
            logger.error(f"Redis数据备份失败: {e}")
            raise


# 创建全局Redis管理器实例
redis_manager = RedisManager()

def get_redis_manager() -> RedisManager:
    """获取Redis管理器实例"""
    return redis_manager