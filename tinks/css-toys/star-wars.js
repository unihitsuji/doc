let epi = {
    ep1: "\n" +
         "\n" +
         "\n",
    ep4: "時は内乱の嵐が吹き荒れるさなか\n" +
         "凶悪な銀河帝国の支配に対し\n" +
         "反乱軍の宇宙艦隊は秘密基地から\n" +
         "奇襲攻撃を仕掛け、初めての勝利を\n" +
         "手にした。\n" +
         "\n" +
         "その戦闘の間に、反乱軍のスパイは\n" +
         "帝国軍の究極兵器に関する秘密の\n" +
         "設計図を盗み出すことに成功。\n" +
         "それは\"デス･スター\"と呼ばれ惑星をも\n" +
         "粉々にするパワーを持つ宇宙要塞基地\n" +
         "だった。\n" +
         "\n" +
         "凶悪な帝国軍に追われながらレイア姫は\n" +
         "盗み出した設計図を手に故郷へと急いだ。\n" +
         "人類を救い銀河に自由を取り戻すために...\n",};

function text_oninput(ev) {
    console.log(`text_oninput: `);
    let empty = new Array(12);
    let text = empty.concat( ev.target.value.split("\n") );
    let line = document.getElementById('line');
    line.setAttribute('max', text.length);
    console.log(`text_oninput: max ${line.max} now ${line.value}`);
    let ifrm = document.getElementById('ifrm').contentDocument;
    let copy = text.slice(line.value).join("\n");
    ifrm.getElementById('scr').textContent = copy; }

function line_onchange(ev) {
    let option = { bubbles: true, cancelable: true };
    let event = new Event('input', option);
    document.getElementById('text').dispatchEvent(event);
    console.log(`line_onchange: ${ev.target.value}`); }

function persp_onchange(ev) {
    let angle = document.getElementById('angle');
    let ifrm = document.getElementById('ifrm').contentDocument;
    let scr  = ifrm.getElementById('scr');
    let str  = `perspective(${ev.target.value}px) rotateX(${angle.value}deg)`;
    console.log(`angle_onchange: ${str}`);
    scr.style.transform = str; }

function angle_onchange(ev) {
    let angle = document.getElementById('persp');
    let ifrm = document.getElementById('ifrm').contentDocument;
    let scr  = ifrm.getElementById('scr');
    let str  = `perspective(${persp.value}px) rotateX(${ev.target.value}deg)`;
    console.log(`angle_onchange: ${str}`);
    scr.style.transform = str; }

function play_onclick(ev) {
    let option = { bubbles: true, cancelable: true };
    let play = ev.target;
    play.disabled = true;
    let line = document.getElementById('line');
    let stop = document.getElementById('stop');
    let id;
    let proc = () => {
        if (play.disabled) {
            console.log(`play_onclick A: ${line.value}`);
            if (Number(line.value) < Number(line.max)) {
                line.value = Number(line.value) + 1;
                let event = new Event('change', option);
                line.dispatchEvent(event); }
            else {
                clearInterval(id);
                play.disabled = false; } }
        else {
            console.log(`play_onclick B: ${line.value}`);
            clearInterval(id); } };
    id = setInterval(proc, 1000); }

function stop_onclick(ev) {
    let option = { bubbles: true, cancelable: true };
    let play = document.getElementById('play');
    let line = document.getElementById('line');
    if (! play.disabled ) {
        line.value = 0;
        let event = new Event('change', option);
        line.dispatchEvent(event); }
    play.disabled = false; }

function select_onchange(ev) {
    let text = document.getElementById('text');
    text.value = epi[ev.target.value]; }
