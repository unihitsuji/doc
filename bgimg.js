function _rise_until_tag_is(dom, tag) {
    if (dom) {
        if (dom.tagName == tag) {
            return dom;
        } else {
            return _rise_until_tag_is(dom.parentNode, tag); }
    } else {
        return null; } }

function rise_until_tag_is(tag) {
    return (dom) => { return _rise_until_tag_is(dom, tag) }; }

function chain(obj, ...procs) {
    let ret = obj;
    for (let proc of procs) {
        ret = proc(ret);
        if (ret == null) break; }
    return ret; }

function find_img(dom) {
    let it = chain(dom,
                   rise_until_tag_is('TD'),
                   (obj) => { return obj.previousElementSibling; },
                   (obj) => { return obj.firstElementChild; } );
    if (it) {
        console.log(`${it.tagName} src="${it.src}"`);
    } else {
        console.log('not found'); }
    return it; }

function clicked(dom) {
    find_img(dom).style.mixBlendMode = dom.textContent; }

function onload() {
    read_cookie('theme', theme());
    document.querySelectorAll('span').forEach( (obj) => {
        obj.setAttribute("onclick", 'clicked(this)'); } );
}
