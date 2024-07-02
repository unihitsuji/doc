function infinity_allot() {
    alert(`not yet implemented.`);
}

function when_hpfull() {
    let hpmax   = gebi('dere-tool-hpmax');
    let hpnow   = gebi('hpnow');
    let hpfull  = gebi('hpfull');
    let stamina = Number(hpmax.value) - Number(hpnow.value);
    let rest    = stamina * 5 * 60 * 1000;
    hpfull.value = new Date(new Date().getTime() + rest).toLocaleString();
    return hpfull.value;
}

function pin(str) {
    let it = gebi('dere-tool-pin');
    it.value = str;
    push_cookie(it);
    it.style.display = 'inline';
    gebi('kill-pin').style.display = 'inline'; }

function kill_pin() {
    let it = gebi('dere-tool-pin');
    it.value = '';
    push_cookie(it);
    it.style.display = 'none';
    gebi('kill-pin').style.display = 'none'; }

function onload() {
    pull_cookie('dere-tool-hpmax');
    when_hpfull();
    let it = gebi('dere-tool-pin');
    pull_cookie(it);
    if (it.value) {
        it.style.display = 'inline';
        gebi('kill-pin').style.display = 'inline'; } }

