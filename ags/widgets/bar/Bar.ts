import {Clock} from "./components/Clock"
import {Hyprland} from "./components/Hyprland"
import {Launcher} from "./components/Launcher"
import {Notifications} from "./components/NotificationsIndicator"
import {PowerBtn} from "./components/PowerBtn"
import {SysTray} from "./components/SysTray"
import {System} from "./components/System"

export function Bar(monitor: number) {
    const start_bar = Widget.Box({
        class_name: 'bar_module',
        spacing: 8,
        children: [
            Launcher(),
        ]
    })
    const center_bar = Widget.Box({
        class_name: 'bar_module',
        spacing: 8,
        children: [
            Notifications(),
            Clock(),
            SysTray(),
        ]
    })
    const end_bar = Widget.Box({
        class_name: 'bar_module',
        spacing: 8,
        children: [
            System(),
            PowerBtn(),
        ]
    })
    return Widget.Window({
        monitor,
        class_name: "bar_window",
        name: `bar${monitor}`,
        exclusivity: "exclusive",
        anchor: ['top', 'right', 'left'],
        child: Widget.CenterBox({
            class_name: 'bar',
            startWidget: Widget.Box({
                hpack: 'start',
                child: start_bar,
            }),
            centerWidget: Widget.Box({
                hpack: "center",
                child: center_bar,
            }),
            endWidget: Widget.Box({
                hpack: 'end',
                child: end_bar,
            }),
        }),
    })
}