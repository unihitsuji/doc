//  textarea を各言語用にする
function get_lang(lang) { return document.getElementById(lang).value; }
function textedit(lang, editor) {
    const obj = document.getElementById(editor);
    obj.addEventListener('keydown', (ev) => {
        const cmd = get_lang(lang);
        //console.log('%s keydown: ev.key = %s', cmd, ev.key);
        if (cmd == 'html') {
        } else if (cmd == 'javascript') {
        } else if (cmd == 'gosh') {
        } else if (cmd == 'python3') {
        } else if (cmd == 'ruby') {
        } else if (cmd == 'tclsh') {
        } else {
        }
    });
    obj.addEventListener('keyup', (ev) => {
        const cmd = get_lang(lang);
        //console.log('%s keyup: ev.key = %s', cmd, ev.key);
        if (cmd == 'html') {
        } else if (cmd == 'javascript') {
        } else if (cmd == 'gosh') {
        } else if (cmd == 'python3') {
        } else if (cmd == 'ruby') {
        } else if (cmd == 'tclsh') {
        } else {
        }
    });
}
