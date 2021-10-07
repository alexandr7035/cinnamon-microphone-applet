const Applet = imports.ui.applet;
const Main = imports.ui.main;

class MicApplet extends Applet.IconApplet {
    constructor(metadata, orientation, panel_height, instance_id) {
        super(metadata, orientation, panel_height, instance_id)

        // this.set_applet_icon_name("icon");
        this.set_applet_icon_name("mic_icon");
        this.set_applet_tooltip(_("Control microphone level with the applet"));

    }

    on_applet_clicked() {
         
    }
}

function main(metadata, orientation, panel_height, instance_id) {
    return new MicApplet(metadata, orientation, panel_height, instance_id);
}
