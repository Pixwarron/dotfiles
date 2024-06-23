import icons from "icons";

export function Launcher() {
    return Widget.Box({
        children: [
            Widget.Button({
                class_name: 'bar_launcher',
                on_primary_click: () => App.toggleWindow('Launcher'),
                child: Widget.Icon({icon: icons.system.distribution}),
            }),
            Widget.Button({
                class_name: 'bar_win_launcher',
                on_primary_click: () => {
                    Utils.execAsync('virsh start win11')
                    Utils.execAsync('virt-viewer -c qemu:///system win11 -f')
                },
                child: Widget.Icon({icon: icons.system.windows})
            })
        ]
    })
}