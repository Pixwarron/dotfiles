import Notification from 'widgets/notification/Notification'
import { Bar } from './widgets/bar/Bar'
import { Launcher } from 'widgets/launcher/Launcher'
import Quickmenu from 'widgets/quickmenu/Quickmenu'
import { Powermenu } from 'widgets/powermenu/Powermenu'
import { WorkspacePickerWindow } from 'widgets/workspaces/Workspaces'
import 'createStyle'


App.config({
    windows: [
        Bar(0),
        Bar(1),
        Bar(2),
        Notification(1),
        Quickmenu(0),
        Launcher,
        Powermenu,
        WorkspacePickerWindow
    ],
})