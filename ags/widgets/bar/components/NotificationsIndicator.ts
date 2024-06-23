const notifications = await Service.import("notifications")

export function Notifications() {
    const getVisible = () => {
        if (notifications.notifications.length > 0)
            return true
        return false
    }
    
    function tempnotificationIcon() {
        return Widget.Box({
            children: [Widget.Icon('user-available')],
            setup: self => self
                .hook(notifications, () => self.visible = getVisible(), 'notified')
                .hook(notifications, () => self.visible = getVisible(), 'closed')
        })
    }
    return Widget.EventBox({
        class_name: 'custom_btn',
        child: tempnotificationIcon(),
        onPrimaryClick: () => Utils.execAsync('notify-send "Test" --icon=google-chrome'),
        onSecondaryClick: () => notifications.clear()
    })
}

