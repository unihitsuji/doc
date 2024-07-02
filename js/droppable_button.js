function droppable_button(id, proc) {
    let bt = document.getElementById(id);
    //  dragover イベントを以下のようにしないと drop イベントは発生しない
    bt.addEventListener('dragover', (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = 'move';
    });
    //  drop イベントを受け取る
    bt.addEventListener('drop', (ev) => {
        ev.preventDefault();
        proc(ev);
    });
}
