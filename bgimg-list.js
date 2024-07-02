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
    console.log(`init: find_img`);
    let it = chain(dom,
                   rise_until_tag_is('TD'),
                   (obj) => { return obj.previousElementSibling; },
                   (obj) => { return obj.firstElementChild; } );
    if (it) {
        console.log(`done: find_img found ${it.tagName} src="${it.src}"`); }
    else {
        console.log('done: find_img not found'); }
    return it; }

function clicked(dom) {
    console.log(`init: clicked`);
    find_img(dom).style.mixBlendMode = dom.textContent;
    console.log(`done: clicked .style.mixBlendMode = ${dom.textContent}`); }

function onload() {
    document.querySelectorAll('span').forEach( (obj) => {
        obj.setAttribute("onclick", 'clicked(this)'); } ); }
