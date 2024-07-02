function apply_css(doc, href, id = '') {
    console.log('init: apply_css');
    let sel = `link[rel="stylesheet"][href="${href}"]`;
    if (! doc.querySelector(sel) ) {
        let x  = doc.createElement('link');
        x.rel  = "stylesheet";
        x.href = href;
        if (id) x.id = id;
        doc.head.appendChild(x);
        console.log('done: apply_css append'); }
    else {
        console.log('done: apply_css not append'); } }
