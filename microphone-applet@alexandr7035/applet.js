const Applet = imports.ui.applet;
const Main = imports.ui.main;
const PopupMenu = imports.ui.popupMenu;

class MicApplet extends Applet.IconApplet {

    constructor(metadata, orientation) {
        super(metadata, orientation)

        global.logError("start applet")

        try {
        // this.set_applet_icon_name("icon");
        this.set_applet_icon_name("mic_icon");
        this.set_applet_tooltip(_("Control microphone level with the applet"));


        this.menuManager = new PopupMenu.PopupMenuManager(this);

        this.menu = new Applet.AppletPopupMenu(this, this.orientation);
        this.menuManager.addMenu(this.menu);

        this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem());

        this._contentSection = new PopupMenu.PopupMenuSection();
        this.menu.addMenuItem(this._contentSection);


        }
        catch (e) {
            global.logError(e);
        }
    
    }

    on_applet_clicked() {
        gl_log("click applet")
        this.menu.toggle();
        gl_log("after toggle")
    }
}

function main(orientation) {
    return new MicApplet(orientation);
}

function gl_log(message) {
    global.log(" " + message)
}
