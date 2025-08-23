#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
数据库切换工具
提供命令行界面来管理和切换数据库
"""

import sys
import os
import json
from typing import Optional

# 添加当前目录到Python路径
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from database_manager import DatabaseManager

# 动态导入管理器，避免导入错误
def get_sqlite_manager():
    try:
        from sqlite.sqlite_manager import SQLiteManager
        return SQLiteManager
    except ImportError:
        return None

def get_redis_manager():
    try:
        from redis.redis_manager import RedisManager
        return RedisManager
    except ImportError:
        return None

def print_banner():
    """打印横幅"""
    print("=" * 60)
    print("           VEnvFrame 数据库管理工具")
    print("=" * 60)
    print()

def print_database_list(db_manager: DatabaseManager):
    """打印数据库列表"""
    db_list = db_manager.get_database_list()
    current_db = db_list['current_database']
    
    print("可用数据库:")
    print("-" * 40)
    
    for db in db_list['databases']:
        status = "✅ 当前" if db['current'] else "⚪ 可用" if db['enabled'] else "❌ 禁用"
        print(f"{status} {db['name']:<10} - {db['display_name']}")
    
    print()
    print(f"当前使用: {current_db}")
    print()

def test_database_connection(db_manager: DatabaseManager, db_name: Optional[str] = None):
    """测试数据库连接"""
    print("正在测试数据库连接...")
    result = db_manager.test_connection(db_name)
    
    if result['status'] == 'success':
        print(f"✅ {result['message']}")
        print(f"   数据库: {result['database']}")
        print(f"   类型: {result['type']}")
        if 'version' in result:
            print(f"   版本: {result['version']}")
        if 'memory_usage' in result:
            print(f"   内存使用: {result['memory_usage']}")
    else:
        print(f"❌ {result['message']}")
    
    print()

def show_database_info(db_manager: DatabaseManager):
    """显示数据库详细信息"""
    current_db = db_manager.get_current_database()
    db_config = db_manager.get_database_config()
    
    print(f"当前数据库详细信息:")
    print("-" * 40)
    print(f"名称: {current_db}")
    print(f"类型: {db_config['type']}")
    print(f"显示名称: {db_config['name']}")
    print(f"启用状态: {'是' if db_config['enabled'] else '否'}")
    
    print("\n配置信息:")
    for key, value in db_config['config'].items():
        print(f"  {key}: {value}")
    
    print()
    
    # 获取具体数据库信息
    try:
        if db_config['type'] == 'sqlite':
            sqlite_mgr = SQLiteManager(db_config['config']['database_path'])
            info = sqlite_mgr.get_database_info()
            print("SQLite 数据库信息:")
            print(f"  数据库路径: {info['database_path']}")
            print(f"  SQLite版本: {info['sqlite_version']}")
            print(f"  数据库大小: {info['database_size_human']}")
            print(f"  表数量: {len(info['tables'])}")
            print(f"  总记录数: {info['total_records']}")
            
        elif db_config['type'] == 'redis':
            redis_mgr = RedisManager(
                host=db_config['config']['host'],
                port=db_config['config']['port'],
                db=db_config['config']['db']
            )
            info = redis_mgr.get_database_info()
            if 'error' not in info:
                print("Redis 数据库信息:")
                print(f"  服务器: {info['host']}:{info['port']}")
                print(f"  数据库: db{info['db']}")
                print(f"  Redis版本: {info['redis_version']}")
                print(f"  内存使用: {info['used_memory_human']}")
                print(f"  键数量: {info['key_count']}")
                print(f"  连接客户端: {info['connected_clients']}")
    
    except Exception as e:
        print(f"获取详细信息失败: {e}")
    
    print()

def interactive_mode():
    """交互模式"""
    db_manager = DatabaseManager()
    
    while True:
        print_banner()
        print_database_list(db_manager)
        
        print("操作选项:")
        print("1. 切换数据库")
        print("2. 测试当前数据库连接")
        print("3. 测试指定数据库连接")
        print("4. 显示数据库详细信息")
        print("5. 刷新配置")
        print("0. 退出")
        print()
        
        choice = input("请选择操作 (0-5): ").strip()
        
        if choice == '0':
            print("再见!")
            break
        elif choice == '1':
            db_list = db_manager.get_database_list()
            print("\n可切换的数据库:")
            available_dbs = [db for db in db_list['databases'] if db['enabled'] and not db['current']]
            
            if not available_dbs:
                print("没有可切换的数据库")
                input("按回车键继续...")
                continue
            
            for i, db in enumerate(available_dbs, 1):
                print(f"{i}. {db['name']} - {db['display_name']}")
            
            try:
                db_choice = int(input("\n请选择数据库编号: ")) - 1
                if 0 <= db_choice < len(available_dbs):
                    target_db = available_dbs[db_choice]['name']
                    if db_manager.set_current_database(target_db):
                        print(f"✅ 已切换到数据库: {target_db}")
                    else:
                        print("❌ 切换失败")
                else:
                    print("❌ 无效的选择")
            except ValueError:
                print("❌ 请输入有效的数字")
            
            input("按回车键继续...")
            
        elif choice == '2':
            test_database_connection(db_manager)
            input("按回车键继续...")
            
        elif choice == '3':
            db_list = db_manager.get_database_list()
            print("\n可测试的数据库:")
            for i, db in enumerate(db_list['databases'], 1):
                status = "当前" if db['current'] else "可用" if db['enabled'] else "禁用"
                print(f"{i}. {db['name']} - {db['display_name']} ({status})")
            
            try:
                db_choice = int(input("\n请选择数据库编号: ")) - 1
                if 0 <= db_choice < len(db_list['databases']):
                    target_db = db_list['databases'][db_choice]['name']
                    test_database_connection(db_manager, target_db)
                else:
                    print("❌ 无效的选择")
            except ValueError:
                print("❌ 请输入有效的数字")
            
            input("按回车键继续...")
            
        elif choice == '4':
            show_database_info(db_manager)
            input("按回车键继续...")
            
        elif choice == '5':
            try:
                db_manager = DatabaseManager()  # 重新加载配置
                print("✅ 配置已刷新")
            except Exception as e:
                print(f"❌ 刷新配置失败: {e}")
            input("按回车键继续...")
            
        else:
            print("❌ 无效的选择")
            input("按回车键继续...")

def command_mode():
    """命令行模式"""
    if len(sys.argv) < 2:
        print("用法:")
        print("  python db_switch.py list                    # 列出所有数据库")
        print("  python db_switch.py current                 # 显示当前数据库")
        print("  python db_switch.py switch <database_name>  # 切换数据库")
        print("  python db_switch.py test [database_name]    # 测试数据库连接")
        print("  python db_switch.py info                    # 显示数据库详细信息")
        print("  python db_switch.py interactive             # 进入交互模式")
        return
    
    command = sys.argv[1].lower()
    db_manager = DatabaseManager()
    
    if command == 'list':
        print_database_list(db_manager)
        
    elif command == 'current':
        current_db = db_manager.get_current_database()
        db_config = db_manager.get_database_config()
        print(f"当前数据库: {current_db} - {db_config['name']}")
        
    elif command == 'switch':
        if len(sys.argv) < 3:
            print("❌ 请指定要切换的数据库名称")
            return
        
        target_db = sys.argv[2]
        if db_manager.set_current_database(target_db):
            print(f"✅ 已切换到数据库: {target_db}")
        else:
            print(f"❌ 切换到数据库 {target_db} 失败")
            
    elif command == 'test':
        target_db = sys.argv[2] if len(sys.argv) > 2 else None
        test_database_connection(db_manager, target_db)
        
    elif command == 'info':
        show_database_info(db_manager)
        
    elif command == 'interactive':
        interactive_mode()
        
    else:
        print(f"❌ 未知命令: {command}")

if __name__ == "__main__":
    try:
        if len(sys.argv) == 1:
            interactive_mode()
        else:
            command_mode()
    except KeyboardInterrupt:
        print("\n\n用户中断操作")
    except Exception as e:
        print(f"\n❌ 发生错误: {e}")