//  postMessage 受取り
function onmessage(ev) {
    let parsed = JSON.parse(ev.data);
    if (parsed.kind == 'foo')
        console.log(`onmessage: ${parsed.data.bar} ${parsed.data.baz}`); }

window.addEventListener( 'message', onmessage );

// button click イベントプロシージャ
function button_onclick(ev) {
    let iframe1 = document.getElementById('iframe1');
    console.log(`button_onclick: ev = ${ev}`);
    if (ev) {
        console.log(`button_onclick: id = ${ev.target.id}`);
        if (ev.target.id == "bt1") {
            iframe1.removeAttribute('srcdoc');
            iframe1.src = "/"; }                       // 同じオリジン
        else if (ev.target.id == "bt2") {
            iframe1.removeAttribute('srcdoc');
            iframe1.src = "https://www.google.com/"; } // 違うオリジン
        else if (ev.target.id == "bt3") {
            iframe1.srcdoc = '<h1>foo</h1>'; } // srcdoc foo
        else if (ev.target.id == "bt4") {
            iframe1.srcdoc = '<h1>bar</h1>'; } // srcdoc bar
        else {} } }

function throw_error(ev) {
    setTimeout( () => { throw new Error("Test Error"); }, 1000); }

function promise_reject(ev) {
    setTimeout( () => { Promise.reject("Test Promise Rejection"); }, 2000); }

//  iframe load イベントプロシージャ
function iframe_onload(ev) {
    console.log(`iframe_onload: ev = ${ev}`);
    if (ev) {
        let s1 = 'iframe_onload: ev.target';
        console.log(`${s1} = ${ev.target}`);
        if (ev.target) {
            console.log(`${s1}.id     = ${ev.target.id}`);
            console.log(`${s1}.src    = ${ev.target.src}`);
            console.log(`${s1}.srcdoc = ${ev.target.srcdoc}`);
            let s2 = `${s1}.contentDocument`;
            console.log(`${s2} = ${ev.target.contentDocument}`);
            if (ev.target.contentDocument) {
                console.log(`${s2} exists GOOD!`); }
            else {
                console.log(`${s2} not exists BAD`); } } } }

// document load イベントプロシージャ
function onload(ev) {
    window.onerror = (message, source, lineno, colno, error) => {
        console.error(
            `Error: ${message} at ${source}:${lineno}:${colno}`);
        return false; };
    window.onunhandledrejection = (event) => {
        console.error(
            `Unhandled Promise Rejection: ${event.reason}`); };
    if (ev) {
        console.log(`onload: class = ${ev.target.constructor.name}`);
        console.log(`onload: body  = ${ev.target.body.tagName}`); }
    else {
        console.log(`onload: ev = ${ev}`); }
    console.log   = console2value('log');
    console.warn  = console2value('warn');
    console.error = console2value('error');
    console.warn(`console.warn(...ary) output to here`);
    console.error(`console.error(...ary) output to here`);
    console.log(`index.js onload: done`); }
