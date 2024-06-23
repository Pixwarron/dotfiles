import icons from "icons"

const network = await Service.import('network')
const audio = await Service.import("audio")
const bluetooth = await Service.import("bluetooth")

export function System() {
    // Color Picker
// FIX onclick did not work, on release did
const colorPicker = Widget.Button({
    class_name: 'colorpicker',
    on_primary_click_release: () => Utils.execAsync('hyprpicker -a'),
    child: Widget.Icon('gtk-color-picker')
})

// Network
const networkIndicator = () => Widget.Icon({class_name: 'network'}).hook(network, self => {
    const icon = network[network.primary || "wifi"]?.icon_name
    self.icon = icon || ""
    self.visible = !!icon
})

// Bluetooth
const bluetoothIndicator = () => Widget.Overlay({
    class_name: "bluetooth",
    passThrough: true,
    child: Widget.Icon({
        icon: icons.system.services.bluetooth.on,
        visible: bluetooth.bind("enabled"),
    })
})

// Audio
const audioIndicator = () => Widget.Icon({
    class_name: 'audio',
    icon: audio.speaker.bind("volume").as(vol => {
        const cons = [[101, 'audio-volume-overamplified-symbolic'], [67, icons.system.services.volume.high], [34, icons.system.services.volume.medium], [1, icons.system.services.volume.low], [0, icons.system.services.volume.muted]] as const
        const icon = cons.find(([n]) => n <= vol * 100)?.[1] || ""
        return audio.speaker.is_muted ? icons.system.services.volume.muted : icon
    }),
})

const quickSettignsNew = Widget.Button({
    on_clicked: () => App.ToggleWindow('quickmenu'),
    child: Widget.Box({
        spacing: 5,
        children: [
            networkIndicator(),
            bluetoothIndicator(),
            audioIndicator(),
        ],
    })
})

const quickSettigns = Widget.EventBox({
    on_scroll_up: () => audio.speaker.volume = audio.speaker.volume + 0.1,
    on_scroll_down: () => audio.speaker.volume = audio.speaker.volume - 0.1,
    child: Widget.Box({
        spacing: 5,
        children: [
            networkIndicator(),
            bluetoothIndicator(),
            audioIndicator(),
        ],
    })
})

    return Widget.Box({
        class_name: 'custom_btn',
        spacing: 5,
        children: [
            colorPicker,
            quickSettignsNew,
        ]
    })
}