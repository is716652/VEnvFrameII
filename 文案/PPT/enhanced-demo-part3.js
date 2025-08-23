// VEnvFrame 增强版演示系统 JavaScript - 第3部分（页面内容函数）

// 页面1内容
function createPage1Content() {
    return `
        <div class="content-grid">
            <div class="content-card">
                <div class="hero-badge">
                    <i class="fas fa-rocket"></i>
                    <span>AI驱动 · 企业级 · 开源</span>
                </div>
                <h2>下一代开发环境框架</h2>
                <p>VEnvFrame是一个集成专业精准的系统提示词、多数据库支持、实时监控的现代化Python开发环境框架，旨在解决传统开发环境配置复杂、维护困难的痛点。</p>
                
                <div class="feature-highlights">
                    <div class="highlight-item">
                        <i class="fas fa-brain"></i>
                        <div>
                            <h4>专业精准的系统提示词</h4>
                            <p>能够让不同的AI通过读取专业精准的系统提示词，生成非常近似的系统框架，解决前期搭建的复杂性</p>
                        </div>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-database"></i>
                        <div>
                            <h4>多数据库支持</h4>
                            <p>SQLite、MySQL、Redis统一管理</p>
                        </div>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-chart-line"></i>
                        <div>
                            <h4>实时监控</h4>
                            <p>Web界面实时监控系统状态</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-card">
                <div class="terminal-demo">
                    <div class="terminal-header">
                        <div class="terminal-buttons">
                            <span class="btn-close"></span>
                            <span class="btn-minimize"></span>
                            <span class="btn-maximize"></span>
                        </div>
                        <div class="terminal-title">VEnvFrame Terminal</div>
                    </div>
                    <div class="terminal-body">
                        <div class="terminal-line">
                            <span class="prompt">$</span>
                            <span class="command">activate_env.bat</span>
                        </div>
                        <div class="terminal-line output">
                            <span class="success">✓ 虚拟环境已激活 (VEnvFrame-Env)</span>
                        </div>
                        <div class="terminal-line">
                            <span class="prompt">$</span>
                            <span class="command">python -m Monitor.app</span>
                        </div>
                        <div class="terminal-line output">
                            <span class="info">🚀 监控系统启动中...</span>
                        </div>
                        <div class="terminal-line output">
                            <span class="success">✓ 服务运行在 http://localhost:5000</span>
                        </div>
                        <div class="terminal-cursor"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-code"></i></div>
                <div class="stat-info">
                    <div class="stat-number">5000+</div>
                    <div class="stat-label">代码行数</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-puzzle-piece"></i></div>
                <div class="stat-info">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">预装包</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-database"></i></div>
                <div class="stat-info">
                    <div class="stat-number">5</div>
                    <div class="stat-label">数据库支持</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-tools"></i></div>
                <div class="stat-info">
                    <div class="stat-number">15+</div>
                    <div class="stat-label">开发工具</div>
                </div>
            </div>
        </div>
    `;
}

