function calculate(x, y, ...rests) { return Number(x) + Number(y); }

function onload() {
    let ev = new Event('input', { 'bubbles': true, 'cancelable': true });
    let fo = document.getElementById('calculate');
    fo.dispatchEvent(ev);
}
