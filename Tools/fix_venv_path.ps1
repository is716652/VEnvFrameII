# PowerShell版本的虚拟环境路径修复脚本
# 设置控制台编码为UTF-8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "========================================" -ForegroundColor Green
Write-Host "虚拟环境路径自动修复工具 (PowerShell版)" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

try {
    # 脚本所在目录，确保相对路径在任何工作目录下都可用
    $scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

    # 检查Python是否可用
    $pythonVersion = python --version 2>$null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "错误: 未找到Python，请确保Python已安装并添加到PATH环境变量" -ForegroundColor Red
        Read-Host "按Enter键退出"
        exit 1
    }
    
    Write-Host "检测到Python版本: $pythonVersion" -ForegroundColor Yellow
    
    # 运行修复脚本（使用脚本所在目录的相对路径）
    Write-Host "正在运行修复脚本..." -ForegroundColor Yellow
    python (Join-Path $scriptDir 'fix_venv_path.py')
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "" 
        Write-Host "修复完成！" -ForegroundColor Green
    } else {
        Write-Host "" 
        Write-Host "修复过程中出现错误" -ForegroundColor Red
    }
    
} catch {
    Write-Host "发生错误: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "按任意键退出..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")