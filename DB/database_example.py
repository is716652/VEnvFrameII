#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
数据库使用示例
演示如何使用统一的数据库管理器
"""

from database_manager import get_db_manager, get_current_connection, switch_database
from sqlite.sqlite_manager import get_sqlite_manager
from redis.redis_manager import get_redis_manager
import json

def demo_sqlite():
    """演示SQLite操作"""
    print("=" * 50)
    print("SQLite 数据库操作演示")
    print("=" * 50)
    
    # 切换到SQLite数据库
    if not switch_database('sqlite'):
        print("❌ 切换到SQLite失败")
        return
    
    # 获取SQLite管理器
    sqlite_mgr = get_sqlite_manager()
    
    # 插入测试数据
    print("1. 插入测试用户...")
    user_id = sqlite_mgr.insert_user("testuser", "test@example.com", "hashed_password")
    print(f"   用户ID: {user_id}")
    
    # 查询用户
    print("2. 查询用户...")
    user = sqlite_mgr.get_user_by_username("testuser")
    print(f"   用户信息: {user}")
    
    # 插入日志
    print("3. 插入日志...")
    log_id = sqlite_mgr.insert_log("INFO", "用户登录", "auth")
    print(f"   日志ID: {log_id}")
    
    # 设置配置
    print("4. 设置配置...")
    sqlite_mgr.set_config("app_name", "VEnvFrame", "应用程序名称")
    sqlite_mgr.set_config("version", "1.0.0", "应用程序版本")
    
    # 获取配置
    print("5. 获取配置...")
    app_name = sqlite_mgr.get_config("app_name")
    print(f"   应用名称: {app_name}")
    
    # 获取数据库信息
    print("6. 数据库信息...")
    db_info = sqlite_mgr.get_database_info()
    print(f"   数据库大小: {db_info['database_size_human']}")
    print(f"   表数量: {len(db_info['tables'])}")
    print(f"   总记录数: {db_info['total_records']}")
    
    print()

def demo_redis():
    """演示Redis操作"""
    print("=" * 50)
    print("Redis 数据库操作演示")
    print("=" * 50)
    
    # 切换到Redis数据库
    if not switch_database('redis'):
        print("❌ 切换到Redis失败")
        return
    
    # 获取Redis管理器
    redis_mgr = get_redis_manager()
    
    # 测试连接
    print("1. 测试连接...")
    conn_result = redis_mgr.test_connection()
    if conn_result['status'] == 'success':
        print("   ✅ Redis连接成功")
    else:
        print(f"   ❌ Redis连接失败: {conn_result['message']}")
        return
    
    # 设置键值
    print("2. 设置键值...")
    redis_mgr.set_value("user:1", {"name": "张三", "age": 25, "city": "北京"})
    redis_mgr.set_value("counter", 100)
    redis_mgr.set_value("temp_key", "临时数据", expire=60)  # 60秒后过期
    
    # 获取键值
    print("3. 获取键值...")
    user_data = redis_mgr.get_value("user:1")
    counter = redis_mgr.get_value("counter")
    print(f"   用户数据: {user_data}")
    print(f"   计数器: {counter}")
    
    # 哈希操作
    print("4. 哈希操作...")
    redis_mgr.set_hash("user:profile:1", "name", "李四")
    redis_mgr.set_hash("user:profile:1", "email", "lisi@example.com")
    profile = redis_mgr.get_hash("user:profile:1")
    print(f"   用户档案: {profile}")
    
    # 列表操作
    print("5. 列表操作...")
    redis_mgr.list_push("messages", {"type": "info", "content": "系统启动"})
    redis_mgr.list_push("messages", {"type": "warning", "content": "内存使用率高"})
    messages = redis_mgr.list_range("messages")
    print(f"   消息列表: {messages}")
    
    # 获取键列表
    print("6. 获取键列表...")
    keys = redis_mgr.get_keys()
    print(f"   所有键: {keys}")
    
    # 获取数据库信息
    print("7. 数据库信息...")
    db_info = redis_mgr.get_database_info()
    if 'error' not in db_info:
        print(f"   Redis版本: {db_info['redis_version']}")
        print(f"   内存使用: {db_info['used_memory_human']}")
        print(f"   键数量: {db_info['key_count']}")
        print(f"   连接客户端: {db_info['connected_clients']}")
    
    print()

def demo_unified_manager():
    """演示统一数据库管理器"""
    print("=" * 50)
    print("统一数据库管理器演示")
    print("=" * 50)
    
    db_manager = get_db_manager()
    
    # 显示当前数据库
    current_db = db_manager.get_current_database()
    print(f"当前数据库: {current_db}")
    
    # 获取数据库列表
    db_list = db_manager.get_database_list()
    print("\n可用数据库:")
    for db in db_list['databases']:
        status = "✅ 当前" if db['current'] else "⚪ 可用" if db['enabled'] else "❌ 禁用"
        print(f"  {status} {db['name']} - {db['display_name']}")
    
    # 测试所有启用的数据库连接
    print("\n测试数据库连接:")
    for db in db_list['databases']:
        if db['enabled']:
            result = db_manager.test_connection(db['name'])
            status = "✅" if result['status'] == 'success' else "❌"
            print(f"  {status} {db['name']}: {result['message']}")
    
    print()

def main():
    """主函数"""
    print("VEnvFrame 数据库系统演示")
    print("=" * 60)
    
    try:
        # 演示SQLite
        demo_sqlite()
        
        # 演示Redis
        demo_redis()
        
        # 演示统一管理器
        demo_unified_manager()
        
        print("演示完成！")
        
    except Exception as e:
        print(f"❌ 演示过程中发生错误: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
