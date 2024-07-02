// cookie の読み込み、または書き込み
function cookie(key, ...vals) {
    if (vals.length) {
        console.log(`init: cookie write key = ${key} value = ${vals[0]}`);
        const encoded = encodeURIComponent(vals[0]);
        // max-age: 8,640,000=100days  604,800=7days
        // samesite: 
        const attrs_str = 'max-age=8640000; samesite=strict;';
        document.cookie = `${key}=${encoded}; ${attrs_str}`;
        console.log(`done: cookie write key = ${key} value = ${encoded}`);
        return encoded; }
    else {
        console.log(`init: cookie read key = ${key}`);
        const cookies = document.cookie.split(";");
        const found = cookies.find(
            (cookie) => cookie.split("=")[0].trim() === key.trim() );
        if (found) {
            var ary = found.split("=",2);
            var decoded = decodeURIComponent(ary[1]);
            console.log(`done: cookie read key = ${key} value = ${decoded}`);
            return decoded; }
        console.log(`done: cookie read not found key = ${key}`);
        return ""; } }

//  cookie 値 の key と value を proc に渡す
//  cookie を読み込むが、DOM に書き込まないケースで使う
function read_cookie(key, proc = null) {
    let ret = cookie(key);
    if (proc) proc( { "key": key, "value": ret } );
    return ret; }

//  cookie と紐付いた DOM オブジェクトの .value の初期化
//  (id=key DOM要素).value = (key cookie の値)
//  頻出パターンは onload で pull_cookie('theme', theme());
function pull_cookie(id_or_obj, proc = null) {
    const dom = typeof id_or_obj == 'string' ?
          document.getElementById(id_or_obj) : id_or_obj;
    const coo = cookie(dom.id);
    if (coo) dom.value = coo;
    if (proc) proc(dom);
    return coo; }

//  DOM オブジェクトと紐付いた cookie の書込み
//  (id=key DOM要素).value の cookie を書込む
function push_cookie(id_or_obj, proc = null) {
    const dom = typeof id_or_obj == 'string' ?
          document.getElementById(id_or_obj) : id_or_obj;
    const val = dom.value;
    cookie(dom.id, val);
    if (proc) proc(dom); }
