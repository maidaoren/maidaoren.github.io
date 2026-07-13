document.addEventListener("DOMContentLoaded", function () {
  // 监听所有自定义公式盒子的点击事件
  document.addEventListener("click", function (e) {
    const container = e.target.closest(".custom-formula-container");
    if (!container) return;

    const texCode = container.getAttribute("data-tex");
    const hintLabel = container.querySelector(".custom-formula-hint");

    if (texCode) {
      // 自动包裹成标准的 $$公式$$ 写入剪贴板
      navigator.clipboard.writeText("$$" + texCode + "$$").then(() => {
        if (hintLabel) {
          hintLabel.textContent = "✓ 源码已复制到剪贴板！";
          hintLabel.style.color = "#28a745";
          
          setTimeout(() => {
            hintLabel.textContent = "点击复制公式源码";
            hintLabel.style.color = "#0084FF";
          }, 1500);
        }
      }).catch(err => {
        console.error("复制失败", err);
      });
    }
  });
});