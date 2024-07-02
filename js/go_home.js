function go_home(id, src = '/memo.html') {
    gebi(id).removeAttribute('srcdoc');
    gebi(id).src = src; }
