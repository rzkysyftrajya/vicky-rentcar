$content = Get-Content 'src/app/rental-mobil-surabaya/page.tsx' -Raw
$content = $content -replace 'dark:', ''
$content = $content -replace 'text-slate-700', 'text-gray-700'
$content = $content -replace 'text-slate-600', 'text-gray-600'
$content = $content -replace 'text-slate-300', 'text-gray-500'
$content = $content -replace 'text-slate-200', 'text-gray-400'
$content = $content -replace 'text-slate-100', 'text-gray-300'
Set-Content 'src/app/rental-mobil-surabaya/page.tsx' $content
Write-Host "Done fixing colors"

