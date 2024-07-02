let wide, vert, job;
let apiResolve;
let apiPromise = new Promise((r) => { apiResolve = r; });
let jobResolve;
let jobPromise = new Promise((r) => { jobResolve = r; });

function embed_url(vid) {
    return `https://www.youtube.com/embed/${vid}?enablejsapi=1`; }

//  id の子要素で .value = value となる子要素を返す
//  なければ false を返す
function is_redundant(id, value) {
    let ops = Array.from(document.getElementById(id).children);
    for (x in ops) {
        if (ops[x].value == value) return ops[x]; }
    return false; }

function add_opt(id, value, title) {
    if ( is_redundant(id, value) ) return;
    let hist = document.getElementById(id);
    let opt  = document.createElement('OPTION');
    let txt  = document.createTextNode(title);
    opt.appendChild(txt);
    opt.value = value;
    hist.appendChild(opt); }

function onPlayerReady(ev) {
    console.log(`init: while.js onPlayerReady`);
    apiPromise.then( () => {
        let menu = document.getElementById('menu');
        let disp = menu.style.display;
        if (disp == 'inline' || disp == 'table') ev.target.playVideo();
        let key = (ev.target.id == wide.id) ? 'wide' : 'vert';
        let info = ev.target.getVideoData();
        console.log(`info: while.js onPlayerReady`, info);
        let vid = info.video_id;
        //let vid = get_vid(gebi(key).src);
        let title = info.title;
        //let title = gebi(key).title;
        let val = `${key}=${vid}`;
        if ( vid ) {
            add_opt('play_hist', val, title);
            document.getElementById('play_hist').value = val; } } );
    console.log(`done: while.js onPlayerReady`); }

function onYouTubeIframeAPIReady() {
    console.log(`init: onYouTubeIframeAPIReady`);
    wide = new YT.Player('wide',
                         { events: { 'onReady': onPlayerReady }});
    vert = new YT.Player('vert',
                         { events: { 'onReady': onPlayerReady }});
    if (apiResolve) apiResolve();
    console.log(`done: onYouTubeIframeAPIReady`); }

