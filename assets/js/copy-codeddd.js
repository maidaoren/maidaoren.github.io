document.addEventListener("DOMContentLoaded", function () {
  // 找到所有代码块（Jekyll 生成的代码块结构）
  document.querySelectorAll("div.highlight").forEach(function (highlightDiv) {
    // 获取 pre 元素
    const pre = highlightDiv.querySelector("pre");
    if (!pre) return;

    // 如果已经添加过按钮，跳过
    if (pre.querySelector(".code-copy-btn")) return;

    // 创建复制按钮
    const btn = document.createElement("button");
    btn.className = "code-copy-btn";
    btn.textContent = "复制";
    btn.setAttribute("aria-label", "复制代码");

    // 将按钮插入到 pre 元素中（你的 CSS 中 pre 是 relative 定位）
    pre.style.position = "relative";
    pre.appendChild(btn);

    // 点击复制
    btn.addEventListener("click", function (e) {
      e.stopPropagation();

      // 获取代码内容（去除多余空白）
      const code = pre.querySelector("code");
      if (!code) return;

      let text = code.textContent;

      // 如果代码块有行号，需要过滤掉行号
      // Jekyll 的行号在 .lineno 类中
      const lineNumbers = code.querySelectorAll(".lineno");
      if (lineNumbers.length > 0) {
        // 有行号的情况：逐行提取真实内容
        const lines = [];
        const codeLines = code.querySelectorAll("span:not(.lineno)");
        if (codeLines.length > 0) {
          // 如果每个 span 是一行
          let currentLine = "";
          codeLines.forEach(function (span) {
            if (span.classList.contains("lineno")) return;
            currentLine += span.textContent;
          });
          text = currentLine;
        } else {
          // 简单的 fallback：去掉行号前缀
          text = code.textContent.replace(/^\s*\d+\s*/gm, "");
        }
      }

      // 复制到剪贴板
      navigator.clipboard
        .writeText(text.trim())
        .then(function () {
          btn.textContent = "✓ 已复制";
          btn.classList.add("copied");

          setTimeout(function () {
            btn.textContent = "复制";
            btn.classList.remove("copied");
          }, 2000);
        })
        .catch(function (err) {
          console.error("复制失败:", err);
          // 降级方案：使用 textarea
          fallbackCopy(text.trim(), btn);
        });
    });
  });
});

// 降级复制方案（兼容非 HTTPS 环境）
function fallbackCopy(text, btn) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand("copy");
    btn.textContent = "✓ 已复制";
    btn.classList.add("copied");
    setTimeout(function () {
      btn.textContent = "复制";
      btn.classList.remove("copied");
    }, 2000);
  } catch (err) {
    console.error("降级复制也失败:", err);
    btn.textContent = "复制失败";
    setTimeout(function () {
      btn.textContent = "复制";
    }, 2000);
  }

  document.body.removeChild(textarea);
}