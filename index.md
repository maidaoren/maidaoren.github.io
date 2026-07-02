---
layout: default
---

<style>
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
</style>

<div class="home">
  <h2 class="post-list-heading">文章列表</h2>

  <ul class="post-list">
    <!-- 3. 最直接、最暴力的全局文章抓取循环，谁也拦截不了 -->
    {%- for post in site.posts -%}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %e, %Y" }}</span>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>
    </li>
    {%- else -%}
    <li>（未检测到公开文章，请确认文章是否放在 _posts 文件夹中且日期没有写错）</li>
    {%- endfor -%}
  </ul>
</div>