function button_action(el) {
    let i = 0;
    let id;
    let proc = () => {
        i += 45;
        let str = `skew(15deg, 15deg) rotate3D(0,-1,0,${i}deg)`;
        ev.target.style.transform = str;
        if (i >= 360) clearInterval(id); };
    id = setInterval(proc, 50); }
