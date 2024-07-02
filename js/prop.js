//  プロパティ用の構文糖衣
//  attr と prop を明確に分けているのは直交性の確保のため
//  注意: gebi.js が必要、value のみ例外扱いしてる点に注意
//      prop('foo')                      : .value
//      prop('foo', 'value')             : ['value'] (結果は上と同じ)
//      prop('foo', 'value' , 'bar')     : ['value']  = 'bar'
//      prop('foo', 'value' , undefined) : ['value']  = undefined
//      prop('foo', 'srcdoc')            : ['srcdoc']
//      prop('foo', 'srcdoc', 'bar')     : ['srcdoc'] = 'bar')
//      prop('foo', 'srcdoc', undefined) : ['srcdoc'] = undefined
function prop(id_or_obj, ...kvs) {
    let elem = gebi(id_or_obj);
    if (kvs.length == 0) {
        return elem.value;
    } else if (kvs.length == 1) {
        return elem[ kvs[0] ];
    } else {
        elem[ kvs[0] ] = kvs[1];
        return elem; } }
