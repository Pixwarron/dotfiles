import { Sliders } from "./components/sliders";
import { Toggles } from "./components/toggles";

export default (monitor: number) =>
    Widget.Window({
        class_name: 'quickmenu_window',
        name: 'quickmenu',
        anchor: ["top", "right"],
        visible: false,
        setup: self => self.keybind("Escape", () => {
            App.closeWindow('quickmenu')
        }),
        child: Widget.Box({
            class_name: 'quickmenu_box',
            vertical: true,
            css: 'min-width: 300px;',
            children: [
                Sliders(),
                Toggles()
            ],
        }),
    });