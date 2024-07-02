/*
function turn(selector, obj) {
    let v = obj.getAttribute('data-display');
    v = (v != '') ? '' : true;
    obj.setAttribute('data-display', v);
    document.querySelectorAll(selector).forEach( (x) => {
        x.style.display = v ? 'inline' : 'none'; } ); }
*/
function turn(sel_or_obj, selector, proc, slot = 'data-display') {
    let obj = typeof sel_or_obj == 'string' ?
        document.querySelector(sel_or_obj) : sel_or_obj;
    let val = obj.getAttribute(slot);
    val = val != '' ? '' : true;
    obj.setAttribute(slot, val);
    document.querySelectorAll(selector).forEach( proc(val) ); }

function turn_by_tag(val) {
    return (x) => {
        if ( x.tagName == 'SPAN' ) {
            x.style.display = val ? 'inline' : 'none'; }
        else {
            x.style.display = val ? 'table' : 'none'; } }; }


function turn_inline(val) {
    return (x) => { x.style.display = val ? 'inline' : 'none'; }; }

function turn_table(val) {
    return (x) => { x.style.display = val ? 'table' : 'none'; }; }
