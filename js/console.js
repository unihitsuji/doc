//  console 出力の横取り
const saved_log   = console.log;
const saved_info  = console.info;
const saved_warn  = console.warn;
const saved_error = console.error;
const saved_debug = console.debug;

function console2value(id_or_obj) {
    let dst = typeof id_or_obj == 'string' ?
        document.getElementById(id_or_obj) : id_or_obj;
    return (...ary) => {
        dst.value += ary.join(" ");
        dst.value += "\n"; }; }

function restore_console(ev) {
    console.log   = saved_log;
    console.info  = saved_info;
    console.warn  = saved_warn;
    console.error = saved_error;
    console.debug = saved_debug; }
