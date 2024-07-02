//  注意: gebi.js が必要
function reload(id_or_obj) {
    let elem = gebi(id_or_obj);
    try {
        elem.contentWindow.location.reload();
        //elem.contentDocument.body.style.backgroundColor = 'transparent';
        console.log(`done: reload.js reload`);
    } catch (er) {
        console.error('done: reload.js reload due to different origin');
        console.error(er);
    }
}
