---
layout: default
---

<style>
  /* 1. 强力隐藏 RSS 订阅相关元素 */
  .rss-subscribe, 
  .feed-subscribe,
  a[href*="feed.xml"],
  p:has(a[href*="feed.xml"]) {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  /* 🧹 2. 核心修复：大幅度压缩文章列表项之间的黄色外边距（从 30px 缩减至 10px） */
  .post-list > li {
    margin-bottom: 10px !important; 
  }

  /* 3. 细节微调：让日期和标题之间的上下间隙也稍微紧凑一点，更有呼吸感 */
  .post-meta {
    margin-bottom: 4px !important;
    display: inline-block;
  }
</style>

<div class="home">
<hr>
  <h2 class="post-list-heading">文章列表</h2>

  <ul class="post-list">
    {%- for post in site.posts -%}
    <li>
    <hr>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
              <span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</span>

      </h3>
    </li>
    {%- else -%}
    <li>（未检测到公开文章，请确认文章是否放在 _posts 文件夹中且日期没有写错）</li>
    {%- endfor -%}
  </ul>
</div>