const Applet = imports.ui.applet;
const Main = imports.ui.main;

class MicApplet extends Applet.IconApplet {
    constructor(metadata) {
        super(metadata)

        global.logError("start applet")

        try {
        // this.set_applet_icon_name("icon");
        this.set_applet_icon_name("mic_icon");
        this.set_applet_tooltip(_("Control microphone level with the applet"));
        }
        catch (e) {
            global.logError(e);
          }
    
    }

    on_applet_clicked() {
         
    }
}

function main(orientation) {
    return new MicApplet(orientation);
}
