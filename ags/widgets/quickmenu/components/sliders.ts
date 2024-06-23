import icons from "icons"

const audio = await Service.import('audio')

export function Sliders() {
    /** @param {'speaker' | 'microphone'} type */
    const VolumeSlider = (type = 'speaker') => Widget.Slider({
        hexpand: true,
        drawValue: false,
        onChange: ({ value }) => audio[type].volume = value,
        value: audio[type].bind('volume'),
    })

    return Widget.Box({
        class_name: 'sliders_box',
        children: [
            Widget.Button({
                class_name: 'sliders_button',
                on_clicked: () => audio['speaker'].is_muted = !audio['speaker'].is_muted,
                child: Widget.Icon({
                    icon: audio.speaker.bind('volume').as(vol => {
                        return audio.speaker.is_muted ? icons.system.services.volume.muted : icons.system.services.volume.high
                    })
                })
            }),
            VolumeSlider('speaker')
        ]
    })
}