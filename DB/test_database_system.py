#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
数据库系统测试脚本
验证数据库配置和连接是否正常工作
"""

import sys
import os

# 添加当前目录到Python路径
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from database_manager import DatabaseManager

def test_database_system():
    """测试数据库系统"""
    print("=" * 60)
    print("           VEnvFrame 数据库系统测试")
    print("=" * 60)
    print()
    
    try:
        # 初始化数据库管理器
        print("1. 初始化数据库管理器...")
        db_manager = DatabaseManager()
        print("   ✅ 数据库管理器初始化成功")
        
        # 获取数据库列表
        print("\n2. 获取数据库列表...")
        db_list = db_manager.get_database_list()
        print(f"   ✅ 找到 {len(db_list['databases'])} 个数据库配置")
        
        current_db = db_list['current_database']
        print(f"   当前数据库: {current_db}")
        
        # 显示所有数据库
        print("\n   数据库列表:")
        for db in db_list['databases']:
            status = "✅ 当前" if db['current'] else "⚪ 可用" if db['enabled'] else "❌ 禁用"
            print(f"     {status} {db['name']:<10} - {db['display_name']}")
        
        # 测试所有启用的数据库连接
        print("\n3. 测试数据库连接...")
        success_count = 0
        total_enabled = 0
        
        for db in db_list['databases']:
            if db['enabled']:
                total_enabled += 1
                print(f"\n   测试 {db['name']} ({db['display_name']})...")
                
                try:
                    result = db_manager.test_connection(db['name'])
                    
                    if result['status'] == 'success':
                        print(f"     ✅ 连接成功")
                        if 'version' in result:
                            print(f"     版本: {result['version']}")
                        if 'memory_usage' in result:
                            print(f"     内存使用: {result['memory_usage']}")
                        success_count += 1
                    else:
                        print(f"     ❌ 连接失败: {result['message']}")
                        
                except Exception as e:
                    print(f"     ❌ 测试异常: {e}")
        
        # 测试数据库切换
        print(f"\n4. 测试数据库切换...")
        available_dbs = [db['name'] for db in db_list['databases'] if db['enabled'] and not db['current']]
        
        if available_dbs:
            target_db = available_dbs[0]
            print(f"   尝试切换到: {target_db}")
            
            if db_manager.set_current_database(target_db):
                print(f"     ✅ 切换成功")
                
                # 切换回原数据库
                if db_manager.set_current_database(current_db):
                    print(f"     ✅ 切换回原数据库成功")
                else:
                    print(f"     ❌ 切换回原数据库失败")
            else:
                print(f"     ❌ 切换失败")
        else:
            print("   ⚪ 没有其他可用数据库进行切换测试")
        
        # 测试总结
        print(f"\n" + "=" * 60)
        print("测试总结:")
        print(f"  数据库配置: {len(db_list['databases'])} 个")
        print(f"  启用数据库: {total_enabled} 个")
        print(f"  连接成功: {success_count} 个")
        print(f"  连接失败: {total_enabled - success_count} 个")
        
        if success_count == total_enabled:
            print("  🎉 所有启用的数据库连接测试通过!")
        elif success_count > 0:
            print("  ⚠️  部分数据库连接成功")
        else:
            print("  ❌ 所有数据库连接失败")
        
        print("=" * 60)
        
        return success_count == total_enabled
        
    except Exception as e:
        print(f"\n❌ 测试过程中发生错误: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    success = test_database_system()
    sys.exit(0 if success else 1)