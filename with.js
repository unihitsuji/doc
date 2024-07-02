function check_history(ev) {
    let obj = { value: "" };
    console.log = console2value(obj);
    console.log('back_onclick: ifrm1');
    let ifrm1 = document.getElementById('ifrm1').contentWindow;
    let ifrm2 = document.getElementById('ifrm2').contentWindow;
    let ifrm3 = document.getElementById('ifrm3').contentWindow;
    console.log(`ifrm1=${ifrm1} / ifrm2=${ifrm2} / ifrm3=${ifrm3}`);
    console.log('widow.location.href =', window.location.href);
    if (ifrm1) console.log('ifrm1.location.href =', ifrm1.location.href);
    if (ifrm2) console.log('ifrm2.location.href =', ifrm2.location.href);
    if (ifrm3) console.log('ifrm3.location.href =', ifrm3.location.href);
    let hist0 = window.history;
    let hist1 = ifrm1 ? ifrm1.history : null;
    let hist2 = ifrm2 ? ifrm2.history : null;
    let hist3 = ifrm3 ? ifrm3.history : null;
    console.log(`hist0 === hist1 ${hist0 === hist1}`);
    console.log(`hist0 === hist2 ${hist0 === hist2}`);
    console.log(`hist0 === hist3 ${hist0 === hist3}`);
    console.log(`hist1 === hist2 ${hist1 === hist2}`);
    console.log(`hist1 === hist3 ${hist1 === hist3}`);
    console.log(`hist2 === hist3 ${hist2 === hist3}`);
    console.log(`deep_equal(hist0, hist1) ${deep_equal(hist0, hist1)}`);
    console.log(`deep_equal(hist0, hist2) ${deep_equal(hist0, hist2)}`);
    console.log(`deep_equal(hist0, hist3) ${deep_equal(hist0, hist3)}`);
    console.log(`deep_equal(hist1, hist2) ${deep_equal(hist1, hist2)}`);
    console.log(`deep_equal(hist1, hist3) ${deep_equal(hist1, hist3)}`);
    console.log(`deep_equal(hist2, hist3) ${deep_equal(hist2, hist3)}`);
    if (hist0) console.log( 'hist0', what_is(hist0) );
    if (hist1) console.log( 'hist1', what_is(hist1) );
    if (hist2) console.log( 'hist2', what_is(hist2) );
    if (hist3) console.log( 'hist3', what_is(hist3) ); }

//  ボス機能の実行
function boss_comes(ev) {
    if (ev.key == 'Escape') {
        for (let x of ['ifrm1', 'ifrm2', 'ifrm3']) {
            try {
                let url = gebi(x).contentDocument.location.pathname
                console.log(`info: boss_comes ${url}`);
                let omit = [ '/code.html' ];
                if (! omit.includes(url) ) go_home(x); }
            catch {
                console.log(`info: boss_comes different origin`);
                go_home(x); } } } }

function ifrm_html(id_or_obj) {
    let x = typeof id_or_obj == 'string' ?
        document.getElementById(id_or_obj) : id_or_obj;
    if (x.contentDocument)
        navigator.clipboard.writeText(
            '<html>' +
                x.contentDocument.head.outerHTML +
                x.contentDocument.body.outerHTML +
                '</html>'); }

//  スーパーリロードできるらしい
//  [追記] スーパーリロードできないがリロードはする
function ifrm_reload(id_or_obj) {
    let x = typeof id_or_obj == 'string' ?
        document.getElementById(id_or_obj) : id_or_obj;
    if (x.contentWindow)
        x.contentWindow.location.href = x.contentWindow.location.href; }

function ifrm_site(id_or_obj, url = null) {
    let x = typeof id_or_obj == 'string' ?
        document.getElementById(id_or_obj) : id_or_obj;
    if (x.contentDocument) {
        if (url) {
            x.src = url; }
        else {
            url = x.contentDocument.documentURI;
            let res = prompt('URL', url);
            if (res) x.src = res; } } }

function button_onclick(ev) {
    if (ev.target.id == 'home1') {
        go_home('ifrm1'); }
    else if (ev.target.id == 'home2') {
        go_home('ifrm2'); }
    else if (ev.target.id == 'home3') {
        go_home('ifrm3'); }
    else if (ev.target.id == 'spld1') {
        ifrm_reload('ifrm1'); }
    else if (ev.target.id == 'spld2') {
        ifrm_reload('ifrm2'); }
    else if (ev.target.id == 'spld3') {
        ifrm_reload('ifrm3'); }
    else if (ev.target.id == 'site1') {
        ifrm_site('ifrm1'); }
    else if (ev.target.id == 'site2') {
        ifrm_site('ifrm2'); }
    else if (ev.target.id == 'site3') {
        ifrm_site('ifrm3'); }
    else if (ev.target.id == 'html1') {
        ifrm_html('ifrm1'); }
    else if (ev.target.id == 'html2') {
        ifrm_html('ifrm2'); }
    else if (ev.target.id == 'html3') {
        ifrm_html('ifrm3'); } }

function select_onchange(ev) {
    if (ev.target.id == 'urls1') {
        ifrm_site('ifrm1', ev.target.value); }
    else if (ev.target.id == 'urls2') {
        ifrm_site('ifrm2', ev.target.value); }
    else if (ev.target.id == 'urls3') {
        ifrm_site('ifrm3', ev.target.value); } }

function ifrm_onload(ev) {
    let s1 = `ifrm_onload: ${ev.target.id}`;
    console.log(`${s1}.src = ${ev.target.src}`);
    //  オリジンが異なると .contentDocument == null
    let doc = ev.target.contentDocument;
    let s2 = `${s1}.contentDocument`;
    if (doc) {
        console.log(`${s2}.documentURI = ${doc.documentURI}`);
        let url = doc.location.pathname;
        let s3 = `${s2}.location.pathname = ${url}`
        console.log(s3);
        // マークダウンのとき
        if ( doc.documentURI.endsWith('.md') ) {
            console.log(`${s2} found markdown`);
            let text = doc.body.innerText;
            let html = marked.parse(text);
            doc.body.innerHTML = html; }
        //  邪魔な meta タグを削除
        let x0  = doc.querySelector('meta[name="color-scheme"]');
        if ( x0 ) x0.remove();
        //  サイトのテーマに合わせる
        apply_css(doc, '/css/base.css', 'basecss');
        let href = read_cookie('theme');
        if (href) apply_css(doc, href, 'themecss');
        //  特定のページを除き、背景を透過させる
        let omit = [ '/bgimg-list.html' ];
        doc.body.style.backgroundImage = 'none'; // 全ページ背景画像なし
        if ( omit.includes(url) ) {
            console.log(`${s2} *** omit`); }
        else {
            let s4 = `${s2}.body.style.backgroundColor = transparent`;
            console.log(`${s4} ***  hit`);
            doc.body.style.backgroundColor = 'transparent'; }
        //  ifrm2 以外 font-size を x-small にする
        if (ev.target.id != 'ifrm2')
            doc.documentElement.style.fontSize = 'x-small';
        //  ボス機能のためのリスナー
        doc.body.addEventListener( 'keydown', boss_comes ); }
    else {
        console.log(`${s2} can't use due to different origin`); } }

function onload(ev) {
    document.body.addEventListener( 'keydown', boss_comes ); }
