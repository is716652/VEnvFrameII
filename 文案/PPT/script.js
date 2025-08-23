// 全局变量
let isAutoPlaying = false;
let autoPlayInterval;
let currentSection = 0;
const sections = ['home', 'features', 'architecture', 'demo', 'docs'];

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeDemoTabs();
    initializeAutoPlay();
    initializeScrollEffects();
    initializeToolFunctions();
    initializeAIChat();
    initializeAnimations();
});

// 导航功能
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            updateActiveNavLink(this);
        });
    });
    
    // 监听滚动事件更新导航状态
    window.addEventListener('scroll', updateNavOnScroll);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function updateNavOnScroll() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const navLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (navLink) {
                    updateActiveNavLink(navLink);
                }
            }
        }
    });
}

// 演示标签页功能
function initializeDemoTabs() {
    const demoTabs = document.querySelectorAll('.demo-tab');
    const demoPanels = document.querySelectorAll('.demo-panel');
    
    demoTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetDemo = this.getAttribute('data-demo');
            
            // 更新标签页状态
            demoTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 更新面板显示
            demoPanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === `demo-${targetDemo}`) {
                    panel.classList.add('active');
                }
            });
            
            // 启动相应的演示动画
            startDemoAnimation(targetDemo);
        });
    });
}

function startDemoAnimation(demoType) {
    switch(demoType) {
        case 'monitor':
            animateMetrics();
            break;
        case 'database':
            animateDatabaseConnection();
            break;
        case 'tools':
            // 工具演示已在initializeToolFunctions中处理
            break;
        case 'ai':
            // AI聊天已在initializeAIChat中处理
            break;
    }
}

// 监控指标动画
function animateMetrics() {
    const chartBars = document.querySelectorAll('.chart-bar');
    const metricValues = document.querySelectorAll('.metric-value');
    
    chartBars.forEach(bar => {
        const height = Math.random() * 80 + 20;
        bar.style.height = height + '%';
    });
    
    // 模拟数据更新
    setTimeout(() => {
        metricValues[0].textContent = Math.floor(Math.random() * 50 + 30) + '%';
        metricValues[1].textContent = (Math.random() * 2 + 1).toFixed(1) + 'GB';
        metricValues[2].textContent = Math.floor(Math.random() * 100 + 100);
    }, 500);
}

// 数据库连接动画
function animateDatabaseConnection() {
    const connectBtn = document.querySelector('.btn-connect');
    const statusValue = document.querySelector('.status-value.connected');
    
    if (connectBtn) {
        connectBtn.addEventListener('click', function() {
            this.innerHTML = '<span class="loading"></span> 连接中...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = '连接';
                this.disabled = false;
                if (statusValue) {
                    statusValue.textContent = '已连接';
                    statusValue.style.color = 'var(--success-color)';
                }
            }, 2000);
        });
    }
}

// 自动播放功能
function initializeAutoPlay() {
    const autoPlayBtn = document.getElementById('autoPlayBtn');
    
    if (autoPlayBtn) {
        autoPlayBtn.addEventListener('click', function() {
            if (isAutoPlaying) {
                stopAutoPlay();
            } else {
                startAutoPlay();
            }
        });
    }
}

function startAutoPlay() {
    isAutoPlaying = true;
    const autoPlayBtn = document.getElementById('autoPlayBtn');
    
    if (autoPlayBtn) {
        autoPlayBtn.innerHTML = '<i class="fas fa-pause"></i> 停止播放';
        autoPlayBtn.classList.add('playing');
    }
    
    currentSection = 0;
    autoPlayInterval = setInterval(() => {
        if (currentSection < sections.length) {
            scrollToSection(sections[currentSection]);
            currentSection++;
        } else {
            stopAutoPlay();
        }
    }, 3000);
}

function stopAutoPlay() {
    isAutoPlaying = false;
    const autoPlayBtn = document.getElementById('autoPlayBtn');
    
    if (autoPlayBtn) {
        autoPlayBtn.innerHTML = '<i class="fas fa-play"></i> 自动播放';
        autoPlayBtn.classList.remove('playing');
    }
    
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
}

// 滚动效果
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    const animateElements = document.querySelectorAll('.feature-card, .arch-layer, .doc-card, .metric-card');
    animateElements.forEach(el => observer.observe(el));
}

