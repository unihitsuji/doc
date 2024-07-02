function dom(id) { return document.getElementById(id); }

function ifr(ifr_id, id) {
    let elm = document.getElementById(ifr_id);
    return elm.contentDocument.getElementById(id); }

function atr(id, attr, ...x) {
    let elm = document.getElementById(id);
    if (x.length == 0) {
        return elm.getAttribute(attr);
    } else {
        elm.setAttribute(attr, x[0]);
        return x[0]; } }

function val(id, ...x) {
    let elm = document.getElementById(id);
    if (x.length == 0) {
        return elm.value;
    } else {
        elm.value = x[0];
        return elm.value; } }

//  親から iframe 内のオリジンを取得する
//  同じオリジンなら、オリジンの文字列を返す
//  異なるオリジンなら、false を返す
function origin(ifr_id) {
    try {
        let ifrm = document.getElementById(ifr_id);
        let win  = ifrm.contentWindow;              // オリジンが異なるなら
        let loc  = win.location;                    // ここか
        let orig = `${loc.protocol}://${loc.host}`; // ここでエラー
        return orig;
    } catch {
        return false; } }
