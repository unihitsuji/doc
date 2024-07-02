//  face (theme + bgimg + blend) の初期設定.
//  引数 dom: id=theme, bgmimg, blend の要素があるとき true
//  html body の onload に入れておくのが使いやすい
function face_onload(dom = false) {
    if (dom) {
        pull_cookie('theme', theme());
        pull_cookie('bgimg', bgimg(true)); }
    else {
        read_cookie('theme', theme());
        read_cookie('bgimg', bgimg(true)); } }
