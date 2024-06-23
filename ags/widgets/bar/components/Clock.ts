const date = Variable("", {
    poll: [1000, 'date "+%e %b %H:%M"'],
})

export function Clock() {
    return Widget.Label({
        label: date.bind(),
    })
}

