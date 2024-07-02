function blend(id_or_obj) {
    console.log(`init: blend`);
    let sel = gebi(id_or_obj);
    if (sel.value == '') sel.value = 'normal';
    document.body.style.backgroundBlendMode = sel.value;
    console.log(`done: blend ${sel.value}`); }

//  背景画像
//  id: 背景画像 CSS 用 link タグの id
function bgimg(onload_read = false, id = 'bgimgcss') {
    return (dom) => {
        console.log(`init: bgimg for ${id}`);
        let lnk = gebi(id);
        let bmsel = gebi('blend');
        bmsel = bmsel ? bmsel : {};
        if (lnk) { // 古い link があれば削除
            lnk.disabled = true;
            lnk.remove(); }
        if (dom.value) { // 背景画像 CSS が指定されたなら link を新規作成
            let newlnk  = document.createElement('link');
            newlnk.rel  = 'stylesheet';
            newlnk.href = dom.value;
            newlnk.id   = id;
            document.head.appendChild(newlnk);
            newlnk.addEventListener( 'load', (ev) => {
                console.log(`init: newlnk.onload 1`);
                //  新しいスタイルシートの link の onload でも
                //  window.getComputedStyle で
                //  新しいスタイルを取得できなかったので自作関数 css による
                //  sheet of document.styleSheets,
                //  rule of sheet.cssRules で取得
                let s = css('body')['background-blend-mode'];
                bmsel.value = s ? s[0] : 'normal';
                blend(bmsel);
                console.log(`done: newlnk.onload 1 ${bmsel.value}`); } );
            newlnk.addEventListener( 'load', (ev) => {
                console.log(`init: newlnk.onload 2`);
                if (onload_read) {
                    bmsel.value = read_cookie('blend');
                    blend(bmsel); }
                console.log(`done: newlnk.onload 2 ${bmsel.value}`); } ); }
        else {
            bmsel.value = 'normal';
            blend(bmsel); }
        console.log(`done: bgimg for ${id} ${dom.value}`); }; }

