// VEnvFrame 增强版演示系统 JavaScript - 第1部分
let currentPage = 1;
let totalPages = 32;
let isAutoPlaying = false;
let autoPlayInterval;
let autoScrollInterval;
let tooltips = [];

// 页面内容数据
const pageContents = {};

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    generateAllPages();
    initializeSlideShow();
    initializeNavigation();
    initializeAutoPlay();
    initializeTooltips();
    
    // 加载第一页
    loadPage(1);
});

// 生成所有页面内容
function generateAllPages() {
    // 这里保留原有的页面内容生成代码
    // 项目概览 (1-5)
    pageContents[1] = {
        title: "VEnvFrame：AI驱动的虚拟环境框架",
        subtitle: "革命性的Python开发环境管理解决方案",
        content: createPage1Content()
    };
    
    pageContents[2] = {
        title: "核心特性详解",
        subtitle: "深入了解VEnvFrame的强大功能",
        content: createPage2Content()
    };
    
    pageContents[3] = {
        title: "技术架构设计",
        subtitle: "模块化、可扩展的系统架构",
        content: createPage3Content()
    };
    
    pageContents[4] = {
        title: "项目结构详解",
        subtitle: "清晰的目录组织和模块划分",
        content: createPage4Content()
    };
    
    pageContents[5] = {
        title: "安装与配置指南",
        subtitle: "快速开始使用VEnvFrame",
        content: createPage5Content()
    };
    
    // 专业精准的系统提示词 (6-8)
    for (let i = 6; i <= 8; i++) {
        pageContents[i] = createSystemPromptPage(i);
    }
    
    // 虚拟环境管理 (9-13)
    for (let i = 9; i <= 13; i++) {
        pageContents[i] = createVirtualEnvPage(i);
    }
    
    // 数据库系统 (14-18)
    for (let i = 14; i <= 18; i++) {
        pageContents[i] = createDatabasePage(i);
    }
    
    // 监控系统 (19-23)
    for (let i = 19; i <= 23; i++) {
        pageContents[i] = createMonitorPage(i);
    }
    
    // 开发工具集 (24-28)
    for (let i = 24; i <= 28; i++) {
        pageContents[i] = createToolsPage(i);
    }
    
    // 项目总结 (29-32)
    pageContents[29] = {
        title: "技术亮点总结",
        subtitle: "VEnvFrame的核心技术优势",
        content: createTechHighlightsContent()
    };
    
    pageContents[30] = {
        title: "未来展望与致谢",
        subtitle: "持续发展的开源项目",
        content: createFinalPageContent()
    };
    
    pageContents[31] = {
        title: "实战演示",
        subtitle: "VEnvFrame完整使用流程演示",
        content: createGenericContent("实战演示", "演示系统")
    };
    
    pageContents[32] = {
        title: "最终总结",
        subtitle: "感谢使用VEnvFrame",
        content: createFinalPageContent()
    };
}

// 初始化幻灯片系统
function initializeSlideShow() {
    const slideContainer = document.getElementById('slideContainer');
    
    // 创建所有页面的DOM元素
    for (let i = 1; i <= totalPages; i++) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.id = `slide-${i}`;
        slide.innerHTML = `
            <div class="slide-header">
                <h1 class="slide-title">${pageContents[i]?.title || `第${i}页`}</h1>
                <p class="slide-subtitle">${pageContents[i]?.subtitle || `第${i}页内容`}</p>
            </div>
            <div class="slide-content">
                ${pageContents[i]?.content || `<div class="content-card"><p>这是第${i}页的内容</p></div>`}
            </div>
            <div class="decoration-circle top-right"></div>
            <div class="decoration-circle bottom-left"></div>
        `;
        slideContainer.appendChild(slide);
    }
}

// 初始化导航
function initializeNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const tocLinks = document.querySelectorAll('[data-page]');
    
    if (prevBtn) prevBtn.addEventListener('click', () => navigatePage(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigatePage(1));
    if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebar);
    
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageNum = parseInt(e.target.getAttribute('data-page'));
            if (pageNum) loadPage(pageNum);
        });
    });
    
    // 键盘导航
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') navigatePage(-1);
        if (e.key === 'ArrowRight') navigatePage(1);
        if (e.key === 'Escape') stopAutoPlay();
    });
}

// 初始化自动播放
function initializeAutoPlay() {
    const autoPlayBtn = document.getElementById('autoPlayBtn');
    if (autoPlayBtn) {
        autoPlayBtn.addEventListener('click', toggleAutoPlay);
    }
}

// 初始化冒泡提示
function initializeTooltips() {
    // 定义关键点提示信息
    tooltips = [
        { page: 1, selector: '.feature-highlights', text: '这是VEnvFrame的核心特性，包括专业精准的系统提示词、多数据库支持和实时监控' },
        { page: 2, selector: '.feature-card', text: '专业精准的系统提示词是VEnvFrame的核心创新，能够让不同AI生成一致的系统框架' },
        { page: 3, selector: '.arch-layer.presentation-layer', text: '表现层包含所有用户界面组件，提供直观的操作体验' },
        { page: 3, selector: '.arch-layer.business-layer', text: '业务层是系统的核心，包含所有业务逻辑和处理流程' },
        { page: 3, selector: '.arch-layer.data-layer', text: '数据层负责所有数据存储和访问，支持多种数据库类型' },
        { page: 4, selector: '.code-block', text: '这是VEnvFrame的完整目录结构，展示了模块化的设计理念' },
        { page: 5, selector: '.install-steps', text: '只需5个简单步骤即可完成VEnvFrame的安装和配置' },
        { page: 16, selector: '.code-block', text: '数据库管理器支持SQLite、Redis和MySQL等多种数据库，提供统一的接口' },
        { page: 21, selector: '.code-block', text: '监控系统基于Flask开发，提供实时的系统状态监控和可视化界面' },
        { page: 26, selector: '.code-block', text: '路径修复工具能够自动检测和修复虚拟环境中的Python路径配置' }
    ];
}