function get_vid(str) {
    var res;
    const re1 = /https:\/\/www.youtube.com\/watch\?v=([^\?\&"']+)/;
    res = re1.exec(str);
    if (res != null) return res[1];
    const re2 = /https:\/\/youtu.be\/([^\?\&"']+)/;
    res = re2.exec(str);
    if (res != null) return res[1];
    const re3 = /https:\/\/www.youtube.com\/shorts\/([^\?\&"']+)/;
    res = re3.exec(str);
    if (res != null) return res[1];
    const re4 = /https:\/\/www.youtube.com\/embed\/([^\?\&"']+)/;
    res = re4.exec(str);
    const re5 = /https:\/\/www.youtube.com\/live\/([^\?\&"']+)/;
    res = re5.exec(str);
    if (res != null) return res[1];
    return ''; }

function is_playing(obj) {
    return (obj.getPlayerState() == YT.PlayerState.PLAYING); }

function play_wide() {
    let ifr = gebi('wide');
    let vid = attr('play_wide', 'data-vid');
    let url = embed_url(vid);
    if (ifr.src == url && is_playing(wide)) {
        wide.stopVideo();
    } else {
        attr('wide', 'src', url); } }

function play_vert() {
    let ifr = gebi('vert');
    let vid = attr('play_vert', 'data-vid');
    let url = embed_url(vid);
    if (ifr.src == url && is_playing(vert)) {
        vert.stopVideo();
    } else {
        attr('vert', 'src', url); } }

function play_hist(obj) {
    let x = obj.value.split('=');
    attr(`play_${x[0]}`, 'data-vid', x[1]);
    if (x[0] == 'wide') {
        play_wide();
    } else {
        play_vert(); } }

function play_list() {
    let out = document.getElementById('out');
    let err = document.getElementById('err');
    let sel = document.getElementById('play_hist');
    let opts = Array.from( sel.children );
    for (var x in opts) {
        let obj = opts[x];
        let txt = obj.text;
        out.value += `${obj.value} ${txt}\n`;
        err.value += `<option value="${obj.value}">${txt}</option>\n`; } }

function clear_out()   { obj2clipboard('out');   gebi('out').value   = ''; }
function clear_err()   { obj2clipboard('err');   gebi('err').value   = ''; }
function clear_inp()   { obj2clipboard('inp');   gebi('inp').value   = ''; }
function clear_code()  { obj2clipboard('code');  gebi('code').value  = ''; }

function go_hist(obj) {
    if (prop(obj)) {
        gebi('ifrm').removeAttribute('srcdoc');
        attr('ifrm', 'src', prop(obj)); } }

function go_there() {
    gebi('ifrm').removeAttribute('srcdoc');
    let url = prop('there');
    attr('ifrm', 'src', url);
    push_cookie('there');
    if (! is_redundant('ifrm_hist', url) ) {
        let title = attr('ifrm', 'title');
        let res = prompt(`タイトルを入力してください ${url}`, title);
        if (res) {
            add_opt('ifrm_hist', url, res);
            gebi('ifrm_hist').value = url; } } }

function search_there() {
    const str = 'https://google.com/search?q=';
    const url = str + encodeURI(prop('there'));
    gebi('ifrm').removeAttribute('srcdoc');
    attr('ifrm', 'src', url);
    push_cookie("there");
    add_opt('ifrm_hist', url, `検索 ${prop('there')}`); }

function drop_code(id_or_obj) {
    let url = attr(id_or_obj, 'data-text');
    let res = prompt(url, 'out');
    if (res) { json(url, (data) => { gebi(res).value += what_is(data); }); } }

function click_drop(id_or_obj) {
    let text = attr(id_or_obj, 'data-text');
    let msg  = `${text}\n\n出力先を指定してください 例 inp out err`;
    let res  = prompt(msg, '');
    if (res) {
        json(text, (data) => {
            gebi(res).value += what_is(data); }); } }

function copy() { obj2clipboard('code'); }

function save() { }

//  ヘッダの書き換え
function treat_ifrm_head(doc) {
    let ff = 'while.js treat_ifrm_head';
    console.log(`init: ${ff}`);
    //  邪魔な meta タグを削除
    let x0  = doc.querySelector('meta[name="color-scheme"]');
    if ( x0 ) x0.remove();
    apply_css(doc, '/css/base.css', 'basecss');
    let href = read_cookie('theme');
    if (href) apply_css(doc, href, 'themecss');
    // let basecss  = attr('basecss',  'href');
    // let themecss = attr('themecss', 'href');
    // if (! doc.querySelector(`link[href="${basecss}"]`) ) {
    //     console.log(`info: ${ff} append header ${basecss}`);
    //     let x1  = doc.createElement('link');
    //     x1.rel  = 'stylesheet';
    //     x1.href = basecss;
    //     doc.head.appendChild(x1); }
    // else {
    //     console.log(`info: ${ff} already exists header ${basecss}`); }
    // if (! doc.querySelector(`link[href="${themecss}"]`) ) {
    //     console.log(`info: ${ff} append header ${themecss}`);
    //     let x2  = doc.createElement('link');
    //     x2.rel  = 'stylesheet';
    //     x2.href = themecss;
    //     doc.head.appendChild(x2); }
    // else {
    //     console.log(`info: ${ff} already exists header ${themecss}`); }
    console.log(`done: ${ff}`); }

//  マークダウン以外の書き換え
function treat_ifrm_body(doc) {
    let ff = 'while.js treat_ifrm_body';
    console.log(`info: ${ff}`);
    console.log(`done: ${ff}`); }

//  マークダウン用の書き換え
function treat_ifrm_body_md(doc) {
    let ff = 'while.js treat_ifrm_body_md';
    console.log(`init: ${ff}`);
    doc.querySelectorAll('table').forEach( (tbl) => {
        tbl.classList.add('md'); } );
    let tds = doc.querySelectorAll('table td');
    console.log(`done: ${ff} ${tds.length}`); }

function ifrm_onload(id_or_obj) {
    let ff = 'while.js ifrm_onload';
    console.log(`init: ${ff}`);
    let ifrm;
    if (! id_or_obj) {
        ifrm = gebi('ifrm').contentDocument; }
    else {
        ifrm = gebi(id_or_obj).contentDocument; }
    jobPromise.then(() => {
        try {
            // オリジンが違えば次でエラーになる
            ifrm.addEventListener('keydown', job);
            if ( ifrm.documentURI.endsWith('.md') ) {
                console.log(`info: ${ff} found markdown`);
                let text = ifrm.body.innerText;
                let html = marked.parse(text);
                ifrm.body.innerHTML = html;
                treat_ifrm_head(ifrm);
                treat_ifrm_body_md(ifrm);
                console.log(`info: ${ff} treat markdown`); }
            else {
                console.log(`info: ${ff} found not markdown`);
                treat_ifrm_head(ifrm);
                treat_ifrm_body(ifrm);
                console.log(`info: ${ff} treat not markdown`); }
            transparent(ifrm);
            console.log(`done: ${ff} ${ifrm.documentURI}`); }
        catch (er) {
            console.error(`done: ${ff} due to different origin`, er); } }); }

function onload() {
    console.log('init: while.js onload');
    apiPromise.then(() => {
        console.log('init: while.js onload api');
        pull_cookie('lang');
        pull_cookie('there');
        add_event('there');
        job = boss('inline',
                   () => {
                       let out  = document.getElementById('out');
                       let code = document.getElementById('code');
                       out.rows = code.rows;
                       wide.stopVideo();
                       vert.stopVideo();
                       go_home('ifrm'); },
                   () => {
                       let out  = document.getElementById('out');
                       out.rows = 16; },
                   'wide', 'vert', 'menu');
        if (jobResolve) jobResolve();
        document.body.addEventListener('keydown', job);
        droppable_button("play_wide", (ev) => {
            console.log(`init: drop wide`);
            let url = ev.dataTransfer.getData('text');
            let vid = get_vid(url);
            attr('play_wide', 'data-vid', vid);
            play_wide(ev.target);
            console.log(`done: drop wide`);
        });
        droppable_button("play_vert", (ev) => {
            console.log(`init: drop vert`);
            let url = ev.dataTransfer.getData('text');
            let vid = get_vid(url);
            attr('play_vert', 'data-vid', vid);
            play_vert(ev.target);
            console.log(`done: drop vert`);
        });
        droppable_button("play_list", (ev) => {
            console.log(`init: drop list`);
            let lines = ev.dataTransfer.getData('text').split('\n');
            for (var x in lines) {
                let len   = lines[x].indexOf(' ');
                let key   = lines[x].substring(0, len).split('=');
                let title = lines[x].substring(len + 1);
                add_opt('play_hist', `${key[0]}=${key[1]}`, title); }
            console.log(`done: drop list`);
        });
        let drop_ep = (ev) => {
            console.log(`init: drop ${ev.target.id}`);
            let text = ev.dataTransfer.getData('text');
            attr(ev.target, 'data-text', text);
            console.log(`done: drop ${ev.target.id}`); };
        droppable_button("drop_test", drop_ep);
        droppable_button("drop_code", drop_ep);
        droppable_button("drop_inp" , drop_ep);
        droppable_button("drop_out" , drop_ep);
        droppable_button("drop_err" , drop_ep);
        textedit('lang', 'code');
        console.log('done: while.js onload api');
    });
    console.log('done: while.js onload'); }

//  以下は利便性を高めるための、なくても支障なしのコマンド用関数

function turn_ifrm(lang, val) {
    let ifrm = gebi('ifrm').contentDocument;
    ifrm.querySelectorAll(lang).forEach( (x) => {
        x.style.display = val; } ); }

function en_off()  { turn_ifrm('.en', 'none'); }
function en_on()   { turn_ifrm('.en', 'table'); }
function ja_off()  { turn_ifrm('.ja', 'none'); }
function ja_on()   { turn_ifrm('.ja', 'table'); }
function all_off() { en_off(); ja_off(); }
function all_on()  { en_on() ; ja_on();  }

function disp_dest(dest = 'out') {
    let out = (dest == console) ? console : gebi(dest);
    return (...strs) => {
        for (let i in strs) {
            if (out == console) {
                console.log(strs[i]); }
            else {
                out.value += `${strs[i]}\n`; } } }; }

function ifrm_url(dest = 'out') {
    let disp = disp_dest(dest);
    disp(gebi('ifrm').contentDocument.documentURI); }

//  iframe の HTML を表示する
function ifrm_html(dest = 'out') {
    let disp = disp_dest(dest);
    disp(gebi('ifrm').contentDocument.documentElement.outerHTML); }

function ifrm_head(dest = 'out') {
    let disp = disp_dest(dest);
    disp(gebi('ifrm').contentDocument.head.outerHTML); }

function ifrm_body(dest = 'out') {
    let disp = disp_dest(dest);
    disp(gebi('ifrm').contentDocument.body.outerHTML); }

function help(dest = 'out') {
    let disp = disp_dest(dest);
    disp("introspection:",
         "    ifrm_url(dest = 'out'):  ifrm の URL",
         "    ifrm_html(dest = 'out'): ifrm の HTML",
         "    ifrm_head(dest = 'out'): ifrm の HTML HEAD",
         "    ifrm_body(dest = 'out'): ifrm の HTML BODY",
         "    what_is(obj, confine = null):",
         "        obj プロパティやメソッドの調査結果を文字列で返す",
         "        confine = 'function' とすればメソッドに限定される",
         "translation:",
         "    chap_translate(dest = 'out'):",
         "        chatGPT の和訳プロンプト文字列を作る",
         "        ifrm に表示された md の html body を使う",
         "    en_off():  英文和訳併記の英文を非表示",
         "    en_on():   英文和訳併記の英文を表示",
         "    ja_off():  英文和訳併記の訳文を非表示",
         "    ja_on():   英文和訳併記の訳文を表示",
         "    all_off(): 英文も和訳も非表示",
         "    all_on():  英文も和訳も表示" ); }
