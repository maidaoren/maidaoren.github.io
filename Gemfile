source "https://rubygems.org"

# 基础环境
gem "jekyll", "~> 4.4"
gem "minima", "~> 2.5"

# 必要的运行时依赖（Ruby 4.0+ 需要）
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
gem "ostruct"
gem "mutex_m"

# 插件（按需添加，不要用 github-pages 大礼包）
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag"      # 替代 github-pages 的 SEO 功能
  gem "jekyll-sitemap"      # 替代 github-pages 的站点地图功能
  gem "jekyll-paginate"     # 如果你有分页功能
end

# Windows 环境优化
platforms :windows do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
  gem "wdm", "~> 0.1"
end