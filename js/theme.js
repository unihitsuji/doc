//  テーマの設定をする関数を返す.
//  id: テーマ CSS 用 link タグの id
function theme(id = 'themecss') {
    return (dom) => {
        let lnk = document.getElementById(id);
        if (dom.value) {
            lnk.href = dom.value;
            lnk.disabled = false; }
        else {
            lnk.disabled = true; } }; }
