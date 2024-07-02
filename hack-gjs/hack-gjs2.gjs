import 'gi://Gtk?version=4.0';
 
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
 
export const Win = GObject.registerClass({
    GTypeName: 'Win'
}, class Win extends Gtk.ApplicationWindow {
    _init(a) {
        super._init({application: a});
    }
});
 
const app = new Gtk.Application();
app.connect('activate', ()=> {new Win(app).present();});
app.run(null);

