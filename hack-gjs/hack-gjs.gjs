//const { Meta, Shell } = imports.gi;
const Main = imports.ui.main;

function moveWindow() {
    let window = global.display.focus_window;
    if (window) {
        window.move_resize_frame(true, 100, 100, 800, 600);
    }
}

moveWindow();

