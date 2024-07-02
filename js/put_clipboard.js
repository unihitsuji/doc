// id オブジェクトの value か textContent をクリップボードにコピーする
function obj2clipboard(id, slot = 'value') {
    const target = document.getElementById(id);
    navigator.clipboard.writeText(target[slot]);
}
