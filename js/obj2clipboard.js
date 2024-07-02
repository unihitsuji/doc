// id オブジェクトの value か textContent をクリップボードにコピーする
function obj2clipboard(id, slot = 'value', new_value = '') {
    const _slot      = slot?? 'value';
    const _new_value = new_value?? '';
    const target = document.getElementById(id);
    navigator.clipboard.writeText(target[_slot]);
    if (_new_value != '') target[_slot] = _new_value;
}
