//  構文糖衣
function gebi(id_or_obj) {
    if (typeof id_or_obj != 'string') {
        return id_or_obj;
    } else {
        return document.getElementById(id_or_obj); } }
