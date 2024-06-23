const hyprland = await Service.import('hyprland')

const WINDOW_NAME = 'workspace_picker'

function getIcon(name: String) {
    if (name == 'scratchpad') return 'terminal'
    if (name == 'mail') return 'thunderbird'
    if (name == 'discord') return 'discord'
}

const workspaceItem = (id: number, name: String) => {
    if (id < 0 && name != 'special:scratchpad') {
        return Widget.Button({
            class_name: '',
            vpack: 'center',
            hexpand: false,
            onPrimaryClick: () => {
                Utils.execAsync(`hyprctl dispatch togglespecialworkspace ${name.split(":")[1]}`)
                App.toggleWindow(WINDOW_NAME)
            },
            child: Widget.Icon(getIcon(name.split(":")[1]))
        })
    } else {
        return Widget.Box()
    }
}

const WorkspacePicker = Widget.Box({
    class_name: 'workspace_picker',
    children: hyprland.workspaces.map(w => workspaceItem(w.id, w.name)),
    setup: self => self
            .hook(hyprland, () => self.children = hyprland.workspaces.map(w => workspaceItem(w.id, w.name)), 'workspace-added')
            .hook(hyprland, () => self.children = hyprland.workspaces.map(w => workspaceItem(w.id, w.name)), 'workspace-removed')
})

export const WorkspacePickerWindow = Widget.Window({
    class_name: 'workspace_picker_window',
    name: WINDOW_NAME,
    setup: self => self.keybind("Escape", () => {
        App.closeWindow(WINDOW_NAME)
    }),
    visible: false,
    keymode: 'exclusive',
    child: WorkspacePicker
})