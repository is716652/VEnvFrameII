// VEnvFrame 增强版演示系统 JavaScript - 第2部分

// 页面导航
function navigatePage(direction) {
    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= totalPages) {
        loadPage(newPage);
    }
}

// 加载指定页面
function loadPage(pageNum) {
    if (pageNum < 1 || pageNum > totalPages) return;
    
    // 停止之前的自动滚动
    stopAutoScroll();
    
    // 隐藏当前页面
    const currentSlide = document.querySelector('.slide.active');
    if (currentSlide) {
        currentSlide.classList.remove('active');
    }
    
    // 显示新页面
    const newSlide = document.getElementById(`slide-${pageNum}`);
    if (newSlide) {
        newSlide.classList.add('active');
        
        // 滚动到顶部
        window.scrollTo(0, 0);
        
        // 如果处于自动播放模式，则启动自动滚动
        if (isAutoPlaying) {
            startAutoScroll(newSlide);
        }
        
        // 显示该页面的提示信息
        showPageTooltips(pageNum);
    }
    
    // 更新当前页面号
    currentPage = pageNum;
    
    // 更新UI
    updatePageCounter();
    updateProgressBar();
    updateTOCActive();
    updateNavigationButtons();
}

// 显示页面提示信息
function showPageTooltips(pageNum) {
    // 先移除所有现有提示
    removeAllTooltips();
    
    // 找到当前页面的提示
    const pageTooltips = tooltips.filter(tip => tip.page === pageNum);
    
    // 延迟显示提示，让页面先加载完成
    setTimeout(() => {
        pageTooltips.forEach(tip => {
            const element = document.querySelector(`.slide.active ${tip.selector}`);
            if (element) {
                createTooltip(element, tip.text);
            }
        });
    }, 1000);
}

// 创建提示气泡
function createTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = `
        <div class="tooltip-content">
            <i class="fas fa-lightbulb"></i>
            <span>${text}</span>
            <button class="tooltip-close" onclick="this.parentNode.parentNode.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // 计算位置
    const rect = element.getBoundingClientRect();
    tooltip.style.position = 'absolute';
    tooltip.style.top = `${rect.top + window.scrollY + 10}px`;
    tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.style.zIndex = '1000';
    
    // 添加到页面
    document.body.appendChild(tooltip);
    
    // 添加动画效果
    setTimeout(() => {
        tooltip.classList.add('show');
    }, 100);
    
    // 自动关闭
    setTimeout(() => {
        if (tooltip.parentNode) {
            tooltip.classList.remove('show');
            setTimeout(() => {
                if (tooltip.parentNode) {
                    tooltip.parentNode.removeChild(tooltip);
                }
            }, 500);
        }
    }, 8000);
}

// 移除所有提示
function removeAllTooltips() {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.parentNode.removeChild(tooltip);
    });
}

// 开始自动滚动
function startAutoScroll(slide) {
    // 检查页面高度，如果内容超出视口才需要滚动
    const slideContent = slide.querySelector('.slide-content');
    if (!slideContent) return;
    
    const slideHeight = slideContent.scrollHeight;
    const viewportHeight = window.innerHeight - 150; // 减去导航栏和页眉的高度
    
    if (slideHeight > viewportHeight) {
        // 计算滚动时间，根据内容长度调整
        const scrollTime = Math.min(Math.max(slideHeight / 3, 8000), 20000); // 最短8秒，最长20秒
        const scrollStep = 1; // 每次滚动1像素
        const scrollInterval = 20; // 每20毫秒滚动一次
        
        let scrollPosition = 0;
        const maxScroll = slideHeight - viewportHeight + 100; // 额外滚动一点以确保看到底部
        
        autoScrollInterval = setInterval(() => {
            scrollPosition += scrollStep;
            window.scrollTo(0, scrollPosition);
            
            if (scrollPosition >= maxScroll) {
                // 滚动到底部后，暂停一段时间再回到顶部
                clearInterval(autoScrollInterval);
                
                setTimeout(() => {
                    // 平滑滚动回顶部
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    
                    // 如果是自动播放模式，等待一段时间后继续下一页
                    if (isAutoPlaying) {
                        setTimeout(() => {
                            if (currentPage < totalPages) {
                                navigatePage(1);
                            } else {
                                stopAutoPlay();
                            }
                        }, 2000);
                    }
                }, 3000);
            }
        }, scrollInterval);
    } else if (isAutoPlaying) {
        // 如果页面不需要滚动，但处于自动播放模式，设置较长的停留时间
        setTimeout(() => {
            if (isAutoPlaying && currentPage < totalPages) {
                navigatePage(1);
            } else if (isAutoPlaying) {
                stopAutoPlay();
            }
        }, 10000); // 10秒后切换到下一页
    }
}

// 停止自动滚动
function stopAutoScroll() {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
    }
}

// 更新页面计数器
function updatePageCounter() {
    const currentPageSpan = document.getElementById('currentPage');
    if (currentPageSpan) {
        currentPageSpan.textContent = currentPage;
    }
}

// 更新进度条
function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        const progress = (currentPage / totalPages) * 100;
        progressFill.style.width = `${progress}%`;
    }
}

// 更新目录激活状态
function updateTOCActive() {
    const tocLinks = document.querySelectorAll('[data-page]');
    tocLinks.forEach(link => {
        const pageNum = parseInt(link.getAttribute('data-page'));
        if (pageNum === currentPage) {
            link.classList.add('active');
            
            // 确保当前活动项在侧边栏可见
            const sidebar = document.querySelector('.sidebar-content');
            if (sidebar) {
                const linkRect = link.getBoundingClientRect();
                const sidebarRect = sidebar.getBoundingClientRect();
                
                if (linkRect.top < sidebarRect.top || linkRect.bottom > sidebarRect.bottom) {
                    link.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        } else {
            link.classList.remove('active');
        }
    });
}

// 更新导航按钮状态
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
    }
}

// 切换侧边栏
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (sidebar) sidebar.classList.toggle('collapsed');
    if (mainContent) mainContent.classList.toggle('expanded');
}

// 切换自动播放
function toggleAutoPlay() {
    if (isAutoPlaying) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
}

// 开始自动播放
function startAutoPlay() {
    isAutoPlaying = true;
    const autoPlayBtn = document.getElementById('autoPlayBtn');
    
    if (autoPlayBtn) {
        autoPlayBtn.innerHTML = '<i class="fas fa-pause"></i><span>停止播放</span>';
        autoPlayBtn.classList.add('playing');
    }
    
    // 先触发当前页面的自动滚动
    const currentSlide = document.getElementById(`slide-${currentPage}`);
    if (currentSlide) {
        startAutoScroll(currentSlide);
    }
    
    // 不再使用setInterval，而是在每页滚动完成后自动切换到下一页
    // 这部分逻辑已经在startAutoScroll函数中处理
}

// 停止自动播放
function stopAutoPlay() {
    isAutoPlaying = false;
    const autoPlayBtn = document.getElementById('autoPlayBtn');
    
    if (autoPlayBtn) {
        autoPlayBtn.innerHTML = '<i class="fas fa-play"></i><span>自动播放</span>';
        autoPlayBtn.classList.remove('playing');
    }
    
    // 停止自动滚动
    stopAutoScroll();
}

// 复制代码功能
function copyCode(button) {
    const codeBlock = button.closest('.code-block').querySelector('code');
    if (!codeBlock) return;
    
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.style.color = '#10b981';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.style.color = '#10b981';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.color = '';
        }, 2000);
    });
}

// 全局函数导出
window.copyCode = copyCode;
window.navigatePage = navigatePage;
window.loadPage = loadPage;