// 工具功能
function initializeToolFunctions() {
    // 这个函数会被HTML中的onclick调用
    window.runTool = function(toolType) {
        const outputElement = document.getElementById(`${toolType}-output`);
        
        if (outputElement) {
            outputElement.classList.add('show');
            outputElement.innerHTML = '<div class="loading"></div> 正在运行...';
            
            setTimeout(() => {
                let output = '';
                switch(toolType) {
                    case 'fix-path':
                        output = `
检查虚拟环境路径...
✓ 发现路径问题: D:/old/path/VEnvFrame-Env
✓ 修复为新路径: D:/CodeBuddy_projects/VEnvFrame/VEnvFrame-Env
✓ 更新pyvenv.cfg配置文件
✓ 修复完成！虚拟环境现在可以正常使用
                        `;
                        break;
                    case 'manage-deps':
                        output = `
扫描项目依赖...
✓ Flask 3.1.1 - 最新版本
✓ SQLAlchemy 2.0+ - 最新版本
✓ Redis 4.5+ - 最新版本
⚠ NumPy 2.3.2 - 发现更新版本 2.3.3
正在更新 NumPy...
✓ 依赖管理完成！
                        `;
                        break;
                    case 'migrate-env':
                        output = `
开始环境迁移...
✓ 备份当前环境配置
✓ 创建新环境目录
✓ 复制虚拟环境文件
✓ 更新路径配置
✓ 验证环境完整性
✓ 迁移完成！新环境已就绪
                        `;
                        break;
                }
                outputElement.innerHTML = output;
            }, 2000);
        }
    };
}

// AI聊天功能
function initializeAIChat() {
    const aiInput = document.querySelector('.ai-input-field');
    const aiSendBtn = document.querySelector('.ai-send-btn');
    const aiChat = document.querySelector('.ai-chat');
    
    if (aiInput && aiSendBtn && aiChat) {
        function sendMessage() {
            const message = aiInput.value.trim();
            if (message) {
                addMessage(message, 'user');
                aiInput.value = '';
                
                // 模拟AI回复
                setTimeout(() => {
                    const aiResponse = generateAIResponse(message);
                    addMessage(aiResponse, 'ai');
                }, 1000);
            }
        }
        
        aiSendBtn.addEventListener('click', sendMessage);
        aiInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

function addMessage(content, type) {
    const aiChat = document.querySelector('.ai-chat');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = type === 'ai' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = content;
    
    if (type === 'user') {
        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(avatar);
    } else {
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
    }
    
    aiChat.appendChild(messageDiv);
    aiChat.scrollTop = aiChat.scrollHeight;
}

function generateAIResponse(userMessage) {
    const responses = {
        '环境': '我可以帮您管理虚拟环境，包括创建、激活、修复路径等操作。',
        '数据库': 'VEnvFrame支持SQLite、MySQL、Redis等多种数据库，我可以帮您配置和切换。',
        '监控': '监控系统可以实时显示CPU、内存使用情况和数据库连接状态。',
        '工具': '我们提供了路径修复、依赖管理、环境迁移等实用工具。',
        '问题': '请描述您遇到的具体问题，我会为您提供解决方案。',
        '帮助': '我可以协助您使用VEnvFrame的各项功能，有什么需要帮助的吗？'
    };
    
    for (let key in responses) {
        if (userMessage.includes(key)) {
            return responses[key];
        }
    }
    
    return '感谢您的问题！我正在分析中，请稍等...';
}

// 初始化动画
function initializeAnimations() {
    // 终端打字效果
    const terminalLines = document.querySelectorAll('.terminal-line');
    terminalLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.5}s`;
    });
    
    // 数字计数动画
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseInt(finalValue);
        
        if (!isNaN(numericValue)) {
            animateNumber(stat, 0, numericValue, 2000);
        }
    });
    
    // 进度条动画
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width || '0%';
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current + (element.textContent.includes('%') ? '%' : '');
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// 响应式菜单（移动端）
function initializeMobileMenu() {
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    const navContainer = document.querySelector('.nav-container');
    if (navContainer && window.innerWidth <= 768) {
        navContainer.appendChild(mobileMenuBtn);
        
        mobileMenuBtn.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('mobile-active');
        });
    }
}

// 窗口大小改变时重新初始化响应式功能
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        initializeMobileMenu();
    }
});

// 平滑滚动polyfill（兼容性）
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
    document.head.appendChild(script);
}

// 性能优化：防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 应用防抖到滚动事件
const debouncedScrollHandler = debounce(updateNavOnScroll, 100);
window.removeEventListener('scroll', updateNavOnScroll);
window.addEventListener('scroll', debouncedScrollHandler);

// 预加载关键资源
function preloadResources() {
    const criticalImages = [
        // 如果有关键图片，在这里添加
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// 页面加载完成后预加载资源
window.addEventListener('load', preloadResources);

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
    // 可以在这里添加错误上报逻辑
});

// 导出全局函数供HTML使用
window.scrollToSection = scrollToSection;
window.runTool = window.runTool || function() {};