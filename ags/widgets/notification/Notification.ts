const notifications = await Service.import("notifications");

// Notification Popup
const popupItem = (id: number) => {
    const notification = notifications.getPopup(id);
    // Create a box with all possible actions
    const actions = Widget.Box({
        class_name: "actions",
        children: notification?.actions.map(({ id, label }) => Widget.Button({
            class_name: "action-button",
            on_clicked: () => {
                notification.invoke(id)
                notification.dismiss()
            },
            hexpand: true,
            child: Widget.Label(label),
        })),
    })

    // Create a widget with all the information
    return Widget.EventBox({
        class_name: "popup_item",
        margin: 10,
        onPrimaryClick: () => notification?.dismiss(),
        child: Widget.Box({
            vertical: true,
            children: [
                Widget.Box({
                    children: [
                        Widget.Icon(notification?.app_icon),
                        Widget.Label({ label: notification?.app_name }),
                    ],
                }),
                Widget.Box({
                    vertical: true,
                    children: [
                        Widget.Label({ label: notification?.summary }),
                        actions
                    ],
                }),
            ],
        }),
    });
};

// Return a box with all the popups in it and refresh it each time a notification appears or is dismissed
const popupList = Widget.Box({
    vertical: true,
    children: notifications.popups.map((popup) => popupItem(popup.id)),
    setup: (self) =>
        self
            .hook(
                notifications,
                () =>
                (self.children = notifications.popups.map((popup) =>
                    popupItem(popup.id)
                )),
                "notified"
            )
            .hook(
                notifications,
                () =>
                (self.children = notifications.popups.map((popup) =>
                    popupItem(popup.id)
                )),
                "dismissed"
            ),
});

export default (monitor: number) =>
    Widget.Window({
        monitor,
        class_name: "notification_window",
        name: `notification${monitor}`,
        anchor: ["top", "right"],
        child: Widget.Box({
            css: "min-width: 2px; min-height: 2px;",
            vertical: true,
            children: [popupList],
        }),
    });
