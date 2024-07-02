//  
function exec_code(lang, code, inp, out, err, ifrm) {
    const o_lang = document.getElementById(lang);
    const o_code = document.getElementById(code);
    const o_inp  = document.getElementById(inp);
    const o_out  = document.getElementById(out);
    const o_err  = document.getElementById(err);
    const o_ifrm = document.getElementById(ifrm);
    if (o_lang.value == "html") {
        o_ifrm.setAttribute("srcdoc", o_code.value);
    } else if (o_lang.value == "javascript") {
        try {
            eval(o_code.value);
        } catch (e) {
            o_err.value = o_err.value + e;
        }
    } else if (o_lang.value == "Javascript") {
        const saved = console.log;
        console.log = (...args) => {
            for (var x in args) {
                o_out.value = o_out.value + args[x];
            }
            o_out.value = o_out.value + "\n";
        };
        try {
            eval(o_code.value);
        } catch (e) {
            o_err.value = o_err.value + e;
        } finally {
            console.log = saved;
        }
    } else if (o_lang.value == "gosh") {
    } else if (o_lang.value == "python3") {
    } else if (o_lang.value == "ruby") {
    } else if (o_lang.value == "tclsh") {
    } else {
    }
}
