// 〜.html と同じフォルダの 〜.css と 〜.js をロードする
// ロード完了で ev_proc(ev) を呼ぶ
function tink_load(ev_proc) {
    addEventListener( 'DOMContentLoaded', (ev) => {
        let linkResolve   = null;
        let linkPromise   = new Promise( (r) => { linkResolve   = r; } );
        let scriptResolve = null;
        let scriptPromise = new Promise( (r) => { scriptResolve = r; } );
        //  拡張子を除いたパス名を取得
        let url = document.documentURI;
        let sep = url.lastIndexOf('/');
        let dot = url.lastIndexOf('.');
        let pop = ( 0 <= dot && sep < dot ) ? url.substring(0, dot) : url;
        document.getElementById('html').setAttribute('href', `${pop}.txt`); 
        document.getElementById('css').setAttribute('href', `${pop}.css`);
        document.getElementById('js').setAttribute('href', `${pop}.js`);
        let lnk = document.createElement('link');
        lnk.setAttribute('rel', 'stylesheet');
        lnk.setAttribute('href', `${pop}.css`);
        lnk.addEventListener( 'load', (ev) => {
            if (linkResolve) linkResolve(); } );
        document.head.appendChild(lnk);
        let scr = document.createElement('script');
        scr.setAttribute('src', `${pop}.js`);
        lnk.addEventListener( 'load', (ev) => {
            if (scriptResolve) scriptResolve(); } );
        document.head.appendChild(scr);
        let ps = [linkPromise, scriptPromise];
        Promise.all( ps ).then( (r) => { ev_proc(ev); } ); } ); }

