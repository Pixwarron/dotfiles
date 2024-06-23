const hyprland = await Service.import('hyprland')

export function Hyprland() {
    // Workspace Widget
    const workspaceItem = (id: number) => {
        if (id > 0) {
            return Widget.Button({
                class_name: 'bar_workspace_button',
                vpack: 'center',
                hexpand: false,
                onPrimaryClick: () => hyprland.messageAsync(
                    `dispatch workspace ${id}`
                ),
                on_secondary_click: () => console.log(id),
                child: Widget.Box({
                    class_name: 'bar_workspace_indicator',
                    setup: self => self.hook(hyprland, () => {
                        self.toggleClassName('bar_workspace_indicator_active', hyprland.active.workspace.id == id)
                    })
                }),
            })
        } else {
            return Widget.Box()
        }
    }
    const workspaces = Widget.Box({
        spacing: 5,
        children: hyprland.workspaces.map(w => workspaceItem(w.id)),
        setup: self => self
            .hook(hyprland, () => self.children = hyprland.workspaces.map(w => workspaceItem(w.id)), 'workspace-added')
            .hook(hyprland, () => self.children = hyprland.workspaces.map(w => workspaceItem(w.id)), 'workspace-removed')
    })
    return Widget.Box({
        class_name: 'bar_hyprland',
        vpack: 'center',
        spacing: 8,
        children: [
            workspaces,
        ]
    })
} 