// 页面2内容 - 核心特性
function createPage2Content() {
    return `
        <div class="feature-showcase">
            <div class="feature-card">
                <div class="feature-header">
                    <div class="feature-icon framework-gradient">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <div class="feature-title">
                        <h3>VEnvFrame 核心特性</h3>
                        <p>统一基础框架 · 多数据库支持 · 高并发处理</p>
                    </div>
                </div>
                <div class="feature-content">
                    <div class="feature-description">
                        <p>VEnvFrame提供统一的基础底层框架，避免每次构建新项目时重复搭建基础架构。集成多数据库支持、高并发处理、便捷切换和移植友好等核心功能。</p>
                    </div>
                    <div class="feature-details">
                        <div class="detail-item">
                            <i class="fas fa-check-circle"></i>
                            <span>统一基础底层框架，避免重复构建</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-check-circle"></i>
                            <span>多数据库支持（SQLite、MySQL、Redis）</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-check-circle"></i>
                            <span>底层级多线程、多用户、高并发处理</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-check-circle"></i>
                            <span>框架内便捷数据库切换，适应不同场合</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-check-circle"></i>
                            <span>虚拟环境主目录修复，移植友好</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-check-circle"></i>
                            <span>监控功能和页面，可持续扩充</span>
                        </div>
                    </div>
                    <div class="code-showcase">
                        <div class="code-tabs">
                            <div class="code-tab active" data-tab="db-switch">
                                <i class="fas fa-exchange-alt"></i>
                                <span>数据库切换工具</span>
                            </div>
                            <div class="code-tab" data-tab="db-manager">
                                <i class="fas fa-database"></i>
                                <span>数据库管理器</span>
                            </div>
                        </div>
                        
                        <div class="code-content active" id="db-switch">
                            <div class="code-block">
                                <div class="code-header">
                                    <span>数据库切换工具 - db_switch.py (真实代码)</span>
                                    <button class="copy-btn" onclick="copyCode(this)">
                                        <i class="fas fa-copy"></i>
                                    </button>
                                </div>
                                <pre><code class="language-python">#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
数据库切换工具
提供命令行界面来管理和切换数据库
"""

import sys
import os
import json
from typing import Optional
from database_manager import DatabaseManager

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
        
        if choice == '1':
            # 数据库切换逻辑
            db_list = db_manager.get_database_list()
            available_dbs = [db for db in db_list['databases'] 
                           if db['enabled'] and not db['current']]
            
            if available_dbs:
                for i, db in enumerate(available_dbs, 1):
                    print(f"{i}. {db['name']} - {db['display_name']}")
                
                try:
                    db_choice = int(input("请选择数据库编号: ")) - 1
                    if 0 <= db_choice < len(available_dbs):
                        target_db = available_dbs[db_choice]['name']
                        if db_manager.set_current_database(target_db):
                            print(f"✅ 已切换到数据库: {target_db}")
                        else:
                            print("❌ 切换失败")
                except ValueError:
                    print("❌ 请输入有效的数字")

if __name__ == "__main__":
    try:
        if len(sys.argv) == 1:
            interactive_mode()
        else:
            command_mode()
    except KeyboardInterrupt:
        print("\\n\\n用户中断操作")
    except Exception as e:
        print(f"\\n❌ 发生错误: {e}")</code></pre>
                            </div>
                        </div>
                        
                        <div class="code-content" id="db-manager">
                            <div class="code-block">
                                <div class="code-header">
                                    <span>数据库管理器核心功能</span>
                                    <button class="copy-btn" onclick="copyCode(this)">
                                        <i class="fas fa-copy"></i>
                                    </button>
                                </div>
                                <pre><code class="language-python">class DatabaseManager:
    """数据库管理器 - 统一管理多种数据库"""
    
    def __init__(self, config_file: str = "database_config.json"):
        """初始化数据库管理器"""
        self.config_file = config_file
        self.config = self._load_config()
        self.connections = {}
        
    def get_database_list(self) -> Dict[str, Any]:
        """获取数据库列表"""
        current_db = self.config.get('current_database')
        databases = []
        
        for db_name, db_config in self.config.get('databases', {}).items():
            databases.append({
                'name': db_name,
                'display_name': db_config.get('name', db_name),
                'type': db_config.get('type'),
                'enabled': db_config.get('enabled', True),
                'current': db_name == current_db
            })
        
        return {
            'current_database': current_db,
            'databases': databases
        }
    
    def set_current_database(self, db_name: str) -> bool:
        """切换当前数据库"""
        if db_name not in self.config.get('databases', {}):
            return False
        
        # 测试连接
        if not self.test_connection(db_name)['status'] == 'success':
            return False
        
        # 更新配置
        self.config['current_database'] = db_name
        self._save_config()
        
        # 清理旧连接
        self.connections.clear()
        
        return True
    
    def test_connection(self, db_name: Optional[str] = None) -> Dict[str, Any]:
        """测试数据库连接"""
        if db_name is None:
            db_name = self.get_current_database()
        
        try:
            conn = self.get_connection(db_name)
            db_config = self.get_database_config(db_name)
            
            return {
                'status': 'success',
                'message': f'数据库 {db_name} 连接成功',
                'database': db_name,
                'type': db_config['type']
            }
        except Exception as e:
            return {
                'status': 'error',
                'message': f'数据库 {db_name} 连接失败: {str(e)}'
            }</code></pre>
                            </div>
                        </div>
                    </div>
                    
                    <div class="feature-highlights-enhanced">
                        <div class="highlight-card">
                            <div class="highlight-icon">
                                <i class="fas fa-terminal"></i>
                            </div>
                            <div class="highlight-content">
                                <h4>交互式命令行界面</h4>
                                <p>提供友好的交互式界面，支持数据库切换、连接测试等操作</p>
                                <div class="command-examples">
                                    <code>python db_switch.py</code> - 进入交互模式<br>
                                    <code>python db_switch.py switch mysql_prod</code> - 直接切换
                                </div>
                            </div>
                        </div>
                        
                        <div class="highlight-card">
                            <div class="highlight-icon">
                                <i class="fas fa-plug"></i>
                            </div>
                            <div class="highlight-content">
                                <h4>无缝数据库切换</h4>
                                <p>支持SQLite、MySQL、Redis之间的无缝切换，自动处理连接池和配置</p>
                                <div class="db-types">
                                    <span class="db-badge sqlite">SQLite</span>
                                    <span class="db-badge mysql">MySQL</span>
                                    <span class="db-badge redis">Redis</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="highlight-card">
                            <div class="highlight-icon">
                                <i class="fas fa-shield-check"></i>
                            </div>
                            <div class="highlight-content">
                                <h4>智能连接管理</h4>
                                <p>自动连接池管理、连接健康检查、异常处理和故障恢复</p>
                                <div class="status-indicators">
                                    <span class="status-item success">✅ 连接正常</span>
                                    <span class="status-item warning">⚠️ 连接异常</span>
                                    <span class="status-item error">❌ 连接失败</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 页面3内容
function createPage3Content() {
    return `
        <div class="architecture-diagram">
            <div class="arch-layer presentation-layer">
                <h3><i class="fas fa-desktop"></i> 表现层 (Presentation Layer)</h3>
                <div class="arch-components">
                    <div class="arch-component">
                        <i class="fas fa-globe"></i>
                        <div>
                            <h4>Web监控界面</h4>
                            <p>Flask + Bootstrap + Chart.js</p>
                        </div>
                    </div>
                    <div class="arch-component">
                        <i class="fas fa-terminal"></i>
                        <div>
                            <h4>命令行工具</h4>
                            <p>Click + Rich + Typer</p>
                        </div>
                    </div>
                    <div class="arch-component">
                        <i class="fas fa-plug"></i>
                        <div>
                            <h4>REST API</h4>
                            <p>FastAPI + Pydantic</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="arch-layer business-layer">
                <h3><i class="fas fa-cogs"></i> 业务层 (Business Layer)</h3>
                <div class="arch-components">
                    <div class="arch-component">
                        <i class="fas fa-brain"></i>
                        <div>
                            <h4>专业精准的系统提示词</h4>
                            <p>标准化模板 + 智能解析</p>
                        </div>
                    </div>
                    <div class="arch-component">
                        <i class="fas fa-box"></i>
                        <div>
                            <h4>环境管理器</h4>
                            <p>Virtualenv + Conda</p>
                        </div>
                    </div>
                    <div class="arch-component">
                        <i class="fas fa-database"></i>
                        <div>
                            <h4>数据库管理器</h4>
                            <p>SQLAlchemy + Redis-py</p>
                        </div>
                    </div>
                    <div class="arch-component">
                        <i class="fas fa-chart-line"></i>
                        <div>
                            <h4>监控服务</h4>
                            <p>Prometheus + Grafana</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="arch-layer data-layer">
                <h3><i class="fas fa-database"></i> 数据层 (Data Layer)</h3>
                <div class="arch-components">
                    <div class="arch-component">
                        <i class="fas fa-file-alt"></i>
                        <div>
                            <h4>SQLite</h4>
                            <p>轻量级关系数据库</p>
                        </div>
                    </div>
                    <div class="arch-component">
                        <i class="fas fa-server"></i>
                        <div>
                            <h4>MySQL</h4>
                            <p>企业级关系数据库</p>
                        </div>
                    </div>
                    <div class="arch-component">
                        <i class="fas fa-memory"></i>
                        <div>
                            <h4>Redis</h4>
                            <p>内存缓存数据库</p>
                        </div>
                    </div>
                    <div class="arch-component">
                        <i class="fas fa-cog"></i>
                        <div>
                            <h4>配置文件</h4>
                            <p>JSON/YAML配置</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 页面4内容
function createPage4Content() {
    return `
        <div class="content-card">
            <h3>项目目录结构</h3>
            <div class="code-block">
                <div class="code-header">
                    <span>VEnvFrame 项目结构</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
                <pre><code>VEnvFrame/
├── activate_env.bat                    # 环境激活脚本
├── fix_venv_path.bat                   # 路径修复工具
├── requirements.txt                    # 依赖包列表
├── 第一步-虚拟环境构建-系统提示词模板.md  # AI系统提示词
├── 项目结构图.md                       # 项目结构说明
├── 虚拟环境移植指南.md                  # 环境移植指南
├── DB/                                 # 数据库模块
│   ├── database_manager.py             # 数据库管理器
│   ├── db_switch.py                    # 数据库切换工具
│   ├── database_config.json            # 数据库配置
│   ├── database_example.py             # 使用示例
│   ├── simple_sqlite_test.py           # SQLite测试
│   ├── test_database_system.py         # 系统测试
│   ├── redis/
│   │   └── redis_manager.py            # Redis管理器
│   └── sqlite/
│       ├── app.db                      # SQLite数据库
│       └── sqlite_manager.py           # SQLite管理器
├── Monitor/                            # 监控系统
│   ├── app.py                          # Flask监控应用
│   ├── config.json                     # 监控配置
│   └── templates/
│       └── index.html                  # 监控界面模板
├── Tools/                              # 开发工具集
│   ├── fix_venv_path.py                # Python路径修复工具
│   └── fix_venv_path.ps1               # PowerShell脚本
└── VEnvFrame-Env/                      # 虚拟环境
    ├── pyvenv.cfg                      # 环境配置
    ├── Scripts/                        # 可执行文件
    └── Lib/                            # 库文件</code></pre>
            </div>
        </div>
        
        <div class="content-grid">
            <div class="content-card">
                <h4><i class="fas fa-database"></i> 数据库模块 (DB/)</h4>
                <p>包含所有数据库相关的功能，支持多种数据库类型的统一管理。</p>
                <ul>
                    <li><strong>database_manager.py</strong> - 核心数据库管理器</li>
                    <li><strong>db_switch.py</strong> - 数据库切换工具</li>
                    <li><strong>database_config.json</strong> - 数据库配置文件</li>
                    <li><strong>redis/</strong> - Redis相关功能</li>
                    <li><strong>sqlite/</strong> - SQLite相关功能</li>
                </ul>
            </div>
            
            <div class="content-card">
                <h4><i class="fas fa-chart-line"></i> 监控模块 (Monitor/)</h4>
                <p>实时监控系统状态，提供Web界面和API接口。</p>
                <ul>
                    <li><strong>app.py</strong> - Flask监控应用主程序</li>
                    <li><strong>config.json</strong> - 监控系统配置</li>
                    <li><strong>templates/</strong> - HTML模板目录</li>
                </ul>
            </div>
            
            <div class="content-card">
                <h4><i class="fas fa-tools"></i> 工具模块 (Tools/)</h4>
                <p>各种实用工具，包括路径修复、环境管理等。</p>
                <ul>
                    <li><strong>fix_venv_path.py</strong> - Python路径修复工具</li>
                    <li><strong>fix_venv_path.ps1</strong> - PowerShell脚本版本</li>
                </ul>
            </div>
        </div>
    `;
}

// 页面5内容
function createPage5Content() {
    return `
        <div class="content-card">
            <h3>快速安装指南</h3>
            <div class="install-steps">
                <div class="step-item">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h4>环境准备</h4>
                        <p>确保系统已安装Python 3.12.8+</p>
                        <div class="code-block">
                            <pre><code>python --version
# 输出: Python 3.12.8 或更高版本</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="step-item">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h4>克隆项目</h4>
                        <p>从GitHub获取VEnvFrame源码</p>
                        <div class="code-block">
                            <pre><code>git clone https://github.com/your-repo/VEnvFrame.git
cd VEnvFrame</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="step-item">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h4>激活环境</h4>
                        <p>运行环境激活脚本</p>
                        <div class="code-block">
                            <pre><code># Windows
activate_env.bat

# Linux/Mac
source activate_env.sh</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="step-item">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <h4>安装依赖</h4>
                        <p>安装所需的Python包</p>
                        <div class="code-block">
                            <pre><code>pip install -r requirements.txt</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="step-item">
                    <div class="step-number">5</div>
                    <div class="step-content">
                        <h4>启动监控</h4>
                        <p>启动Web监控界面</p>
                        <div class="code-block">
                            <pre><code>python -m Monitor.app</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 生成系统提示词页面
function createSystemPromptPage(pageNum) {
    const promptTopics = {
        6: { title: "虚拟环境构建指南", subtitle: "专业精准的系统提示词模板" },
        7: { title: "虚拟环境移植指南", subtitle: "跨平台环境迁移解决方案" },
        8: { title: "数据库系统使用指南", subtitle: "多数据库统一管理方案" }
    };
    
    try {
        if (pageNum === 6) {
            return {
                title: promptTopics[pageNum].title,
                subtitle: promptTopics[pageNum].subtitle,
                content: createVirtualEnvGuideContent()
            };
        } else if (pageNum === 7) {
            return {
                title: promptTopics[pageNum].title,
                subtitle: promptTopics[pageNum].subtitle,
                content: createVirtualEnvMigrationContent()
            };
        } else if (pageNum === 8) {
            return {
                title: promptTopics[pageNum].title,
                subtitle: promptTopics[pageNum].subtitle,
                content: createDatabaseGuideContent()
            };
        }
        
        return {
            title: promptTopics[pageNum] ? promptTopics[pageNum].title : "系统提示词",
            subtitle: promptTopics[pageNum] ? promptTopics[pageNum].subtitle : "专业文档指南",
            content: createGenericContent("系统提示词", "专业文档")
        };
    } catch (error) {
        console.error(`创建第${pageNum}页时出错:`, error);
        return {
            title: `第${pageNum}页`,
            subtitle: "页面加载出错",
            content: `<div class="content-card"><h3>页面加载出错</h3><p>错误信息: ${error.message}</p></div>`
        };
    }
}

// 生成其他类型页面的函数
function createVirtualEnvPage(pageNum) {
    const topics = {
        9: "虚拟环境创建",
        10: "依赖管理", 
        11: "路径修复工具", 
        12: "环境激活脚本", 
        13: "跨平台支持"
    };
    
    const topic = topics[pageNum];
    if (!topic) {
        return {
            title: `虚拟环境管理 - 第${pageNum}页`,
            subtitle: "虚拟环境管理功能详解",
            content: createGenericContent(`虚拟环境管理 - 第${pageNum}页`, "虚拟环境管理")
        };
    }
    
    return {
        title: topic,
        subtitle: `虚拟环境管理 - ${topic}详解`,
        content: createGenericContent(topic, "虚拟环境管理")
    };
}

function createDatabasePage(pageNum) {
    const topics = {
        14: "数据库管理器", 
        15: "SQLite集成", 
        16: "MySQL支持", 
        17: "Redis缓存", 
        18: "数据库切换"
    };
    
    const topic = topics[pageNum];
    if (!topic) {
        return {
            title: `数据库系统 - 第${pageNum}页`,
            subtitle: "数据库系统功能详解",
            content: createGenericContent(`数据库系统 - 第${pageNum}页`, "数据库系统")
        };
    }
    
    // 特殊处理不同数据库页面
    if (pageNum === 14) {
        return {
            title: "数据库管理器",
            subtitle: "VEnvFrame/DB 目录架构与特点详解",
            content: createDatabaseManagerContent()
        };
    } else if (pageNum === 15) {
        return {
            title: "SQLite集成",
            subtitle: "轻量级数据库完整实现 - 已完成",
            content: createSQLiteIntegrationContent()
        };
    } else if (pageNum === 16) {
        return {
            title: "MySQL支持",
            subtitle: "企业级数据库支持 - 正在建设中",
            content: createMySQLUnderConstructionContent()
        };
    } else if (pageNum === 17) {
        return {
            title: "Redis缓存",
            subtitle: "内存数据库集成 - 已完成",
            content: createRedisIntegrationContent()
        };
    }
    
    return {
        title: topic,
        subtitle: `数据库系统 - ${topic}详解`,
        content: createGenericContent(topic, "数据库系统")
    };
}

// 数据库管理器内容
function createDatabaseManagerContent() {
    return `
        <div class="db-manager-showcase">
            <!-- 主标题区域 -->
            <div class="db-header-section">
                <div class="db-main-icon">
                    <div class="icon-container">
                        <i class="fas fa-database"></i>
                        <div class="icon-glow"></div>
                    </div>
                </div>
                <div class="db-title-content">
                    <h2 class="db-main-title">VEnvFrame 数据库管理系统</h2>
                    <p class="db-subtitle">统一管理多种数据库，提供企业级数据存储解决方案</p>
                    <div class="db-path-display">
                        <i class="fas fa-folder-open"></i>
                        <span class="path-text">D:\\CodeBuddy_projects\\VEnvFrame\\DB</span>
                    </div>
                </div>
            </div>

            <!-- DB目录结构展示 -->
            <div class="db-structure-section">
                <h3 class="section-title">
                    <i class="fas fa-sitemap"></i>
                    DB目录架构
                </h3>
                
                <div class="file-tree-container">
                    <div class="file-tree">
                        <div class="tree-item folder-item">
                            <div class="tree-icon">
                                <i class="fas fa-folder"></i>
                            </div>
                            <span class="tree-name">DB/</span>
                            <span class="tree-desc">数据库管理根目录</span>
                        </div>
                        
                        <div class="tree-children">
                            <div class="tree-item file-item core">
                                <div class="tree-icon">
                                    <i class="fas fa-cogs"></i>
                                </div>
                                <span class="tree-name">database_manager.py</span>
                                <span class="tree-desc">核心数据库管理器</span>
                                <div class="file-badge primary">核心</div>
                            </div>
                            
                            <div class="tree-item file-item tool">
                                <div class="tree-icon">
                                    <i class="fas fa-exchange-alt"></i>
                                </div>
                                <span class="tree-name">db_switch.py</span>
                                <span class="tree-desc">数据库切换工具</span>
                                <div class="file-badge success">工具</div>
                            </div>
                            
                            <div class="tree-item file-item config">
                                <div class="tree-icon">
                                    <i class="fas fa-file-code"></i>
                                </div>
                                <span class="tree-name">database_config.json</span>
                                <span class="tree-desc">数据库配置文件</span>
                                <div class="file-badge info">配置</div>
                            </div>
                            
                            <div class="tree-item file-item example">
                                <div class="tree-icon">
                                    <i class="fas fa-play-circle"></i>
                                </div>
                                <span class="tree-name">database_example.py</span>
                                <span class="tree-desc">使用示例代码</span>
                                <div class="file-badge warning">示例</div>
                            </div>
                            
                            <div class="tree-item file-item test">
                                <div class="tree-icon">
                                    <i class="fas fa-vial"></i>
                                </div>
                                <span class="tree-name">test_database_system.py</span>
                                <span class="tree-desc">系统测试脚本</span>
                                <div class="file-badge secondary">测试</div>
                            </div>
                            
                            <div class="tree-item folder-item">
                                <div class="tree-icon">
                                    <i class="fas fa-folder"></i>
                                </div>
                                <span class="tree-name">sqlite/</span>
                                <span class="tree-desc">SQLite数据库模块</span>
                                
                                <div class="tree-children">
                                    <div class="tree-item file-item">
                                        <div class="tree-icon">
                                            <i class="fas fa-database"></i>
                                        </div>
                                        <span class="tree-name">app.db</span>
                                        <span class="tree-desc">SQLite数据库文件</span>
                                    </div>
                                    <div class="tree-item file-item">
                                        <div class="tree-icon">
                                            <i class="fas fa-code"></i>
                                        </div>
                                        <span class="tree-name">sqlite_manager.py</span>
                                        <span class="tree-desc">SQLite管理器</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="tree-item folder-item">
                                <div class="tree-icon">
                                    <i class="fas fa-folder"></i>
                                </div>
                                <span class="tree-name">redis/</span>
                                <span class="tree-desc">Redis缓存模块</span>
                                
                                <div class="tree-children">
                                    <div class="tree-item file-item">
                                        <div class="tree-icon">
                                            <i class="fas fa-memory"></i>
                                        </div>
                                        <span class="tree-name">redis_manager.py</span>
                                        <span class="tree-desc">Redis管理器</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 核心特点展示 -->
            <div class="db-features-section">
                <h3 class="section-title">
                    <i class="fas fa-star"></i>
                    核心特点
                </h3>
                
                <div class="features-grid">
                    <div class="feature-card unified">
                        <div class="feature-icon">
                            <i class="fas fa-layer-group"></i>
                        </div>
                        <div class="feature-content">
                            <h4>统一管理架构</h4>
                            <p>通过database_manager.py提供统一的数据库管理接口，支持多种数据库类型的无缝切换</p>
                            <div class="feature-highlights">
                                <span class="highlight-item">✓ 统一API接口</span>
                                <span class="highlight-item">✓ 配置文件驱动</span>
                                <span class="highlight-item">✓ 插件化架构</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="feature-card modular">
                        <div class="feature-icon">
                            <div class="icon-stack">
                                <i class="fas fa-cubes"></i>
                                <i class="fas fa-puzzle-piece icon-overlay"></i>
                            </div>
                        </div>
                        <div class="feature-content">
                            <h4>模块化设计</h4>
                            <p>每种数据库类型独立模块，便于维护和扩展，支持按需加载和动态配置</p>
                            <div class="feature-highlights">
                                <span class="highlight-item">
                                    <i class="fas fa-cube"></i>
                                    独立模块
                                </span>
                                <span class="highlight-item">
                                    <i class="fas fa-download"></i>
                                    按需加载
                                </span>
                                <span class="highlight-item">
                                    <i class="fas fa-expand-arrows-alt"></i>
                                    易于扩展
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="feature-card intelligent">
                        <div class="feature-icon">
                            <div class="icon-stack">
                                <i class="fas fa-exchange-alt"></i>
                                <i class="fas fa-magic icon-overlay"></i>
                            </div>
                        </div>
                        <div class="feature-content">
                            <h4>智能切换机制</h4>
                            <p>db_switch.py提供智能数据库切换功能，支持命令行和交互式两种操作模式</p>
                            <div class="feature-highlights">
                                <span class="highlight-item">
                                    <i class="fas fa-terminal"></i>
                                    命令行模式
                                </span>
                                <span class="highlight-item">
                                    <i class="fas fa-mouse-pointer"></i>
                                    交互式界面
                                </span>
                                <span class="highlight-item">
                                    <i class="fas fa-stethoscope"></i>
                                    连接测试
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="feature-card reliable">
                        <div class="feature-icon">
                            <div class="icon-stack">
                                <i class="fas fa-shield-alt"></i>
                                <i class="fas fa-check-double icon-overlay"></i>
                            </div>
                        </div>
                        <div class="feature-content">
                            <h4>可靠性保障</h4>
                            <p>完整的测试体系和示例代码，确保系统稳定性和开发者友好的使用体验</p>
                            <div class="feature-highlights">
                                <span class="highlight-item">
                                    <i class="fas fa-vial"></i>
                                    完整测试
                                </span>
                                <span class="highlight-item">
                                    <i class="fas fa-code"></i>
                                    示例代码
                                </span>
                                <span class="highlight-item">
                                    <i class="fas fa-exclamation-triangle"></i>
                                    错误处理
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 技术优势 -->
            <div class="db-advantages-section">
                <h3 class="section-title">
                    <i class="fas fa-trophy"></i>
                    技术优势
                </h3>
                
                <div class="advantages-container">
                    <div class="advantage-item">
                        <div class="advantage-number">01</div>
                        <div class="advantage-content">
                            <h4>零配置启动</h4>
                            <p>SQLite数据库开箱即用，无需额外配置即可开始开发</p>
                        </div>
                    </div>
                    
                    <div class="advantage-item">
                        <div class="advantage-number">02</div>
                        <div class="advantage-content">
                            <h4>企业级扩展</h4>
                            <p>支持MySQL、Redis等企业级数据库，满足生产环境需求</p>
                        </div>
                    </div>
                    
                    <div class="advantage-item">
                        <div class="advantage-number">03</div>
                        <div class="advantage-content">
                            <h4>开发友好</h4>
                            <p>丰富的示例代码和测试脚本，降低学习成本</p>
                        </div>
                    </div>
                    
                    <div class="advantage-item">
                        <div class="advantage-number">04</div>
                        <div class="advantage-content">
                            <h4>高度可扩展</h4>
                            <p>插件化架构设计，支持自定义数据库类型和功能扩展</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 使用统计 -->
            <div class="db-stats-section">
                <h3 class="section-title">
                    <i class="fas fa-chart-bar"></i>
                    系统统计
                </h3>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-file-code"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">8</div>
                            <div class="stat-label">核心文件</div>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-database"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">3</div>
                            <div class="stat-label">数据库类型</div>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">1500+</div>
                            <div class="stat-label">代码行数</div>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-tools"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">15+</div>
                            <div class="stat-label">管理功能</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// MySQL建设中内容
function createMySQLUnderConstructionContent() {
    return `
        <div class="under-construction-container">
            <!-- 建设中主要内容 -->
            <div class="construction-main">
                <div class="construction-icon">
                    <div class="icon-circle">
                        <span class="main-icon">🗄️</span>
                    </div>
                    <div class="construction-badge">
                        <i class="fas fa-hammer"></i>
                        <span>正在建设中</span>
                    </div>
                </div>
                
                <div class="construction-content">
                    <h2 class="construction-title">MySQL企业级数据库支持</h2>
                    <p class="construction-subtitle">提供完整的MySQL数据库集成和管理功能，支持企业级应用场景</p>
                    
                    <div class="progress-indicator">
                        <div class="progress-bar-container">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 25%;"></div>
                            </div>
                            <span class="progress-text">开发进度: 25%</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 功能预览 -->
            <div class="feature-preview-section">
                <h3 class="preview-title">
                    <i class="fas fa-eye"></i>
                    功能预览
                </h3>
                
                <div class="feature-grid">
                    <div class="feature-preview-card">
                        <div class="feature-status planned">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="feature-info">
                            <h4>MySQL连接池管理</h4>
                            <span class="status-text">计划中</span>
                        </div>
                    </div>
                    <div class="feature-preview-card">
                        <div class="feature-status planned">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="feature-info">
                            <h4>事务处理和回滚机制</h4>
                            <span class="status-text">计划中</span>
                        </div>
                    </div>
                    <div class="feature-preview-card">
                        <div class="feature-status planned">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="feature-info">
                            <h4>SQL查询优化和缓存</h4>
                            <span class="status-text">计划中</span>
                        </div>
                    </div>
                    <div class="feature-preview-card">
                        <div class="feature-status planned">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="feature-info">
                            <h4>数据库备份和恢复</h4>
                            <span class="status-text">计划中</span>
                        </div>
                    </div>
                    <div class="feature-preview-card">
                        <div class="feature-status planned">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="feature-info">
                            <h4>主从复制配置支持</h4>
                            <span class="status-text">计划中</span>
                        </div>
                    </div>
                    <div class="feature-preview-card">
                        <div class="feature-status planned">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="feature-info">
                            <h4>性能监控和慢查询分析</h4>
                            <span class="status-text">计划中</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 技术规划 -->
            <div class="tech-roadmap">
                <h3 class="roadmap-title">
                    <i class="fas fa-road"></i>
                    MySQL开发路线图
                </h3>
                
                <div class="roadmap-timeline">
                    <div class="timeline-item completed">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h4>阶段一：基础架构设计</h4>
                            <p>完成MySQL管理器架构设计和接口定义</p>
                            <span class="timeline-date">✓ 已完成</span>
                        </div>
                    </div>
                    
                    <div class="timeline-item current">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h4>阶段二：核心功能开发</h4>
                            <p>实现MySQL连接管理、查询执行、事务处理</p>
                            <span class="timeline-date">🔄 进行中</span>
                        </div>
                    </div>
                    
                    <div class="timeline-item planned">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h4>阶段三：高级功能实现</h4>
                            <p>连接池优化、查询缓存、性能监控</p>
                            <span class="timeline-date">📅 计划中</span>
                        </div>
                    </div>
                    
                    <div class="timeline-item planned">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h4>阶段四：测试和发布</h4>
                            <p>全面测试、文档完善、正式发布</p>
                            <span class="timeline-date">🚀 即将到来</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 技术特性预览 -->
            <div class="tech-preview">
                <h3 class="preview-title">
                    <i class="fas fa-cogs"></i>
                    技术特性预览
                </h3>
                
                <div class="tech-features">
                    <div class="tech-feature">
                        <div class="tech-icon">
                            <i class="fas fa-database"></i>
                        </div>
                        <div class="tech-content">
                            <h4>企业级连接池</h4>
                            <p>支持连接复用、自动重连、负载均衡</p>
                            <div class="tech-specs">
                                <span>最大连接数: 100+</span>
                                <span>连接超时: 可配置</span>
                                <span>健康检查: 自动</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tech-feature">
                        <div class="tech-icon">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <div class="tech-content">
                            <h4>查询性能优化</h4>
                            <p>智能查询缓存、SQL优化建议、慢查询分析</p>
                            <div class="tech-specs">
                                <span>缓存命中率: >90%</span>
                                <span>查询响应: <50ms</span>
                                <span>优化建议: 智能</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tech-feature">
                        <div class="tech-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <div class="tech-content">
                            <h4>数据安全保障</h4>
                            <p>事务ACID支持、数据备份、权限管理</p>
                            <div class="tech-specs">
                                <span>事务隔离: 完整支持</span>
                                <span>自动备份: 定时</span>
                                <span>权限控制: 细粒度</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 敬请期待 -->
            <div class="coming-soon">
                <div class="coming-soon-content">
                    <div class="sparkle-icon">✨</div>
                    <h3>MySQL支持即将到来</h3>
                    <p>我们正在全力开发MySQL企业级数据库支持功能，它将为VEnvFrame带来更强大的数据处理能力！</p>
                    <div class="social-links">
                        <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                            <span>关注开发进度</span>
                        </a>
                        <a href="#" class="social-link">
                            <i class="fas fa-star"></i>
                            <span>给我们点赞</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// SQLite集成内容
function createSQLiteIntegrationContent() {
    return `
        <div class="content-card">
            <h3>🗃️ SQLite集成 - 轻量级数据库解决方案</h3>
            <p>VEnvFrame完整集成了SQLite数据库，提供轻量级、零配置的数据存储解决方案，适合开发环境和小型应用。</p>
            
            <div class="content-grid">
                <div class="content-card">
                    <h4>SQLite特性优势</h4>
                    <div class="feature-list">
                        <div class="feature-item">
                            <i class="fas fa-feather-alt"></i>
                            <div>
                                <h5>轻量级设计</h5>
                                <p>无需独立服务器进程，直接嵌入应用程序</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-cog"></i>
                            <div>
                                <h5>零配置</h5>
                                <p>无需安装和配置，开箱即用</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-globe"></i>
                            <div>
                                <h5>跨平台</h5>
                                <p>支持Windows、Linux、Mac等多种操作系统</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-shield-alt"></i>
                            <div>
                                <h5>ACID事务</h5>
                                <p>完整的事务支持，保证数据一致性</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="content-card">
                    <h4>真实代码实现</h4>
                    <div class="code-block">
                        <div class="code-header">
                            <span>SQLite管理器 - sqlite_manager.py</span>
                            <button class="copy-btn" onclick="copyCode(this)">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <pre><code class="language-python">#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
SQLite数据库管理器
提供SQLite数据库的完整管理功能
"""

import sqlite3
import os
from typing import Dict, List, Any, Optional
from datetime import datetime

class SQLiteManager:
    """SQLite数据库管理器"""
    
    def __init__(self, database_path: str = "DB/sqlite/app.db"):
        """初始化SQLite管理器"""
        self.database_path = database_path
        self.ensure_database_directory()
        self.connection = None
        
    def ensure_database_directory(self):
        """确保数据库目录存在"""
        db_dir = os.path.dirname(self.database_path)
        if not os.path.exists(db_dir):
            os.makedirs(db_dir)
    
    def get_connection(self) -> sqlite3.Connection:
        """获取数据库连接"""
        if self.connection is None:
            self.connection = sqlite3.connect(
                self.database_path,
                check_same_thread=False
            )
            self.connection.row_factory = sqlite3.Row
        return self.connection
    
    def execute_query(self, query: str, params: tuple = ()) -> List[Dict]:
        """执行查询"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        try:
            cursor.execute(query, params)
            if query.strip().upper().startswith('SELECT'):
                return [dict(row) for row in cursor.fetchall()]
            else:
                conn.commit()
                return [{"affected_rows": cursor.rowcount}]
        except Exception as e:
            conn.rollback()
            raise e
        finally:
            cursor.close()
    
    def get_database_info(self) -> Dict[str, Any]:
        """获取数据库信息"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        # 获取SQLite版本
        cursor.execute("SELECT sqlite_version()")
        sqlite_version = cursor.fetchone()[0]
        
        # 获取所有表
        cursor.execute("""
            SELECT name FROM sqlite_master 
            WHERE type='table' AND name NOT LIKE 'sqlite_%'
        """)
        tables = [row[0] for row in cursor.fetchall()]
        
        # 获取数据库大小
        db_size = os.path.getsize(self.database_path) if os.path.exists(self.database_path) else 0
        
        # 计算总记录数
        total_records = 0
        for table in tables:
            cursor.execute(f"SELECT COUNT(*) FROM {table}")
            total_records += cursor.fetchone()[0]
        
        cursor.close()
        
        return {
            'database_path': self.database_path,
            'sqlite_version': sqlite_version,
            'database_size': db_size,
            'database_size_human': self._format_size(db_size),
            'tables': tables,
            'table_count': len(tables),
            'total_records': total_records
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
        
        return f"{size_bytes:.1f} {size_names[i]}"</code></pre>
                    </div>
                </div>
            </div>
            
            <div class="content-card">
                <h4>使用示例</h4>
                <div class="usage-examples">
                    <div class="example-section">
                        <h5>基本操作</h5>
                        <div class="code-block">
                            <pre><code class="language-python"># 初始化SQLite管理器
sqlite_mgr = SQLiteManager("DB/sqlite/app.db")

# 创建表
sqlite_mgr.execute_query("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        email TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
""")

# 插入数据
sqlite_mgr.execute_query(
    "INSERT INTO users (username, email) VALUES (?, ?)",
    ("admin", "admin@example.com")
)

# 查询数据
users = sqlite_mgr.execute_query("SELECT * FROM users")
print(users)</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 系统提示词模板演示内容
function createSystemPromptDemoContent() {
    return `
        <div class="system-prompt-showcase">
            <div class="prompt-header-section">
                <div class="prompt-main-icon">
                    <div class="icon-container">
                        <i class="fas fa-robot"></i>
                        <div class="icon-glow"></div>
                    </div>
                </div>
                <div class="prompt-title-content">
                    <h2 class="prompt-main-title">系统提示词模板展示</h2>
                    <p class="prompt-subtitle">AI驱动的虚拟环境构建指导系统</p>
                </div>
            </div>
            
            <div class="prompt-features-grid">
                <div class="prompt-feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h4>智能环境构建</h4>
                    <p>基于AI的自动化虚拟环境配置和依赖管理</p>
                </div>
                <div class="prompt-feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <h4>分层模板设计</h4>
                    <p>三层模板结构，从基础到高级功能的完整覆盖</p>
                </div>
                <div class="prompt-feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-magic"></i>
                    </div>
                    <h4>交互式指导</h4>
                    <p>提供实时的配置建议和最佳实践指导</p>
                </div>
            </div>
        </div>
    `;
}

// 路径修复工具演示内容
function createPathFixToolDemoContent() {
    return `
        <div class="pathfix-showcase">
            <div class="pathfix-header-section">
                <div class="pathfix-main-icon">
                    <div class="icon-container">
                        <i class="fas fa-wrench"></i>
                        <div class="icon-glow"></div>
                    </div>
                </div>
                <div class="pathfix-title-content">
                    <h2 class="pathfix-main-title">虚拟环境路径修复工具</h2>
                    <p class="pathfix-subtitle">一键修复虚拟环境路径问题，支持移植和迁移</p>
                </div>
            </div>
            
            <div class="pathfix-features-grid">
                <div class="pathfix-feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-route"></i>
                    </div>
                    <h4>智能路径检测</h4>
                    <p>自动检测和修复虚拟环境中的路径配置问题</p>
                </div>
                <div class="pathfix-feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <h4>批量修复功能</h4>
                    <p>支持批量处理多个虚拟环境的路径修复</p>
                </div>
                <div class="pathfix-feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h4>安全备份机制</h4>
                    <p>修复前自动备份，确保操作安全可回滚</p>
                </div>
            </div>
        </div>
    `;
}

// 项目结构可视化演示内容
function createProjectStructureDemoContent() {
    return `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .project-structure-visualization {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                padding: 20px;
                border-radius: 15px;
            }

            .container {
                max-width: 1200px;
                margin: 0 auto;
                background: white;
                border-radius: 20px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                overflow: hidden;
            }

            .header {
                background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                color: white;
                padding: 30px;
                text-align: center;
            }

            .header h1 {
                font-size: 2.5em;
                margin-bottom: 10px;
                text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }

            .header p {
                font-size: 1.2em;
                opacity: 0.9;
            }

            .content {
                padding: 40px;
            }

            .structure-tree {
                font-family: 'Courier New', monospace;
                background: #f8f9fa;
                border-radius: 15px;
                padding: 30px;
                margin: 20px 0;
                border-left: 5px solid #4facfe;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            }

            .tree-line {
                display: flex;
                align-items: center;
                margin: 8px 0;
                font-size: 14px;
                line-height: 1.6;
            }

            .tree-icon {
                font-size: 18px;
                margin-right: 8px;
                width: 25px;
                text-align: center;
            }

            .tree-text {
                color: #2c3e50;
                font-weight: 500;
            }

            .tree-indent-1 { margin-left: 20px; }
            .tree-indent-2 { margin-left: 40px; }
            .tree-indent-3 { margin-left: 60px; }
            .tree-indent-4 { margin-left: 80px; }

            .architecture-diagram {
                background: white;
                border-radius: 15px;
                padding: 30px;
                margin: 30px 0;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                border: 2px solid #e9ecef;
            }

            .layer {
                margin: 20px 0;
                padding: 20px;
                border-radius: 10px;
                position: relative;
            }

            .layer-title {
                font-size: 1.3em;
                font-weight: bold;
                margin-bottom: 15px;
                text-align: center;
                color: white;
                text-shadow: 0 1px 2px rgba(0,0,0,0.3);
            }

            .layer-content {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                gap: 15px;
            }

            .component {
                background: white;
                padding: 15px;
                border-radius: 8px;
                box-shadow: 0 3px 10px rgba(0,0,0,0.1);
                text-align: center;
                min-width: 150px;
                border: 2px solid #e9ecef;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .component:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            }

            .component-title {
                font-weight: bold;
                color: #2c3e50;
                margin-bottom: 5px;
            }

            .component-desc {
                font-size: 0.9em;
                color: #6c757d;
            }

            .app-layer { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); }
            .service-layer { background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); }
            .data-layer { background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); }
            .infra-layer { background: linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%); }

            .stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }

            .stat-card {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 25px;
                border-radius: 15px;
                text-align: center;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }

            .stat-number {
                font-size: 2.5em;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .stat-label {
                font-size: 1.1em;
                opacity: 0.9;
            }

            @media (max-width: 768px) {
                .header h1 { font-size: 2em; }
                .content { padding: 20px; }
                .layer-content { flex-direction: column; align-items: center; }
            }
        </style>

        <div class="project-structure-visualization">
            <div class="container">
                <div class="header">
                    <h1>🚀 VEnvFrame</h1>
                    <p>AI驱动的虚拟环境框架 - 项目结构可视化</p>
                </div>

                <div class="content">
                    <!-- 项目统计 -->
                    <div class="stats">
                        <div class="stat-card">
                            <div class="stat-number">25+</div>
                            <div class="stat-label">核心文件</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">4</div>
                            <div class="stat-label">主要模块</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">3</div>
                            <div class="stat-label">数据库支持</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">100%</div>
                            <div class="stat-label">AI生成</div>
                        </div>
                    </div>

                    <!-- 项目结构树 -->
                    <h2 style="color: #2c3e50; margin-bottom: 20px; text-align: center;">📁 项目文件结构</h2>
                    <div class="structure-tree">
                        <div class="tree-line">
                            <span class="tree-icon">📁</span>
                            <span class="tree-text"><strong>VEnvFrame/</strong></span>
                        </div>
                        <div class="tree-line tree-indent-1">
                            <span class="tree-icon">📋</span>
                            <span class="tree-text">第一步-虚拟环境构建-系统提示词模板.md</span>
                        </div>
                        <div class="tree-line tree-indent-1">
                            <span class="tree-icon">📝</span>
                            <span class="tree-text">文案.md</span>
                        </div>
                        <div class="tree-line tree-indent-1">
                            <span class="tree-icon">📖</span>
                            <span class="tree-text">虚拟环境移植指南.md</span>
                        </div>
                        <div class="tree-line tree-indent-1">
                            <span class="tree-icon">⚡</span>
                            <span class="tree-text">activate_env.bat</span>
                        </div>
                        <div class="tree-line tree-indent-1">
                            <span class="tree-icon">🔧</span>
                            <span class="tree-text">fix_venv_path.bat</span>
                        </div>
                        <div class="tree-line tree-indent-1">
                            <span class="tree-icon">📦</span>
                            <span class="tree-text">requirements.txt</span>
                        </div>
                        
                        <div class="tree-line tree-indent-1">
                            <span class="tree-icon">🗄️</span>
                            <span class="tree-text"><strong>DB/</strong></span>
                        </div>
                        <div class="tree-line tree-indent-2">
                            <span class="tree-icon">📚</span>
                            <span class="tree-text">数据库系统使用指南.md</span>
                        </div>
                        <div class="tree-line tree-indent-2">
                            <span class="tree-icon">⚙️</span>
                            <span class="tree-text">database_config.json</span>
                        </div>
                        <div class="tree-line tree-indent-2">
                            <span class="tree-icon">🎛️</span>
                            <span class="tree-text">database_manager.py</span>
                        </div>
                        <div class="tree-line tree-indent-2">
                            <span class="tree-icon">🔄</span>
                            <span class="tree-text">db_switch.py</span>
                        </div>
                        <div class="tree-line tree-indent-2">
                            <span class="tree-icon">🔴</span>
                            <span class="tree-text"><strong>redis/</strong></span>
                        </div>
                        <div class="tree-line tree-indent-3">
                            <span class="tree-icon">🎯</span>
                            <span class="tree-text">redis_manager.py</span>
                        </div>
                        <div class="tree-line tree-indent-2">
                            <span class="tree-icon">💾</span>
                            <span class="tree-text"><strong>sqlite/</strong></span>
                        </div>
                        <div class="tree-line tree-indent-3">
                            <span class="tree-icon">📊</span>
                            <span class="tree-text">app.db</span>
                        </div>
                        <div class="tree-line tree-indent-3">
                            <span class="tree-icon">🎯</span>
                            <span class="tree-text">sqlite_manager.py</span>
                        </div>

                        <div class="tree-line tree-indent-1">
                            <span class="tree-icon">📊</span>
                            <span class="tree-text"><strong>Monitor/</strong></span>
                        </div>
                        <div class="tree-line tree-indent-2">
                            <span class="tree-icon">🌐</span>
                            <span class="tree-text">app.py</span>
                        </div>
                        <div class="tree-line tree-indent-2">
                            <span class="tree-icon">⚙️</span>
                            <span class="tree-text">config.json</span>
                        </div>
                        <div class="tree-line tree-indent-2">
                            <span class="tree-icon">🎨</span>
                            <span class="tree-text"><strong>templates/</strong></span>
                        </div>
                        <div class="tree-line tree-indent-3">
                            <span class="tree-icon">🖼️</span>
                            <span class="tree-text">index.html</span>
                        </div>

                        <div class="tree-line tree-indent-1">
                            <span class="tree-icon">🛠️</span>
                            <span class="tree-text"><strong>Tools/</strong></span>
                        </div>
                        <div class="tree-line tree-indent-2">
                            <span class="tree-icon">🔧</span>
                            <span class="tree-text">fix_venv_path.ps1</span>
                        </div>
                        <div class="tree-line tree-indent-2">
                            <span class="tree-icon">🐍</span>
                            <span class="tree-text">fix_venv_path.py</span>
                        </div>

                        <div class="tree-line tree-indent-1">
                            <span class="tree-icon">🏠</span>
                            <span class="tree-text"><strong>VEnvFrame-Env/</strong></span>
                        </div>
                        <div class="tree-line tree-indent-2">
                            <span class="tree-icon">⚙️</span>
                            <span class="tree-text">pyvenv.cfg</span>
                        </div>
                        <div class="tree-line tree-indent-2">
                            <span class="tree-icon">📚</span>
                            <span class="tree-text"><strong>Lib/site-packages/</strong> (50+ 依赖包)</span>
                        </div>
                        <div class="tree-line tree-indent-2">
                            <span class="tree-icon">🚀</span>
                            <span class="tree-text"><strong>Scripts/</strong> (可执行文件)</span>
                        </div>
                    </div>

                    <!-- 架构层次图 -->
                    <h2 style="color: #2c3e50; margin: 40px 0 20px; text-align: center;">🏗️ 系统架构层次</h2>
                    <div class="architecture-diagram">
                        <div class="layer app-layer">
                            <div class="layer-title">应用层 (Application Layer)</div>
                            <div class="layer-content">
                                <div class="component">
                                    <div class="component-title">📊 监控系统</div>
                                    <div class="component-desc">Monitor/</div>
                                </div>
                                <div class="component">
                                    <div class="component-title">🗄️ 数据库管理</div>
                                    <div class="component-desc">DB/</div>
                                </div>
                                <div class="component">
                                    <div class="component-title">🛠️ 工具集</div>
                                    <div class="component-desc">Tools/</div>
                                </div>
                            </div>
                        </div>

                        <div class="layer service-layer">
                            <div class="layer-title">服务层 (Service Layer)</div>
                            <div class="layer-content">
                                <div class="component">
                                    <div class="component-title">🌐 Flask Web服务</div>
                                    <div class="component-desc">app.py</div>
                                </div>
                                <div class="component">
                                    <div class="component-title">🎛️ 数据库连接池</div>
                                    <div class="component-desc">database_manager</div>
                                </div>
                                <div class="component">
                                    <div class="component-title">🔧 路径修复</div>
                                    <div class="component-desc">fix_venv_path</div>
                                </div>
                            </div>
                        </div>

                        <div class="layer data-layer">
                            <div class="layer-title">数据层 (Data Layer)</div>
                            <div class="layer-content">
                                <div class="component">
                                    <div class="component-title">💾 SQLite</div>
                                    <div class="component-desc">app.db</div>
                                </div>
                                <div class="component">
                                    <div class="component-title">🔴 Redis</div>
                                    <div class="component-desc">(可选配置)</div>
                                </div>
                                <div class="component">
                                    <div class="component-title">🐬 MySQL</div>
                                    <div class="component-desc">(可选配置)</div>
                                </div>
                            </div>
                        </div>

                        <div class="layer infra-layer">
                            <div class="layer-title">基础层 (Infrastructure Layer)</div>
                            <div class="layer-content">
                                <div class="component">
                                    <div class="component-title">🏠 虚拟环境</div>
                                    <div class="component-desc">VEnvFrame-Env/</div>
                                </div>
                                <div class="component">
                                    <div class="component-title">⚙️ 配置管理</div>
                                    <div class="component-desc">config.json</div>
                                </div>
                                <div class="component">
                                    <div class="component-title">⚡ 脚本工具</div>
                                    <div class="component-desc">activate.bat</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="text-align: center; margin-top: 40px; color: #6c757d;">
                        <p>🤖 本项目完全由 CodeBuddy AI 自动生成</p>
                        <p>展现了AI在复杂系统架构设计中的强大能力</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 启动器界面演示内容
function createLauncherDemoContent() {
    return `
        <div class="launcher-showcase">
            <div class="launcher-header-section">
                <div class="launcher-main-icon">
                    <div class="icon-container">
                        <i class="fas fa-rocket"></i>
                        <div class="icon-glow"></div>
                    </div>
                </div>
                <div class="launcher-title-content">
                    <h2 class="launcher-main-title">启动器界面</h2>
                    <p class="launcher-subtitle">用户友好的图形化启动和管理界面</p>
                </div>
            </div>
            
            <div class="launcher-features-grid">
                <div class="launcher-feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-play-circle"></i>
                    </div>
                    <h4>一键启动</h4>
                    <p>简单直观的一键启动各种功能和服务</p>
                </div>
                <div class="launcher-feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-tachometer-alt"></i>
                    </div>
                    <h4>状态监控</h4>
                    <p>实时显示系统状态和运行情况</p>
                </div>
                <div class="launcher-feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-cog"></i>
                    </div>
                    <h4>配置管理</h4>
                    <p>图形化的配置管理和参数设置界面</p>
                </div>
            </div>
        </div>
    `;
}

// 文案使用指南内容
function createDocumentationGuideContent() {
    return `
        <div class="documentation-guide-showcase">
            <div class="guide-header-section">
                <div class="guide-main-icon">
                    <div class="icon-container">
                        <i class="fas fa-book-open"></i>
                        <div class="icon-glow"></div>
                    </div>
                </div>
                <div class="guide-title-content">
                    <h2 class="guide-main-title">VEnvFrame 文案使用指南</h2>
                    <p class="guide-subtitle">完整的项目介绍、使用说明和最佳实践指导</p>
                    <div class="guide-path-display">
                        <i class="fas fa-file-alt"></i>
                        <span class="path-text">D:\\CodeBuddy_projects\\VEnvFrame\\文案\\文案.md</span>
                    </div>
                </div>
            </div>
            
            <div class="guide-content-sections">
                <div class="content-section">
                    <div class="section-header">
                        <div class="section-icon">
                            <i class="fas fa-info-circle"></i>
                        </div>
                        <h3>项目概述</h3>
                    </div>
                    <div class="section-content">
                        <p>VEnvFrame是一个统一的虚拟环境管理框架，提供多数据库支持、高并发处理和移植友好的解决方案。</p>
                        <div class="highlight-box">
                            <div class="highlight-item">
                                <i class="fas fa-cube"></i>
                                <span>统一基础框架</span>
                            </div>
                            <div class="highlight-item">
                                <i class="fas fa-database"></i>
                                <span>多数据库支持</span>
                            </div>
                            <div class="highlight-item">
                                <i class="fas fa-bolt"></i>
                                <span>高并发处理</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="content-section">
                    <div class="section-header">
                        <div class="section-icon">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <h3>快速开始</h3>
                    </div>
                    <div class="section-content">
                        <div class="steps-container">
                            <div class="step-item">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h4>环境准备</h4>
                                    <p>确保Python 3.8+环境，克隆项目到本地</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h4>依赖安装</h4>
                                    <p>运行pip install -r requirements.txt安装依赖</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h4>配置数据库</h4>
                                    <p>根据需要配置SQLite、MySQL或Redis数据库</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <div class="step-number">4</div>
                                <div class="step-content">
                                    <h4>启动服务</h4>
                                    <p>使用启动器或命令行启动相应服务</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="content-section">
                    <div class="section-header">
                        <div class="section-icon">
                            <i class="fas fa-cogs"></i>
                        </div>
                        <h3>核心功能</h3>
                    </div>
                    <div class="section-content">
                        <div class="features-grid">
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="fas fa-exchange-alt"></i>
                                </div>
                                <h4>数据库切换</h4>
                                <p>支持SQLite、MySQL、Redis之间的无缝切换</p>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="fas fa-wrench"></i>
                                </div>
                                <h4>路径修复</h4>
                                <p>自动修复虚拟环境路径，支持项目移植</p>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <h4>监控系统</h4>
                                <p>实时监控系统状态和性能指标</p>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                                <h4>高并发支持</h4>
                                <p>底层多线程、多用户、高并发处理能力</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="content-section">
                    <div class="section-header">
                        <div class="section-icon">
                            <i class="fas fa-lightbulb"></i>
                        </div>
                        <h3>最佳实践</h3>
                    </div>
                    <div class="section-content">
                        <div class="best-practices">
                            <div class="practice-item">
                                <div class="practice-icon">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="practice-content">
                                    <h4>环境隔离</h4>
                                    <p>为每个项目创建独立的虚拟环境，避免依赖冲突</p>
                                </div>
                            </div>
                            <div class="practice-item">
                                <div class="practice-icon">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="practice-content">
                                    <h4>配置管理</h4>
                                    <p>使用配置文件管理数据库连接和系统参数</p>
                                </div>
                            </div>
                            <div class="practice-item">
                                <div class="practice-icon">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="practice-content">
                                    <h4>定期备份</h4>
                                    <p>定期备份数据库和配置文件，确保数据安全</p>
                                </div>
                            </div>
                            <div class="practice-item">
                                <div class="practice-icon">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="practice-content">
                                    <h4>监控告警</h4>
                                    <p>设置合适的监控指标和告警阈值</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="guide-footer">
                <div class="footer-content">
                    <div class="footer-icon">
                        <i class="fas fa-heart"></i>
                    </div>
                    <h3>感谢使用 VEnvFrame</h3>
                    <p>如有问题或建议，请查看项目文档或联系开发团队</p>
                    <div class="footer-links">
                        <a href="#" class="footer-link">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </a>
                        <a href="#" class="footer-link">
                            <i class="fas fa-book"></i>
                            <span>文档</span>
                        </a>
                        <a href="#" class="footer-link">
                            <i class="fas fa-question-circle"></i>
                            <span>帮助</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Redis集成内容
function createRedisIntegrationContent() {
    return `
        <div class="content-card">
            <h3>🚀 Redis缓存 - 高性能内存数据库</h3>
            <p>VEnvFrame集成了Redis内存数据库，提供高速缓存、会话存储和实时数据处理能力。</p>
            
            <div class="content-grid">
                <div class="content-card">
                    <h4>Redis核心优势</h4>
                    <div class="feature-list">
                        <div class="feature-item">
                            <i class="fas fa-bolt"></i>
                            <div>
                                <h5>极速性能</h5>
                                <p>内存存储，读写速度极快，支持百万级QPS</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-cubes"></i>
                            <div>
                                <h5>丰富数据结构</h5>
                                <p>支持字符串、哈希、列表、集合、有序集合等</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-clock"></i>
                            <div>
                                <h5>过期机制</h5>
                                <p>自动过期清理，支持TTL时间设置</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-sync"></i>
                            <div>
                                <h5>持久化</h5>
                                <p>支持RDB和AOF持久化机制</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="content-card">
                    <h4>Redis管理器实现</h4>
                    <div class="code-block">
                        <div class="code-header">
                            <span>Redis管理器 - redis_manager.py</span>
                            <button class="copy-btn" onclick="copyCode(this)">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <pre><code class="language-python">#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Redis数据库管理器
提供Redis缓存和数据存储功能
"""

import redis
import json
from typing import Dict, Any, Optional, Union, List
from datetime import datetime, timedelta

class RedisManager:
    """Redis数据库管理器"""
    
    def __init__(self, host: str = 'localhost', port: int = 6379, 
                 db: int = 0, password: Optional[str] = None):
        """初始化Redis管理器"""
        self.host = host
        self.port = port
        self.db = db
        self.password = password
        self.client = None
        
    def get_client(self) -> redis.Redis:
        """获取Redis客户端"""
        if self.client is None:
            self.client = redis.Redis(
                host=self.host,
                port=self.port,
                db=self.db,
                password=self.password,
                decode_responses=True,
                socket_connect_timeout=5,
                socket_timeout=5
            )
        return self.client
    
    def set_cache(self, key: str, value: Any, expire: int = 3600) -> bool:
        """设置缓存"""
        try:
            client = self.get_client()
            if isinstance(value, (dict, list)):
                value = json.dumps(value, ensure_ascii=False)
            
            return client.setex(key, expire, value)
        except Exception as e:
            print(f"设置缓存失败: {e}")
            return False
    
    def get_cache(self, key: str) -> Optional[Any]:
        """获取缓存"""
        try:
            client = self.get_client()
            value = client.get(key)
            
            if value is None:
                return None
            
            # 尝试解析JSON
            try:
                return json.loads(value)
            except (json.JSONDecodeError, TypeError):
                return value
                
        except Exception as e:
            print(f"获取缓存失败: {e}")
            return None
    
    def delete_cache(self, key: str) -> bool:
        """删除缓存"""
        try:
            client = self.get_client()
            return bool(client.delete(key))
        except Exception as e:
            print(f"删除缓存失败: {e}")
            return False
    
    def get_database_info(self) -> Dict[str, Any]:
        """获取Redis数据库信息"""
        try:
            client = self.get_client()
            info = client.info()
            
            return {
                'host': self.host,
                'port': self.port,
                'db': self.db,
                'redis_version': info.get('redis_version'),
                'used_memory': info.get('used_memory'),
                'used_memory_human': info.get('used_memory_human'),
                'connected_clients': info.get('connected_clients'),
                'key_count': client.dbsize(),
                'uptime_in_seconds': info.get('uptime_in_seconds'),
                'uptime_in_days': info.get('uptime_in_days')
            }
        except Exception as e:
            return {'error': f'获取Redis信息失败: {e}'}
    
    def test_connection(self) -> Dict[str, Any]:
        """测试Redis连接"""
        try:
            client = self.get_client()
            client.ping()
            return {
                'status': 'success',
                'message': 'Redis连接正常',
                'server': f'{self.host}:{self.port}'
            }
        except Exception as e:
            return {
                'status': 'error',
                'message': f'Redis连接失败: {e}'
            }</code></pre>
                    </div>
                </div>
            </div>
            
            <div class="content-card">
                <h4>应用场景</h4>
                <div class="scenario-grid">
                    <div class="scenario-item">
                        <h5>🏃‍♂️ 缓存加速</h5>
                        <p>数据库查询结果缓存，API响应缓存，页面缓存</p>
                    </div>
                    <div class="scenario-item">
                        <h5>👤 会话存储</h5>
                        <p>用户登录状态，购物车数据，临时数据存储</p>
                    </div>
                    <div class="scenario-item">
                        <h5>📊 实时统计</h5>
                        <p>访问计数，实时排行榜，在线用户统计</p>
                    </div>
                    <div class="scenario-item">
                        <h5>🔔 消息队列</h5>
                        <p>任务队列，消息推送，事件通知</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createMonitorPage(pageNum) {
    const topics = {
        19: "监控架构", 20: "Flask应用", 21: "实时数据", 22: "性能指标", 23: "告警系统"
    };
    
    if (pageNum === 19) {
        return {
            title: "VEnvFrame 监控系统架构",
            subtitle: "基于Flask的实时监控面板 - 真实界面展示",
            content: createRealMonitorContent()
        };
    } else if (pageNum === 21) {
        return {
            title: "实时数据监控",
            subtitle: "动态数据展示功能 - 正在开发中",
            content: createUnderConstructionContent("实时数据监控", "realtime")
        };
    } else if (pageNum === 22) {
        return {
            title: "性能指标监控",
            subtitle: "高级监控功能 - 正在开发中",
            content: createUnderConstructionContent("性能指标监控", "performance")
        };
    } else if (pageNum === 23) {
        return {
            title: "智能告警系统",
            subtitle: "自动化告警功能 - 正在开发中",
            content: createUnderConstructionContent("智能告警系统", "alert")
        };
    }
    
    return {
        title: topics[pageNum],
        subtitle: `监控系统 - ${topics[pageNum]}详解`,
        content: createGenericContent(topics[pageNum], "监控系统")
    };
}

// 正在建设中的页面内容
function createUnderConstructionContent(featureName, type) {
    const icons = {
        realtime: "📈",
        performance: "📊",
        alert: "🚨"
    };
    
    const descriptions = {
        realtime: {
            title: "实时数据监控系统",
            subtitle: "动态展示系统运行数据，提供实时数据流监控",
            features: [
                "实时系统资源监控",
                "动态数据图表展示",
                "WebSocket实时通信",
                "数据流可视化",
                "历史数据对比分析",
                "自定义监控面板"
            ]
        },
        performance: {
            title: "性能指标监控系统",
            subtitle: "实时监控系统性能，提供详细的性能分析报告",
            features: [
                "CPU使用率实时监控",
                "内存使用情况分析",
                "磁盘I/O性能统计",
                "网络流量监控",
                "数据库查询性能分析",
                "Python进程性能追踪"
            ]
        },
        alert: {
            title: "智能告警系统",
            subtitle: "自动化告警功能 - 正在开发中",
            features: [
                "智能异常检测算法",
                "多渠道告警通知",
                "告警规则自定义",
                "告警历史记录",
                "告警统计分析",
                "自动故障恢复"
            ]
        },
        mysql: {
            title: "MySQL企业级数据库支持",
            subtitle: "提供完整的MySQL数据库集成和管理功能",
            features: [
                "MySQL连接池管理",
                "事务处理和回滚机制",
                "SQL查询优化和缓存",
                "数据库备份和恢复",
                "主从复制配置支持",
                "性能监控和慢查询分析"
            ]
        }
    };
    
    const desc = descriptions[type];
    const icon = icons[type];
    
    return `
        <div class="under-construction-container">
            <!-- 建设中主要内容 -->
            <div class="construction-main">
                <div class="construction-icon">
                    <div class="icon-circle">
                        <span class="main-icon">${icon}</span>
                    </div>
                    <div class="construction-badge">
                        <i class="fas fa-hammer"></i>
                        <span>正在建设中</span>
                    </div>
                </div>
                
                <div class="construction-content">
                    <h2 class="construction-title">${desc.title}</h2>
                    <p class="construction-subtitle">${desc.subtitle}</p>
                    
                    <div class="progress-indicator">
                        <div class="progress-bar-container">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 35%;"></div>
                            </div>
                            <span class="progress-text">开发进度: 35%</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 功能预览 -->
            <div class="feature-preview-section">
                <h3 class="preview-title">
                    <i class="fas fa-eye"></i>
                    功能预览
                </h3>
                
                <div class="feature-grid">
                    ${desc.features.map((feature, index) => `
                        <div class="feature-preview-card">
                            <div class="feature-status ${index < 2 ? 'completed' : 'planned'}">
                                <i class="fas fa-${index < 2 ? 'check-circle' : 'clock'}"></i>
                            </div>
                            <div class="feature-info">
                                <h4>${feature}</h4>
                                <span class="status-text">${index < 2 ? '已完成' : '计划中'}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- 技术规划 -->
            <div class="tech-roadmap">
                <h3 class="roadmap-title">
                    <i class="fas fa-road"></i>
                    技术路线图
                </h3>
                
                <div class="roadmap-timeline">
                    <div class="timeline-item completed">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h4>阶段一：基础架构</h4>
                            <p>完成监控系统基础框架搭建</p>
                            <span class="timeline-date">✓ 已完成</span>
                        </div>
                    </div>
                    
                    <div class="timeline-item current">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h4>阶段二：${featureName}开发</h4>
                            <p>实现核心${featureName}功能模块</p>
                            <span class="timeline-date">🔄 进行中</span>
                        </div>
                    </div>
                    
                    <div class="timeline-item planned">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h4>阶段三：功能完善</h4>
                            <p>优化用户体验，增加高级功能</p>
                            <span class="timeline-date">📅 计划中</span>
                        </div>
                    </div>
                    
                    <div class="timeline-item planned">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h4>阶段四：上线部署</h4>
                            <p>测试验证，正式发布上线</p>
                            <span class="timeline-date">🚀 即将到来</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 敬请期待 -->
            <div class="coming-soon">
                <div class="coming-soon-content">
                    <div class="sparkle-icon">✨</div>
                    <h3>敬请期待</h3>
                    <p>我们正在努力开发这个功能，它将为VEnvFrame带来更强大的监控能力！</p>
                    <div class="social-links">
                        <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                            <span>关注开发进度</span>
                        </a>
                        <a href="#" class="social-link">
                            <i class="fas fa-star"></i>
                            <span>给我们点赞</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 真实监控界面内容
function createRealMonitorContent() {
    return `
        <div class="content-card">
            <h3>🚀 VEnvFrame 监控面板 - 完整界面展示</h3>
            <p class="monitor-intro">监控系统运行在 <strong>http://localhost:88</strong>，以下是完整的监控界面截图和核心代码实现。</p>
            
            <!-- 监控界面完整截图效果 -->
            <div class="monitor-screenshot">
                <div class="browser-frame">
                    <div class="browser-header">
                        <div class="browser-controls">
                            <span class="control-btn close"></span>
                            <span class="control-btn minimize"></span>
                            <span class="control-btn maximize"></span>
                        </div>
                        <div class="address-bar">
                            <span class="protocol">🔒</span>
                            <span class="url">localhost:88</span>
                        </div>
                    </div>
                    
                    <div class="monitor-interface">
                        <!-- 监控界面头部 -->
                        <div class="monitor-header-full">
                            <div class="gradient-bg">
                                <h1 class="monitor-main-title">🚀 VEnvFrame 监控面板</h1>
                                <p class="monitor-subtitle">虚拟环境与数据库管理中心</p>
                            </div>
                        </div>
                        
                        <!-- 四个监控卡片的完整布局 -->
                        <div class="monitor-dashboard-full">
                            <!-- Python环境卡片 -->
                            <div class="monitor-card-full python-card">
                                <div class="card-header-full">
                                    <div class="card-icon-full python-gradient">🐍</div>
                                    <div class="card-title-full">Python 环境</div>
                                </div>
                                <div class="card-content-full">
                                    <div class="info-row-full">
                                        <span class="label">版本</span>
                                        <span class="value">Python 3.12.8</span>
                                    </div>
                                    <div class="info-row-full">
                                        <span class="label">平台</span>
                                        <span class="value">Windows 11 Pro</span>
                                    </div>
                                    <div class="info-row-full">
                                        <span class="label">可执行文件</span>
                                        <span class="value small">D:/CodeBuddy_projects/VEnvFrame/VEnvFrame-Env/Scripts/python.exe</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- 虚拟环境卡片 -->
                            <div class="monitor-card-full env-card">
                                <div class="card-header-full">
                                    <div class="card-icon-full env-gradient">📦</div>
                                    <div class="card-title-full">虚拟环境</div>
                                </div>
                                <div class="card-content-full">
                                    <div class="info-row-full">
                                        <span class="label">名称</span>
                                        <span class="value">VEnvFrame-Env</span>
                                    </div>
                                    <div class="info-row-full">
                                        <span class="label">状态</span>
                                        <span class="status-badge success">✓ 存在</span>
                                    </div>
                                    <div class="info-row-full">
                                        <span class="label">激活状态</span>
                                        <span class="status-badge success">✓ 已激活</span>
                                    </div>
                                    <div class="info-row-full">
                                        <span class="label">路径</span>
                                        <span class="value small">D:/CodeBuddy_projects/VEnvFrame/VEnvFrame-Env</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- 已安装包卡片 -->
                            <div class="monitor-card-full package-card">
                                <div class="card-header-full">
                                    <div class="card-icon-full package-gradient">📚</div>
                                    <div class="card-title-full">已安装包</div>
                                </div>
                                <div class="card-content-full">
                                    <div class="info-row-full">
                                        <span class="label">已安装包数量</span>
                                        <span class="value">52</span>
                                    </div>
                                    <div class="package-list-full">
                                        <div class="package-item-full">
                                            <span class="pkg-name">Flask</span>
                                            <span class="pkg-version">3.1.1</span>
                                        </div>
                                        <div class="package-item-full">
                                            <span class="pkg-name">SQLAlchemy</span>
                                            <span class="pkg-version">2.0.36</span>
                                        </div>
                                        <div class="package-item-full">
                                            <span class="pkg-name">redis</span>
                                            <span class="pkg-version">4.6.0</span>
                                        </div>
                                        <div class="package-item-full">
                                            <span class="pkg-name">numpy</span>
                                            <span class="pkg-version">2.3.2</span>
                                        </div>
                                        <div class="package-item-full">
                                            <span class="pkg-name">pandas</span>
                                            <span class="pkg-version">2.3.1</span>
                                        </div>
                                        <div class="package-more-full">... 还有47个包</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- 数据库管理卡片 -->
                            <div class="monitor-card-full db-card">
                                <div class="card-header-full">
                                    <div class="card-icon-full db-gradient">🗄️</div>
                                    <div class="card-title-full">数据库管理</div>
                                </div>
                                <div class="card-content-full">
                                    <div class="info-row-full">
                                        <span class="label">当前数据库</span>
                                        <span class="value">sqlite_default</span>
                                    </div>
                                    <div class="info-row-full">
                                        <span class="label">支持数据库</span>
                                        <span class="value">3 种</span>
                                    </div>
                                    <div class="db-controls-full">
                                        <div class="db-label">数据库切换:</div>
                                        <div class="db-selector-full">
                                            <div class="db-option-full active">SQLite</div>
                                            <div class="db-option-full">MySQL</div>
                                            <div class="db-option-full">Redis</div>
                                        </div>
                                        <div class="control-buttons-full">
                                            <button class="btn-full test">🔍 测试连接</button>
                                            <button class="btn-full refresh">🔄 刷新信息</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 配置区域 -->
                        <div class="config-section-full">
                            <div class="card-header-full">
                                <div class="card-icon-full config-gradient">⚙️</div>
                                <div class="card-title-full">系统配置</div>
                            </div>
                            <div class="port-config-full">
                                <span class="label">监控端口:</span>
                                <input type="number" class="port-input-full" value="88" readonly>
                                <button class="btn-full primary">更新端口</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="content-grid">
            <div class="content-card">
                <h4>核心功能特性</h4>
                <div class="feature-list">
                    <div class="feature-item">
                        <i class="fas fa-eye"></i>
                        <div>
                            <h5>实时监控</h5>
                            <p>实时显示Python环境、虚拟环境状态和系统资源使用情况</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-database"></i>
                        <div>
                            <h5>数据库管理</h5>
                            <p>支持SQLite、MySQL、Redis等多种数据库的统一管理和切换</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-package"></i>
                        <div>
                            <h5>包管理</h5>
                            <p>显示已安装包列表，支持包版本查看和依赖关系分析</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-cog"></i>
                        <div>
                            <h5>配置管理</h5>
                            <p>支持端口配置、数据库连接参数等系统配置的动态调整</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-card">
                <h4>技术实现</h4>
                <div class="tech-details">
                    <div class="tech-item">
                        <strong>后端框架:</strong> Flask 3.1.1 + Werkzeug
                    </div>
                    <div class="tech-item">
                        <strong>前端技术:</strong> HTML5 + CSS3 + JavaScript ES6
                    </div>
                    <div class="tech-item">
                        <strong>数据交互:</strong> RESTful API + JSON
                    </div>
                    <div class="tech-item">
                        <strong>实时更新:</strong> AJAX轮询 (30秒间隔)
                    </div>
                    <div class="tech-item">
                        <strong>响应式设计:</strong> 支持桌面和移动端访问
                    </div>
                    <div class="tech-item">
                        <strong>部署方式:</strong> 本地开发服务器 (端口88)
                    </div>
                </div>
            </div>
        </div>
        
        <div class="content-card">
            <h4>API接口说明</h4>
            <div class="api-list">
                <div class="api-item">
                    <span class="api-method get">GET</span>
                    <span class="api-path">/api/system/info</span>
                    <span class="api-desc">获取系统信息</span>
                </div>
                <div class="api-item">
                    <span class="api-method post">POST</span>
                    <span class="api-path">/api/database/switch</span>
                    <span class="api-desc">切换数据库</span>
                </div>
                <div class="api-item">
                    <span class="api-method post">POST</span>
                    <span class="api-path">/api/database/test</span>
                    <span class="api-desc">测试数据库连接</span>
                </div>
                <div class="api-item">
                    <span class="api-method get">GET</span>
                    <span class="api-path">/api/config</span>
                    <span class="api-desc">获取配置信息</span>
                </div>
                <div class="api-item">
                    <span class="api-method post">POST</span>
                    <span class="api-path">/api/config/port</span>
                    <span class="api-desc">更新端口配置</span>
                </div>
            </div>
        </div>
    `;
}

function createToolsPage(pageNum) {
    const topics = {
        24: "虚拟环境构建系统提示词模板展示", 25: "虚拟环境路径修复工具展示", 26: "文案使用指南", 27: "项目结构可视化", 28: "启动器界面"
    };
    
    if (pageNum === 24) {
        return {
            title: "虚拟环境构建系统提示词模板展示",
            subtitle: "D:\\CodeBuddy_projects\\VEnvFrame\\文案\\虚拟环境构建系统提示词模板展示",
            content: createSystemPromptDemoContent()
        };
    } else if (pageNum === 25) {
        return {
            title: "虚拟环境路径修复工具展示",
            subtitle: "D:\\CodeBuddy_projects\\VEnvFrame\\文案\\虚拟环境路径修复工具展示",
            content: createPathFixToolDemoContent()
        };
    } else if (pageNum === 26) {
        return {
            title: "项目结构可视化",
            subtitle: "D:\\CodeBuddy_projects\\VEnvFrame\\文案\\项目结构可视化.html",
            content: createProjectStructureDemoContent()
        };
    } else if (pageNum === 27) {
        return {
            title: "项目结构可视化",
            subtitle: "直观展示项目架构",
            content: createProjectStructureDemoContent()
        };
    } else if (pageNum === 28) {
        return {
            title: "启动器界面",
            subtitle: "用户友好的操作界面",
            content: createLauncherDemoContent()
        };
    }
    
    return {
        title: topics[pageNum],
        subtitle: `开发工具集 - ${topics[pageNum]}详解`,
        content: createGenericContent(topics[pageNum], "开发工具集")
    };
}

// 文案演示概览内容
function createDocumentationOverviewContent() {
    return `
        <div class="documentation-showcase">
            <!-- 主标题区域 -->
            <div class="docs-header-section">
                <div class="docs-main-icon">
                    <div class="icon-container">
                        <i class="fas fa-file-alt"></i>
                        <div class="icon-glow"></div>
                    </div>
                </div>
                <div class="docs-title-content">
                    <h2 class="docs-main-title">VEnvFrame 高保真文案演示</h2>
                    <p class="docs-subtitle">完整的使用指南、教程文档和可视化演示</p>
                    <div class="docs-path-display">
                        <i class="fas fa-folder-open"></i>
                        <span class="path-text">D:\\CodeBuddy_projects\\VEnvFrame\\文案</span>
                    </div>
                </div>
            </div>

            <!-- 文案目录结构展示 -->
            <div class="docs-structure-section">
                <h3 class="section-title">
                    <i class="fas fa-sitemap"></i>
                    文案目录架构
                </h3>
                
                <div class="file-tree-container">
                    <div class="file-tree">
                        <div class="tree-item folder-item">
                            <div class="tree-icon">
                                <i class="fas fa-folder"></i>
                            </div>
                            <span class="tree-name">文案/</span>
                            <span class="tree-desc">文档演示根目录</span>
                        </div>
                        
                        <div class="tree-children">
                            <div class="tree-item file-item launcher">
                                <div class="tree-icon">
                                    <i class="fas fa-rocket"></i>
                                </div>
                                <span class="tree-name">启动器.html</span>
                                <span class="tree-desc">用户友好的启动界面</span>
                                <div class="file-badge primary">界面</div>
                            </div>
                            
                            <div class="tree-item file-item content">
                                <div class="tree-icon">
                                    <i class="fas fa-file-text"></i>
                                </div>
                                <span class="tree-name">文案.md</span>
                                <span class="tree-desc">项目介绍与使用说明</span>
                                <div class="file-badge info">文档</div>
                            </div>
                            
                            <div class="tree-item file-item visual">
                                <div class="tree-icon">
                                    <i class="fas fa-project-diagram"></i>
                                </div>
                                <span class="tree-name">项目结构可视化.html</span>
                                <span class="tree-desc">项目架构可视化展示</span>
                                <div class="file-badge success">可视化</div>
                            </div>
                            
                            <div class="tree-item folder-item">
                                <div class="tree-icon">
                                    <i class="fas fa-folder"></i>
                                </div>
                                <span class="tree-name">虚拟环境构建系统提示词模板展示/</span>
                                <span class="tree-desc">AI系统提示词演示</span>
                                
                                <div class="tree-children">
                                    <div class="tree-item file-item">
                                        <div class="tree-icon">
                                            <i class="fas fa-file-code"></i>
                                        </div>
                                        <span class="tree-name">系统提示词模板-第1页.html</span>
                                        <span class="tree-desc">基础环境构建</span>
                                    </div>
                                    <div class="tree-item file-item">
                                        <div class="tree-icon">
                                            <i class="fas fa-file-code"></i>
                                        </div>
                                        <span class="tree-name">系统提示词模板-第2页.html</span>
                                        <span class="tree-desc">依赖管理配置</span>
                                    </div>
                                    <div class="tree-item file-item">
                                        <div class="tree-icon">
                                            <i class="fas fa-file-code"></i>
                                        </div>
                                        <span class="tree-name">系统提示词模板-第3页.html</span>
                                        <span class="tree-desc">高级功能配置</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="tree-item folder-item">
                                <div class="tree-icon">
                                    <i class="fas fa-folder"></i>
                                </div>
                                <span class="tree-name">虚拟环境路径修复工具展示/</span>
                                <span class="tree-desc">路径修复工具演示</span>
                                
                                <div class="tree-children">
                                    <div class="tree-item file-item">
                                        <div class="tree-icon">
                                            <i class="fas fa-file-code"></i>
                                        </div>
                                        <span class="tree-name">第1页-工具概览.html</span>
                                        <span class="tree-desc">工具功能介绍</span>
                                    </div>
                                    <div class="tree-item file-item">
                                        <div class="tree-icon">
                                            <i class="fas fa-file-code"></i>
                                        </div>
                                        <span class="tree-name">第2页-核心代码.html</span>
                                        <span class="tree-desc">代码实现展示</span>
                                    </div>
                                    <div class="tree-item file-item">
                                        <div class="tree-icon">
                                            <i class="fas fa-file-code"></i>
                                        </div>
                                        <span class="tree-name">第3页-功能特性.html</span>
                                        <span class="tree-desc">特性详细说明</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="tree-item folder-item">
                                <div class="tree-icon">
                                    <i class="fas fa-folder"></i>
                                </div>
                                <span class="tree-name">PPT/</span>
                                <span class="tree-desc">演示文稿系统</span>
                                
                                <div class="tree-children">
                                    <div class="tree-item file-item">
                                        <div class="tree-icon">
                                            <i class="fas fa-presentation"></i>
                                        </div>
                                        <span class="tree-name">final-demo.html</span>
                                        <span class="tree-desc">完整演示系统</span>
                                    </div>
                                    <div class="tree-item file-item">
                                        <div class="tree-icon">
                                            <i class="fas fa-palette"></i>
                                        </div>
                                        <span class="tree-name">demo-styles-enhanced.css</span>
                                        <span class="tree-desc">增强样式系统</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 文案特点展示 -->
            <div class="docs-features-section">
                <h3 class="section-title">
                    <i class="fas fa-star"></i>
                    文案演示特点
                </h3>
                
                <div class="features-grid">
                    <div class="feature-card interactive">
                        <div class="feature-icon">
                            <div class="icon-stack">
                                <i class="fas fa-mouse-pointer"></i>
                                <i class="fas fa-magic icon-overlay"></i>
                            </div>
                        </div>
                        <div class="feature-content">
                            <h4>交互式演示</h4>
                            <p>通过HTML页面提供直观的交互式演示，用户可以实时体验功能特性</p>
                            <div class="feature-highlights">
                                <span class="highlight-item">
                                    <i class="fas fa-hand-pointer"></i>
                                    点击交互
                                </span>
                                <span class="highlight-item">
                                    <i class="fas fa-eye"></i>
                                    实时预览
                                </span>
                                <span class="highlight-item">
                                    <i class="fas fa-mobile-alt"></i>
                                    响应式设计
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="feature-card comprehensive">
                        <div class="feature-icon">
                            <div class="icon-stack">
                                <i class="fas fa-book-open"></i>
                                <i class="fas fa-check-circle icon-overlay"></i>
                            </div>
                        </div>
                        <div class="feature-content">
                            <h4>全面的使用指南</h4>
                            <p>从基础安装到高级功能，提供完整的使用教程和最佳实践指导</p>
                            <div class="feature-highlights">
                                <span class="highlight-item">
                                    <i class="fas fa-graduation-cap"></i>
                                    新手友好
                                </span>
                                <span class="highlight-item">
                                    <i class="fas fa-rocket"></i>
                                    快速上手
                                </span>
                                <span class="highlight-item">
                                    <i class="fas fa-lightbulb"></i>
                                    最佳实践
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="feature-card visual">
                        <div class="feature-icon">
                            <div class="icon-stack">
                                <i class="fas fa-chart-pie"></i>
                                <i class="fas fa-palette icon-overlay"></i>
                            </div>
                        </div>
                        <div class="feature-content">
                            <h4>可视化展示</h4>
                            <p>通过图表、流程图和架构图直观展示系统结构和工作流程</p>
                            <div class="feature-highlights">
                                <span class="highlight-item">
                                    <i class="fas fa-sitemap"></i>
                                    架构图
                                </span>
                                <span class="highlight-item">
                                    <i class="fas fa-flow-chart"></i>
                                    流程图
                                </span>
                                <span class="highlight-item">
                                    <i class="fas fa-chart-bar"></i>
                                    数据图表
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="feature-card professional">
                        <div class="feature-icon">
                            <div class="icon-stack">
                                <i class="fas fa-award"></i>
                                <i class="fas fa-star icon-overlay"></i>
                            </div>
                        </div>
                        <div class="feature-content">
                            <h4>专业级文档</h4>
                            <p>高质量的技术文档和代码示例，满足企业级开发需求</p>
                            <div class="feature-highlights">
                                <span class="highlight-item">
                                    <i class="fas fa-code"></i>
                                    代码示例
                                </span>
                                <span class="highlight-item">
                                    <i class="fas fa-file-alt"></i>
                                    详细文档
                                </span>
                                <span class="highlight-item">
                                    <i class="fas fa-shield-alt"></i>
                                    企业级
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 使用场景 -->
            <div class="docs-scenarios-section">
                <h3 class="section-title">
                    <i class="fas fa-users"></i>
                    适用场景
                </h3>
                
                <div class="scenarios-container">
                    <div class="scenario-item">
                        <div class="scenario-icon">
                            <i class="fas fa-user-graduate"></i>
                        </div>
                        <div class="scenario-content">
                            <h4>新手学习</h4>
                            <p>通过交互式演示快速了解VEnvFrame的功能和使用方法</p>
                        </div>
                    </div>
                    
                    <div class="scenario-item">
                        <div class="scenario-icon">
                            <i class="fas fa-users-cog"></i>
                        </div>
                        <div class="scenario-content">
                            <h4>团队培训</h4>
                            <p>为开发团队提供标准化的培训材料和操作指南</p>
                        </div>
                    </div>
                    
                    <div class="scenario-item">
                        <div class="scenario-icon">
                            <i class="fas fa-presentation"></i>
                        </div>
                        <div class="scenario-content">
                            <h4>项目演示</h4>
                            <p>向客户或管理层展示项目功能和技术优势</p>
                        </div>
                    </div>
                    
                    <div class="scenario-item">
                        <div class="scenario-icon">
                            <i class="fas fa-book"></i>
                        </div>
                        <div class="scenario-content">
                            <h4>技术文档</h4>
                            <p>作为项目的官方技术文档和参考手册</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 统计信息 -->
            <div class="docs-stats-section">
                <h3 class="section-title">
                    <i class="fas fa-chart-line"></i>
                    文案统计
                </h3>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-file-alt"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">12+</div>
                            <div class="stat-label">演示页面</div>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-folder"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">4</div>
                            <div class="stat-label">主要目录</div>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">5000+</div>
                            <div class="stat-label">代码行数</div>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-palette"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">3</div>
                            <div class="stat-label">样式主题</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 技术亮点总结页面内容
function createTechHighlightsContent() {
    return `
        <div class="content-card">
            <h3>VEnvFrame 技术亮点总结</h3>
            <div class="highlight-grid">
                <div class="highlight-card">
                    <div class="highlight-icon ai-gradient">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h4>专业精准的系统提示词</h4>
                    <p>通过标准化的系统提示词模板，确保不同AI能够生成一致性的系统框架，大幅简化项目初始化流程</p>
                    <div class="tech-tags">
                        <span class="tech-tag">TensorFlow</span>
                        <span class="tech-tag">Scikit-learn</span>
                        <span class="tech-tag">NLP</span>
                    </div>
                </div>
                
                <div class="highlight-card">
                    <div class="highlight-icon db-gradient">
                        <i class="fas fa-database"></i>
                    </div>
                    <h4>多数据库支持</h4>
                    <p>统一管理SQLite、MySQL、Redis等多种数据库，提供一致的API接口</p>
                    <div class="tech-tags">
                        <span class="tech-tag">SQLAlchemy</span>
                        <span class="tech-tag">Redis-py</span>
                        <span class="tech-tag">PyMySQL</span>
                    </div>
                </div>
                
                <div class="highlight-card">
                    <div class="highlight-icon monitor-gradient">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h4>实时监控系统</h4>
                    <p>基于Flask的Web监控界面，实时显示系统状态和性能指标</p>
                    <div class="tech-tags">
                        <span class="tech-tag">Flask</span>
                        <span class="tech-tag">WebSocket</span>
                        <span class="tech-tag">Chart.js</span>
                    </div>
                </div>
                
                <div class="highlight-card">
                    <div class="highlight-icon tools-gradient">
                        <i class="fas fa-tools"></i>
                    </div>
                    <h4>自动化工具集</h4>
                    <p>丰富的自动化工具，包括路径修复、环境迁移、依赖管理等</p>
                    <div class="tech-tags">
                        <span class="tech-tag">PowerShell</span>
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">Batch</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="content-grid">
            <div class="content-card">
                <h4>核心技术栈</h4>
                <div class="tech-stack">
                    <div class="stack-category">
                        <h5>后端框架</h5>
                        <ul>
                            <li>Flask 3.1.1 - Web应用框架</li>
                            <li>FastAPI - 高性能API框架</li>
                            <li>SQLAlchemy - ORM框架</li>
                        </ul>
                    </div>
                    <div class="stack-category">
                        <h5>数据存储</h5>
                        <ul>
                            <li>SQLite - 轻量级数据库</li>
                            <li>MySQL - 关系型数据库</li>
                            <li>Redis - 内存缓存</li>
                        </ul>
                    </div>
                    <div class="stack-category">
                        <h5>AI/ML</h5>
                        <ul>
                            <li>TensorFlow - 机器学习</li>
                            <li>Scikit-learn - 数据挖掘</li>
                            <li>NumPy - 数值计算</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-card">
                <h4>性能指标</h4>
                <div class="metrics-grid">
                    <div class="metric-item">
                        <div class="metric-value">5000+</div>
                        <div class="metric-label">代码行数</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">50+</div>
                        <div class="metric-label">预装包</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">99.9%</div>
                        <div class="metric-label">系统可用性</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">&lt;100ms</div>
                        <div class="metric-label">响应时间</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 最终页面内容
function createFinalPageContent() {
    return `
        <div class="content-card final-page">
            <div class="final-header">
                <div class="logo-section">
                    <i class="fas fa-cube logo-icon"></i>
                    <h2>VEnvFrame</h2>
                    <p class="tagline">AI驱动的下一代开发环境框架</p>
                </div>
            </div>
            
            <div class="future-vision">
                <h3>未来展望</h3>
                <div class="vision-grid">
                    <div class="vision-item">
                        <i class="fas fa-rocket"></i>
                        <h4>持续创新</h4>
                        <p>不断集成最新的AI技术和开发工具，保持技术领先性</p>
                    </div>
                    <div class="vision-item">
                        <i class="fas fa-users"></i>
                        <h4>社区驱动</h4>
                        <p>建设活跃的开源社区，与全球开发者共同推进项目发展</p>
                    </div>
                    <div class="vision-item">
                        <i class="fas fa-globe"></i>
                        <h4>生态扩展</h4>
                        <p>构建完整的开发生态系统，支持更多编程语言和框架</p>
                    </div>
                    <div class="vision-item">
                        <i class="fas fa-shield-alt"></i>
                        <div>
                            <h4>企业级安全</h4>
                            <p>加强安全机制，满足企业级应用的安全要求</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="contact-section">
                <h3>联系我们</h3>
                <div class="contact-grid">
                    <div class="contact-item">
                        <i class="fab fa-github"></i>
                        <div>
                            <h4>GitHub</h4>
                            <p>github.com/VEnvFrame/VEnvFrame</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h4>邮箱</h4>
                            <p>contact@venvframe.org</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-comments"></i>
                        <div>
                            <h4>社区</h4>
                            <p>加入我们的开发者社区</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-book"></i>
                        <div>
                            <h4>文档</h4>
                            <p>docs.venvframe.org</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="thanks-section">
                <h3>特别感谢</h3>
                <p>感谢所有为VEnvFrame项目做出贡献的开发者、测试者和用户。正是因为有了大家的支持和参与，VEnvFrame才能不断发展壮大。</p>
                <p>让我们一起构建更好的开发环境，让编程变得更加高效和愉快！</p>
                
                <div class="final-cta">
                    <a href="https://github.com/VEnvFrame/VEnvFrame" class="cta-button">
                        <i class="fab fa-github"></i>
                        立即开始使用
                    </a>
                    <a href="#" class="cta-button secondary">
                        <i class="fas fa-star"></i>
                        给我们点个Star
                    </a>
                </div>
            </div>
        </div>
    `;
}

function createDemoPage(pageNum) {
    const topics = {
        31: "环境搭建演示", 32: "数据库操作", 33: "监控界面", 34: "工具使用", 35: "问题排查"
    };
    return {
        title: topics[pageNum],
        subtitle: `实战演示 - ${topics[pageNum]}详解`,
        content: createGenericContent(topics[pageNum], "实战演示")
    };
}

function createCodeAnalysisPage(pageNum) {
    const topics = {
        36: "核心算法", 37: "设计模式", 38: "性能优化", 39: "安全机制", 40: "扩展接口"
    };
    return {
        title: topics[pageNum],
        subtitle: `代码深度解析 - ${topics[pageNum]}详解`,
        content: createGenericContent(topics[pageNum], "代码深度解析")
    };
}

function createAdvancedPage(pageNum) {
    const topics = {
        41: "插件系统", 42: "配置管理", 43: "日志系统", 44: "测试框架", 45: "部署方案"
    };
    return {
        title: topics[pageNum],
        subtitle: `高级功能 - ${topics[pageNum]}详解`,
        content: createGenericContent(topics[pageNum], "高级功能")
    };
}

function createSummaryPage(pageNum) {
    const topics = {
        46: "技术亮点", 47: "应用场景", 48: "未来规划", 49: "开源贡献", 50: "致谢与联系"
    };
    return {
        title: topics[pageNum],
        subtitle: `项目总结 - ${topics[pageNum]}详解`,
        content: createGenericContent(topics[pageNum], "项目总结")
    };
}

// 虚拟环境构建指南内容
function createVirtualEnvGuideContent() {
    return `
        <div class="content-card">
            <h3>🐍 Python项目虚拟环境构建指南</h3>
            <p>VEnvFrame提供了完整的虚拟环境构建和管理解决方案，确保项目在不同环境中的一致性和可移植性。</p>
            
            <div class="content-grid">
                <div class="content-card">
                    <h4>项目基本信息</h4>
                    <div class="info-list">
                        <div class="info-item">
                            <strong>项目名称：</strong>VEnvFrame
                        </div>
                        <div class="info-item">
                            <strong>Python版本：</strong>3.12.8
                        </div>
                        <div class="info-item">
                            <strong>虚拟环境名称：</strong>VEnvFrame-Env
                        </div>
                        <div class="info-item">
                            <strong>环境位置：</strong>项目根目录下
                        </div>
                        <div class="info-item">
                            <strong>激活脚本：</strong>activate_env.bat
                        </div>
                    </div>
                </div>
                
                <div class="content-card">
                    <h4>环境构建步骤</h4>
                    <div class="step-list">
                        <div class="step-item">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h5>创建虚拟环境</h5>
                                <div class="code-block">
                                    <pre><code>python -m venv VEnvFrame-Env</code></pre>
                                </div>
                            </div>
                        </div>
                        
                        <div class="step-item">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h5>激活虚拟环境</h5>
                                <div class="code-block">
                                    <pre><code># Windows
VEnvFrame-Env\\Scripts\\activate.bat

# Linux/Mac
source VEnvFrame-Env/bin/activate</code></pre>
                                </div>
                            </div>
                        </div>
                        
                        <div class="step-item">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h5>安装依赖包</h5>
                                <div class="code-block">
                                    <pre><code>pip install -r requirements.txt</code></pre>
                                </div>
                            </div>
                        </div>
                        
                        <div class="step-item">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h5>验证环境</h5>
                                <div class="code-block">
                                    <pre><code>python --version
pip list</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-card">
                <h4>核心依赖包列表</h4>
                <div class="package-grid">
                    <div class="package-category">
                        <h5>Web框架</h5>
                        <ul>
                            <li>Flask==3.1.1</li>
                            <li>FastAPI==0.104.1</li>
                            <li>Flask-CORS==6.0.1</li>
                            <li>Flask-Login==0.6.3</li>
                        </ul>
                    </div>
                    <div class="package-category">
                        <h5>数据库</h5>
                        <ul>
                            <li>SQLAlchemy==2.0.36</li>
                            <li>Flask-SQLAlchemy==3.1.1</li>
                            <li>redis==4.6.0</li>
                            <li>mysqlclient==2.2.7</li>
                        </ul>
                    </div>
                    <div class="package-category">
                        <h5>数据科学</h5>
                        <ul>
                            <li>numpy==2.3.2</li>
                            <li>pandas==2.3.1</li>
                            <li>scikit-learn==1.5.2</li>
                            <li>matplotlib==3.9.2</li>
                        </ul>
                    </div>
                    <div class="package-category">
                        <h5>工具库</h5>
                        <ul>
                            <li>requests==2.32.3</li>
                            <li>click==8.2.1</li>
                            <li>python-dotenv==1.0.1</li>
                            <li>loguru==0.7.2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 虚拟环境移植指南内容
function createVirtualEnvMigrationContent() {
    return `
        <div class="content-card">
            <h3>🚀 虚拟环境移植指南</h3>
            <p>VEnvFrame支持跨平台环境迁移，确保开发环境在不同系统间的一致性和可移植性。</p>
            
            <div class="content-grid">
                <div class="content-card">
                    <h4>移植准备工作</h4>
                    <div class="prep-list">
                        <div class="prep-item">
                            <i class="fas fa-check-circle"></i>
                            <div>
                                <h5>导出依赖列表</h5>
                                <div class="code-block">
                                    <pre><code>pip freeze > requirements.txt</code></pre>
                                </div>
                            </div>
                        </div>
                        
                        <div class="prep-item">
                            <i class="fas fa-check-circle"></i>
                            <div>
                                <h5>备份配置文件</h5>
                                <p>备份数据库配置、环境变量等关键配置文件</p>
                            </div>
                        </div>
                        
                        <div class="prep-item">
                            <i class="fas fa-check-circle"></i>
                            <div>
                                <h5>记录Python版本</h5>
                                <div class="code-block">
                                    <pre><code>python --version > python_version.txt</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="content-card">
                    <h4>跨平台移植步骤</h4>
                    <div class="migration-steps">
                        <div class="platform-section">
                            <h5>Windows → Linux/Mac</h5>
                            <div class="step-list">
                                <div class="step-item">
                                    <span class="step-number">1</span>
                                    <span>在目标系统安装相同版本Python</span>
                                </div>
                                <div class="step-item">
                                    <span class="step-number">2</span>
                                    <span>创建新的虚拟环境</span>
                                </div>
                                <div class="step-item">
                                    <span class="step-number">3</span>
                                    <span>使用requirements.txt安装依赖</span>
                                </div>
                                <div class="step-item">
                                    <span class="step-number">4</span>
                                    <span>调整路径分隔符和脚本权限</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="platform-section">
                            <h5>Linux/Mac → Windows</h5>
                            <div class="step-list">
                                <div class="step-item">
                                    <span class="step-number">1</span>
                                    <span>安装Windows版Python</span>
                                </div>
                                <div class="step-item">
                                    <span class="step-number">2</span>
                                    <span>处理路径格式差异</span>
                                </div>
                                <div class="step-item">
                                    <span class="step-number">3</span>
                                    <span>转换shell脚本为批处理文件</span>
                                </div>
                                <div class="step-item">
                                    <span class="step-number">4</span>
                                    <span>测试环境兼容性</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-card">
                <h4>自动化移植工具</h4>
                <div class="tool-grid">
                    <div class="tool-item">
                        <h5>fix_venv_path.py</h5>
                        <p>Python版本的路径修复工具，支持跨平台路径转换</p>
                        <div class="code-block">
                            <pre><code>python Tools/fix_venv_path.py --target-platform linux</code></pre>
                        </div>
                    </div>
                    
                    <div class="tool-item">
                        <h5>fix_venv_path.ps1</h5>
                        <p>PowerShell版本，专门用于Windows环境的路径修复</p>
                        <div class="code-block">
                            <pre><code>PowerShell -ExecutionPolicy Bypass -File Tools/fix_venv_path.ps1</code></pre>
                        </div>
                    </div>
                    
                    <div class="tool-item">
                        <h5>activate_env.bat</h5>
                        <p>Windows环境激活脚本，自动处理路径和环境变量</p>
                        <div class="code-block">
                            <pre><code>activate_env.bat</code></pre>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-card">
                <h4>常见问题解决</h4>
                <div class="problem-solutions">
                    <div class="problem-item">
                        <h5>路径分隔符问题</h5>
                        <p><strong>问题：</strong>Windows使用反斜杠(\)，Linux/Mac使用正斜杠(/)</p>
                        <p><strong>解决：</strong>使用os.path.join()或pathlib.Path()处理路径</p>
                    </div>
                    
                    <div class="problem-item">
                        <h5>权限问题</h5>
                        <p><strong>问题：</strong>Linux/Mac需要执行权限</p>
                        <p><strong>解决：</strong>chmod +x script_name.sh</p>
                    </div>
                    
                    <div class="problem-item">
                        <h5>编码问题</h5>
                        <p><strong>问题：</strong>不同系统默认编码不同</p>
                        <p><strong>解决：</strong>统一使用UTF-8编码</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 数据库系统使用指南内容
function createDatabaseGuideContent() {
    return `
        <div class="content-card">
            <h3>🗄️ 数据库系统使用指南</h3>
            <p>VEnvFrame集成了多种数据库支持，提供统一的管理接口和无缝切换功能。</p>
            
            <div class="content-grid">
                <div class="content-card">
                    <h4>支持的数据库类型</h4>
                    <div class="db-types">
                        <div class="db-type-item">
                            <div class="db-icon sqlite">
                                <i class="fas fa-database"></i>
                            </div>
                            <div class="db-info">
                                <h5>SQLite</h5>
                                <p>轻量级关系数据库，适合开发和小型应用</p>
                                <div class="db-features">
                                    <span class="feature-tag">无服务器</span>
                                    <span class="feature-tag">零配置</span>
                                    <span class="feature-tag">跨平台</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="db-type-item">
                            <div class="db-icon mysql">
                                <i class="fas fa-server"></i>
                            </div>
                            <div class="db-info">
                                <h5>MySQL</h5>
                                <p>企业级关系数据库，适合大型应用和高并发场景</p>
                                <div class="db-features">
                                    <span class="feature-tag">高性能</span>
                                    <span class="feature-tag">事务支持</span>
                                    <span class="feature-tag">集群支持</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="db-type-item">
                            <div class="db-icon redis">
                                <i class="fas fa-memory"></i>
                            </div>
                            <div class="db-info">
                                <h5>Redis</h5>
                                <p>内存数据库，适合缓存和实时数据处理</p>
                                <div class="db-features">
                                    <span class="feature-tag">内存存储</span>
                                    <span class="feature-tag">高速读写</span>
                                    <span class="feature-tag">数据结构</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="content-card">
                    <h4>数据库配置</h4>
                    <div class="config-example">
                        <h5>database_config.json 配置示例</h5>
                        <div class="code-block">
                            <pre><code class="language-json">{
  "current_database": "sqlite_default",
  "databases": {
    "sqlite_default": {
      "type": "sqlite",
      "config": {
        "database": "DB/sqlite/app.db",
        "check_same_thread": false
      }
    },
    "mysql_production": {
      "type": "mysql",
      "config": {
        "host": "localhost",
        "port": 3306,
        "user": "root",
        "password": "password",
        "database": "venvframe",
        "charset": "utf8mb4"
      }
    },
    "redis_cache": {
      "type": "redis",
      "config": {
        "host": "localhost",
        "port": 6379,
        "db": 0,
        "decode_responses": true
      }
    }
  }
}</code></pre>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-card">
                <h4>数据库管理器使用</h4>
                <div class="usage-examples">
                    <div class="example-section">
                        <h5>基本使用</h5>
                        <div class="code-block">
                            <pre><code class="language-python">from DB.database_manager import DatabaseManager

# 初始化数据库管理器
db_manager = DatabaseManager()

# 获取当前数据库连接
conn = db_manager.get_connection()

# 执行查询
result = db_manager.execute_query("SELECT * FROM users")

# 切换数据库
db_manager.switch_database("mysql_production")</code></pre>
                        </div>
                    </div>
                    
                    <div class="example-section">
                        <h5>数据库切换</h5>
                        <div class="code-block">
                            <pre><code class="language-python"># 使用命令行工具切换
python DB/db_switch.py --database mysql_production

# 或者在代码中切换
from DB.db_switch import switch_database
switch_database("redis_cache")</code></pre>
                        </div>
                    </div>
                    
                    <div class="example-section">
                        <h5>连接测试</h5>
                        <div class="code-block">
                            <pre><code class="language-python"># 测试所有数据库连接
python DB/test_database_system.py

# 测试特定数据库
db_manager.test_connection("mysql_production")</code></pre>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-card">
                <h4>高级功能</h4>
                <div class="advanced-features">
                    <div class="feature-item">
                        <h5>连接池管理</h5>
                        <p>自动管理数据库连接池，提高性能和资源利用率</p>
                        <ul>
                            <li>自动连接回收</li>
                            <li>连接健康检查</li>
                            <li>最大连接数限制</li>
                        </ul>
                    </div>
                    
                    <div class="feature-item">
                        <h5>事务支持</h5>
                        <p>完整的事务管理功能，确保数据一致性</p>
                        <ul>
                            <li>自动提交/回滚</li>
                            <li>嵌套事务支持</li>
                            <li>死锁检测</li>
                        </ul>
                    </div>
                    
                    <div class="feature-item">
                        <h5>查询优化</h5>
                        <p>智能查询优化和缓存机制</p>
                        <ul>
                            <li>SQL查询缓存</li>
                            <li>慢查询监控</li>
                            <li>索引建议</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 通用内容生成函数
function createGenericContent(title, category) {
    // 根据标题和类别选择真实代码
    let realCode = '';
    
    if (title === "数据库管理器" || category === "数据库系统") {
        realCode = realCodeContent.databaseManager;
    } else if (title === "监控架构" || title === "Flask应用" || category === "监控系统") {
        realCode = realCodeContent.monitorApp;
    } else if (title === "路径修复工具" || title === "环境迁移" || category === "虚拟环境管理") {
        realCode = realCodeContent.fixVenvPath;
    } else if (title === "系统提示词模板" || category === "AI智能系统") {
        realCode = realCodeContent.systemPrompt;
    } else {
        // 默认代码模板
        realCode = `# ${title}实现示例
class ${(title || '').replace(/\s+/g, '')}Manager:
    def __init__(self):
        self.config = self.load_config()
        self.logger = self.setup_logger()
    
    def initialize(self):
        """初始化${title}"""
        self.logger.info("正在初始化${title}...")
        return self.setup_components()
    
    def execute(self, params):
        """执行${title}操作"""
        try:
            result = self.process(params)
            self.logger.info(f"${title}执行成功: {result}")
            return result
        except Exception as e:
            self.logger.error(f"${title}执行失败: {e}")
            raise
    
    def cleanup(self):
        """清理资源"""
        self.logger.info("正在清理${title}资源...")
        return True`;
    }
    
    return `
        <div class="content-card">
            <h3>${title}</h3>
            <p>这是${category}中的${title}功能详解。VEnvFrame在这个方面提供了完整的解决方案，具有以下特点：</p>
            
            <div class="feature-details">
                <div class="detail-item">
                    <i class="fas fa-check-circle"></i>
                    <span>功能特性1：完整的${title}实现</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-check-circle"></i>
                    <span>功能特性2：高性能和可扩展性</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-check-circle"></i>
                    <span>功能特性3：易于使用和维护</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-check-circle"></i>
                    <span>功能特性4：企业级安全保障</span>
                </div>
            </div>
            
            <div class="code-block">
                <div class="code-header">
                    <span>${title}真实代码</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
                <pre><code class="language-python">${realCode}</code></pre>
            </div>
        </div>
        
        <div class="content-grid">
            <div class="content-card">
                <h4>核心优势</h4>
                <ul>
                    <li>高性能：优化的算法和数据结构</li>
                    <li>可扩展：模块化设计，易于扩展</li>
                    <li>安全性：内置安全机制和数据保护</li>
                    <li>易用性：简洁的API和完善的文档</li>
                </ul>
            </div>
            
            <div class="content-card">
                <h4>应用场景</h4>
                <ul>
                    <li>企业级应用开发</li>
                    <li>数据科学和机器学习项目</li>
                    <li>Web应用和API服务</li>
                    <li>自动化测试和CI/CD流程</li>
                </ul>
            </div>
        </div>
    `;
}
