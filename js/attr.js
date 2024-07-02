//  属性用の構文糖衣
//  attr('foo') や attr('foo', 'value') ではなく
//  prop('foo') や prop('foo', 'value') では？
//  attr と prop を明確に分けているのは直交性の確保のため
//  注意: gebi.js が必要、value のみ例外扱いしてる点に注意
//      attr('foo')                      : .getAttribute('value' )
//      attr('foo', 'value')             : .getAttribute('value' ) (上と同じ)
//      attr('foo', 'value' , 'bar')     : .setAttribute('value' , 'bar')
//      attr('foo', 'value' , undefined) : .setAttribute('value' , undefined)
//      attr('foo', 'srcdoc')            : .getAttribute('srcdoc');
//      attr('foo', 'srcdoc', 'bar')     : .setAttribute('srcdoc', 'bar')
//      attr('foo', 'srcdoc', undefined) : .setAttribute('srcdoc', undefined)
function attr(id_or_obj, ...kvs) {
    let elem = gebi(id_or_obj);
    if (kvs.length == 0) {
        return elem.getAttribute('value');
    } else if (kvs.length == 1) {
        return elem.getAttribute(kvs[0]);
    } else {
        elem.setAttribute(kvs[0], kvs[1]);
        return elem; } }
