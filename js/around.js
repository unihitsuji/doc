function around(sel, pred, proc) {
    document.querySelectorAll(sel).forEach( (x) => proc(x, pred(x)) ); }

function is_style_display_alive( obj ) {
    return window.getComputedStyle(obj).display != 'none'; }

//  pred 用
function is_sibling_alive( obj ) {
    return ( is_style_display_alive(obj.previousElementSibling) &&
             is_style_display_alive(obj.nextElementSibling) ); }
//  proc 用
function style_display_inline( obj, flag ) {
    obj.style.display = flag ? 'inline' : 'none'; }

//  proc 用
function style_display_table( obj, flag ) {
    obj.style.display = flag ? 'table' : 'none'; }

// around( '.look-around', is_sibling_alive, style_display_inline );
