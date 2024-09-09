Jekyll::Hooks.register :documents, :post_render do |document|
  if document.output_ext == '.html'
    # 匹配 <pre><code> 结构的代码块
    document.output = document.output.gsub(/<pre><code class="(.*?)">([\s\S]*?)<\/code><\/pre>/) do |match|
      lang = Regexp.last_match(1)
      code = Regexp.last_match(2)

      # 替换为带有拷贝按钮的 HTML 结构
      <<~HTML
        <div class="highlight">
          <pre><code class="#{lang}">#{code}</code></pre>
          <button class="copy-btn" data-clipboard-target=".highlight code">拷贝代码</button>
        </div>
      HTML
    end
  end
end
