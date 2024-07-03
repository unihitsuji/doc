function _apply(el, procs) {
    if (procs.length > 0)
        procs[0].apply( null, [el].concat(procs.slice(1)) ) }

function siblings(el) {
    let sibs = el.parentNode.getElementsByTagName(el.tagName);
    return Array.from(sibs); }

function shut_formation(el) {
    let id;
    let func = () => {
        let sibs = siblings(el);
        let tail = sibs.length - 1;
        let style_0 = window.getComputedStyle(sibs[0]);
        let left_0  = Number(style_0.marginLeft);
        for (let i in sibs) {
            if ( i == 0 ) continue;
            console.log(`shut_formation: i = ${i} ${sibs[i].textContent}`);
            let style_i = window.getComputedStyle(sibs[i]);
            let left_i  = Number(style_i.marginLeft);
            let d_i = Math.sign(left_0 - left_i) * i;
            console.log(`${left_0} ${left_i} ${d_i}`);
            sibs[i].style.marginLeft = left_i + d_i; }
        let style_n = window.getComputedStyle(sibs[tail]);
        let left_n = Number(style_n.marginLeft);
        let d_n   = Math.sign(left_0 - left_n) * tail;
        if (Math.abs(left0 - leftn) < Math.abs(dxn)) {
            clearInterval(id); } };
    id = setInterval(func, 50); }

function quiet_to_slant(el, ...procs) {
    let i = 0;
    let id;
    let func = () => {
        i += 3;
        let str = `skew(${-3*i}deg)`;
        el.style.transform = str;
        if (i >= 15) {
            clearInterval(id);
            el.setAttribute('data-action', 'slant');
            _apply(el, procs) } };
    id = setInterval(func, 50); }

function slant_to_quiet(el, ...procs) {
    let i = 0;
    let id;
    let func = () => {
        i += 3;
        let str = `skew(${-45+3*i}deg)`;
        el.style.transform = str;
        if (i >= 15) {
            clearInterval(id);
            el.setAttribute('data-action', 'quiet');
            _apply(el, procs) } };
    id = setInterval(func, 50); }

function slant_to_twist(el, ...procs) {
    let i = 0;
    let id;
    let func = () => {
        i += 3;
        let str = `skew(${-45+4*i}deg, ${i}deg)`;
        el.style.transform = str;
        if (i >= 15) {
            clearInterval(id);
            el.setAttribute('data-action', 'twist');
            _apply(el, procs) } };
    id = setInterval(func, 50); }

function twist_to_slant(el, ...procs) {
    let i = 0;
    let id;
    let func = () => {
        i += 3;
        let str = `skew(${15-4*i}deg, ${15-i}deg)`;
        el.style.transform = str;
        if (i >= 15) {
            clearInterval(id);
             el.setAttribute('data-action', 'slant');
            _apply(el, procs) } };
    id = setInterval(func, 50); }

function quiet_kp_spin(el, ...procs) {
    let i = 0;
    let id;
    let func = () => {
        i += 45;
        let str = `rotate3D(0,-1,0,${i}deg)`;
        el.style.transform = str;
        if (i >= 360) {
            clearInterval(id);
             el.setAttribute('data-action', 'quiet');
            _apply(el, procs) } };
    id = setInterval(func, 50); }

function slant_kp_spin(el, ...procs) {
    let i = 0;
    let id;
    let func = () => {
        i += 45;
        let str = `skew(-45deg) rotate3D(0,-1,0,${i}deg)`;
        el.style.transform = str;
        if (i >= 360) {
            clearInterval(id);
             el.setAttribute('data-action', 'slant');
            _apply(el, procs) } };
    id = setInterval(func, 50); }

function twist_kp_spin(el, ...procs) {
    let i = 0;
    let id;
    let func = () => {
        i += 45;
        let str = `skew(15deg, 15deg) rotate3D(0,-1,0,${i}deg)`;
        el.style.transform = str;
        if (i >= 360) {
            clearInterval(id);
             el.setAttribute('data-action', 'twist');
            _apply(el, procs) } };
    id = setInterval(func, 50); }

let action_table = {
    quiet: [quiet_kp_spin, quiet_to_slant],
    slant: [slant_kp_spin, slant_to_quiet, slant_to_twist],
    twist: [twist_kp_spin, twist_to_slant], };

function random_action(el) {
    let now = el.getAttribute('data-action');
    now = now ? now : 'quiet';
    let len = action_table[now].length;
    let act = action_table[now][Math.floor(Math.random() * len)];
    act(el); }
