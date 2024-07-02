//  簡単なボス機能
//    display_value: 復帰時の .style.display 値、例 inline, table
//    ids: ボスが来たときに .style.display = 'none' したいDOMのID
//    come: .style.display だけで出来ない避難機能
//    away: .style.display だけで出来ない復帰機能
function boss(display_value, come, away, ...ids) {
    return (ev) => {
        if (ev.key == 'Escape') {
            const it = document.getElementById(ids[0]);
            if (it.style.display == display_value) {
                for (var x in ids) {
                    var them = document.getElementById(ids[x]);
                    them.style.display = 'none';
                }
                come();
            } else {
                for (var x in ids) {
                    var them = document.getElementById(ids[x]);
                    them.style.display = display_value;
                }
                away();
            }
        }
    };
}
