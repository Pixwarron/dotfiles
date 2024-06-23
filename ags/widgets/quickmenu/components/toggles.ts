import icons from "icons"
import Gtk from "types/@girs/gtk-3.0/gtk-3.0"
import { IconProps } from "types/widgets/icon"
const network = await Service.import('network')
const bluetooth = await Service.import('bluetooth')

const reveal = Variable('')
App.connect("window-toggled", (_, name: string, visible: boolean) => {
    if (name === "quickmenu" && !visible)
        Utils.timeout(500, () => reveal.value = "")
})

type ToggleItemProps = {
    icon: IconProps['icon']
    label: string
    service: any
    condition: () => boolean
    toggle?: () => void
}

function toggleItem({icon, label, service, condition, toggle}:ToggleItemProps) {
    return Widget.Button({
        class_name: 'toggle_item',
        hexpand: true,
        child: Widget.Box({
            spacing: 5,
            vpack: 'center',
            children: [
                Widget.Icon({icon: icon}),
                Widget.Label({label: label}),
            ]
        }),
        setup: self => self.hook(service, () => {
            self.toggleClassName('toggle_item_active', condition())
        }),
        on_primary_click: toggle,
    })
}

type ArrowToggleItemProps = {
    icon: IconProps['icon']
    label: string
    service: any
    condition: () => boolean
    toggle?: () => void
    child?: Gtk.Widget
}

function arrowToggleItem({icon, label, service, condition, toggle, child = Widget.Box()}:ArrowToggleItemProps) {
    return Widget.Button({
        class_name: 'toggle_item',
        hexpand: true,
        child: Widget.Box({
            vertical: true,
            vpack: 'center',
            children: [
                Widget.Box({
                    spacing: 5,
                    children: [
                        Widget.Icon({icon: icon}),
                        Widget.Label({label: label}),
                        Widget.Box({
                            hexpand: true,
                            hpack: 'end',
                            child: Widget.Icon({
                                icon: icons.system.ui.arrow.right
                            })
                        })
                    ]
                }),
                Widget.Revealer({
                    reveal_child: reveal.bind().as(v => v === label),
                    transitionDuration: 1000,
                    transition: 'slide_down',
                    child: child
                })
            ]
        }),
        setup: self => self.hook(service, () => {
            self.toggleClassName('toggle_item_active', condition())
        }),
        on_primary_click: toggle,
        on_secondary_click: () => {
            reveal.setValue(label)
        }
    })
}

type ToggleRowProps = {
    children: Gtk.Widget[]
}

function toggleRow({children}: ToggleRowProps) {
    return Widget.Box({
        class_name: 'toggle_row',
        homogeneous: true,
        spacing: 5,
        children: children
    })
}

export function Toggles() {
    return Widget.Box({
        class_name: 'toggle_box',
        vertical: true,
        children: [
            toggleRow({
                children: [
                    toggleItem({
                        icon: network.bind('primary').as(n => icons.system.services.network[n ? 'wired': 'wifi.strong']),
                        label: 'Network',
                        service: network,
                        condition: () => {
                            if (network.wired.internet == 'connected' || network.wifi.enabled) {
                                return true
                            } else {
                                return false
                            }
                        },
                        toggle: () => {},
                    }),
                    arrowToggleItem({
                        icon: bluetooth.bind('enabled').as(b => icons.system.services.bluetooth[b ? 'on': 'off']),
                        label: 'Bluetooth',
                        service: bluetooth,
                        condition: () => bluetooth.enabled,
                        toggle: () => {
                            bluetooth.enabled = !bluetooth.enabled
                        },
                        child: Widget.Label({label: 'Test'})
                    }),
                ]
            })
        ]
    })
}