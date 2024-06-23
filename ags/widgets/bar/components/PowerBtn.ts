import icons from "icons";

// Power Button
export function PowerBtn() {
    return Widget.Button({
        onPrimaryClick: () => App.toggleWindow('Powermenu'),
        child: Widget.Icon(icons.system.power.off)
    })
}