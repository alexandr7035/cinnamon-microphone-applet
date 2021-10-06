const Applet = imports.ui.applet;

function MicApplet(orientation, panel_height, instance_id) {
    this._init(orientation, panel_height, instance_id);
}

MicApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(orientation, panel_height, instance_id) {
        Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

        this.set_applet_icon_name("icon");
        this.set_applet_tooltip(_("Control microphone level with the applet"));
    },

};

function main(metadata, orientation, panel_height, instance_id) {
    return new MicApplet(orientation, panel_height, instance_id);
}