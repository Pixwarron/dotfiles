import notifications from "types/service/notifications";

export default {
    system: {
        distribution: 'distributor-logo-archlinux',
        windows: 'preferences-desktop-remote-desktop',
        power: {
            off: 'system-shutdown',
            reboot: 'system-reboot',
            logout: 'system-log-out',
            lock: 'system-lock-screen'
        },
        theme: {
            light: '',
            dark: 'night-light-symbolic',
        },
        notifications: {
            unread: 'user-available',
            read: 'user-offline',
        },
        ui : {
            arrow: {
                right: 'pan-end'
            }
        },
        services: {
            volume: {
                high: 'audio-volume-high',
                medium: 'audio-volume-medium',
                low: 'audio-volume-low',
                muted: 'audio-volume-muted'
            },
            microphone: {
                high: 'microphone-sensitivity-high',
                medium: 'microphone-sensitivity-medium',
                low: 'microphone-sensitivity-low',
                muted: 'microphone-sensitivity-muted',
            },
            bluetooth: {
                on: 'bluetooth-active-symbolic',
                off: 'bluetooth-disabled-symbolic'
            },
            network: {
                wired: 'network-wired',
                wifi: {
                    strong: 'network-wireless-signal-excellent',
                    good: 'network-wireless-signal-good',
                    ok: 'network-wireless-signal-ok',
                    weak: 'network-wireless-signal-weak',
                    none: 'network-wireless-signal-none',
                }
            }
        }
    },
}