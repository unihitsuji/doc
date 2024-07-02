//  input type="text" の頻出イベントプロシージャの登録
function add_event(...text_inputs) {
    for (var x in text_inputs) {
        const elm = document.getElementById(text_inputs[x]);
        elm.addEventListener('drop', (ev) => {
            const str = ev.dataTransfer.getData('text');
            console.log("drop %s: %s", text_inputs[x], str);
            elm.value = str;
            ev.preventDefault();
        });
        elm.addEventListener('focus', (ev) => {
            const len = elm.value.length;
            console.log("focus %s: %d", text_inputs[x], len);
            elm.setSelectionRange(0, len);
        });
    }
}
