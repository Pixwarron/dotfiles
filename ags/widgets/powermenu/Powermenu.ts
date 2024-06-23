import icons from "icons"

const WINDOW_NAME = 'Powermenu'

const PowerItem = (icon: any, command: string) => Widget.Button({
    class_name: 'powermenu_item',
    child: Widget.Icon(icon),
    on_clicked: () => {
        App.closeWindow(WINDOW_NAME)
        Utils.execAsync(command)
    }
})

const PowerPicker = Widget.Box({
    class_name: 'powermenu_picker',
    children: [
        PowerItem(icons.system.power.lock, 'hyprlock'),
        PowerItem(icons.system.power.logout, 'systemctl suspend'),
        PowerItem(icons.system.power.reboot, 'reboot'),
        PowerItem(icons.system.power.off, 'shutdown 0')
    ]
})

export const Powermenu = Widget.Window({
    class_name: 'powermenu_window',
    name: WINDOW_NAME,
    setup: self => self.keybind("Escape", () => {
        App.closeWindow(WINDOW_NAME)
    }),
    visible: false,
    keymode: 'exclusive',
    child: PowerPicker
})