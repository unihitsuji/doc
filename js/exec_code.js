//  
function exec_code(ifrm = 'ifrm', out = 'out', err = 'err',
                   code = 'code' , inp = 'inp', lang = 'lang') {
    let o_lang = document.getElementById(lang);
    let o_code = document.getElementById(code);
    let o_inp  = document.getElementById(inp);
    let o_out  = document.getElementById(out);
    let o_err  = document.getElementById(err);
    let o_ifrm = typeof ifrm == 'string' ?
        document.getElementById(ifrm) : ifrm;
    if (o_lang.value == "markdown") {
        let html = enclose_body(marked.parse(o_code.value));
        navigator.clipboard.writeText(html);
        if (o_ifrm instanceof HTMLIFrameElement) {
            o_ifrm.setAttribute("srcdoc", html);
        } else {
            o_err.value += html;
        }
    } else if (o_lang.value == "html") {
        let html = enclose_body(o_code.value);
        navigator.clipboard.writeText(html);
        o_ifrm.setAttribute("srcdoc", html);
    } else if (o_lang.value == "javascript") {
        try {
            eval(o_code.value);
        } catch (e) {
            o_err.value += e;
        }
    } else if (o_lang.value == "Javascript") {
        const saved_log = console.log;
        const saved_err = console.error;
        console.log = (...args) => {
            for (var x in args) {
                o_out.value += args[x];
            }
            o_out.value += "\n";
        };
        console.error = (...args) => {
            for (var x in args) {
                o_err.value += args[x];
            }
            o_err.value += "\n";
        };
        try {
            eval(o_code.value);
        } catch (e) {
            o_err.value += e;
        } finally {
            console.log   = saved_log;
            console.error = saved_err;
        }
    } else if (o_lang.value == "gosh") {
    } else if (o_lang.value == "python3") {
    } else if (o_lang.value == "ruby") {
    } else if (o_lang.value == "tclsh") {
    } else {
    }
}
