//  オブジェクトが持つプロパティやメソッドの一覧を整形した文字列で返す
//  confine = 'function' とするとメソッドに限定される
function what_is(obj, confine = null) {
    let ret = `= ${typeof obj}`;
    let a = new Array();
    for (let x in obj) { a.push(x); }
    a.sort();
    for (let x in a) {
        let name = a[x];
        if (! confine || typeof(obj[name]) == confine) {
            ret += `\n- ${name}: ${typeof obj[name]}`;
            try {
                ret += `\n    = ${obj[name]}`;
            } catch { // プロパティやメソッドへアクセスできない
                ret += `\n    = ******* Error *******`; } } }
    return ret; }

