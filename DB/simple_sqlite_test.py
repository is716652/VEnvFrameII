#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
简单的SQLite数据库测试
测试基本的连接、创建表、插入和查询功能
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from database_manager import DatabaseManager
import sqlite3
from datetime import datetime

def test_simple_sqlite():
    """简单的SQLite测试"""
    print("=" * 60)
    print("           简单 SQLite 数据库测试")
    print("=" * 60)
    
    try:
        # 1. 初始化数据库管理器
        print("1. 初始化数据库管理器...")
        db_manager = DatabaseManager()
        
        # 确保使用SQLite数据库
        if db_manager.get_current_database() != 'sqlite':
            db_manager.set_current_database('sqlite')
        
        # 2. 获取SQLite连接
        print("2. 获取SQLite数据库连接...")
        conn = db_manager.get_connection()
        cursor = conn.cursor()
        print("   ✅ SQLite连接成功")
        
        # 3. 创建简单测试表（先删除如果存在）
        print("3. 创建测试表...")
        cursor.execute('DROP TABLE IF EXISTS simple_test')
        
        cursor.execute('''
            CREATE TABLE simple_test (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                value INTEGER,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        conn.commit()
        print("   ✅ 测试表创建成功")
        
        # 4. 插入测试数据
        print("4. 插入测试数据...")
        
        test_data = [
            ('测试项目1', 100),
            ('测试项目2', 200),
            ('测试项目3', 300),
            ('VEnvFrame测试', 999)
        ]
        
        cursor.executemany(
            'INSERT INTO simple_test (name, value) VALUES (?, ?)',
            test_data
        )
        
        conn.commit()
        print(f"   ✅ 插入 {len(test_data)} 条记录")
        
        # 5. 查询测试数据
        print("5. 查询测试数据...")
        
        cursor.execute('SELECT COUNT(*) FROM simple_test')
        count = cursor.fetchone()[0]
        print(f"   总记录数: {count}")
        
        cursor.execute('SELECT id, name, value, created_at FROM simple_test ORDER BY id')
        records = cursor.fetchall()
        
        print("   查询结果:")
        for record in records:
            print(f"     ID: {record[0]}, 名称: {record[1]}, 值: {record[2]}, 时间: {record[3]}")
        
        # 6. 更新测试
        print("6. 更新测试数据...")
        cursor.execute(
            "UPDATE simple_test SET value = ? WHERE name = ?",
            (1000, 'VEnvFrame测试')
        )
        
        updated_rows = cursor.rowcount
        conn.commit()
        print(f"   ✅ 更新 {updated_rows} 条记录")
        
        # 验证更新
        cursor.execute("SELECT value FROM simple_test WHERE name = ?", ('VEnvFrame测试',))
        new_value = cursor.fetchone()[0]
        print(f"   验证更新: VEnvFrame测试的新值为 {new_value}")
        
        # 7. 删除测试
        print("7. 删除测试数据...")
        cursor.execute("DELETE FROM simple_test WHERE value < ?", (200,))
        deleted_rows = cursor.rowcount
        conn.commit()
        print(f"   ✅ 删除 {deleted_rows} 条记录")
        
        # 8. 最终统计
        print("8. 最终数据统计...")
        cursor.execute('SELECT COUNT(*) FROM simple_test')
        final_count = cursor.fetchone()[0]
        print(f"   最终记录数: {final_count}")
        
        cursor.execute('SELECT name, value FROM simple_test ORDER BY value DESC')
        final_records = cursor.fetchall()
        print("   剩余记录:")
        for name, value in final_records:
            print(f"     {name}: {value}")
        
        # 9. 测试数据库信息
        print("9. 获取数据库信息...")
        cursor.execute("SELECT sqlite_version()")
        sqlite_version = cursor.fetchone()[0]
        print(f"   SQLite版本: {sqlite_version}")
        
        # 获取数据库文件大小
        db_path = './sqlite/app.db'
        if os.path.exists(db_path):
            file_size = os.path.getsize(db_path)
            print(f"   数据库文件大小: {file_size} 字节")
        
        # 获取表信息
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
        tables = cursor.fetchall()
        print(f"   数据库表数量: {len(tables)}")
        for table in tables:
            print(f"     表名: {table[0]}")
        
        print("\n" + "=" * 60)
        print("✅ SQLite数据库测试完成！")
        print("   - 数据库连接: 成功")
        print("   - 表创建: 成功")
        print("   - 数据插入: 成功")
        print("   - 数据查询: 成功")
        print("   - 数据更新: 成功")
        print("   - 数据删除: 成功")
        print("   - 数据库信息获取: 成功")
        print("=" * 60)
        
        return True
        
    except Exception as e:
        print(f"\n❌ 测试失败: {e}")
        import traceback
        traceback.print_exc()
        return False
    
    finally:
        # 清理资源
        try:
            db_manager.close_all_connections()
        except:
            pass

if __name__ == "__main__":
    success = test_simple_sqlite()
    sys.exit(0 if success else 1)