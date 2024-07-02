function go_back(id) {
    let ifrm = document.getElementById(id);
    console.log(`go_back: id = ${id}`);
    console.log(`go_back: ifrm = ${ifrm}`);
    console.log(`go_back: ifrm.id = ${ifrm.id}`);
    console.log(`go_back: ifrm.contentWindow = ${ifrm.contentWindow}`);
    ifrm.contentWindow.history.back();
}
