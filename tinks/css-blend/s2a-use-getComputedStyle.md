## 回答
- 仕様である。document.body.style は HTML で記述された style 属性しか反映しない
  つまり、HTML 内 style タグの内容も外部スタイルシートの内容も document.body.styale に反映されない
- window.getComputedStyle(document.body).backgoundBlendMode で取得できる
