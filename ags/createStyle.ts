import options from "options"


const style =
`//### Auto Generated Stylesheet ###
$Base: ${options.background.primary};
$Mantle: ${options.background.secondary};
$Crust: ${options.background.tertiary};

$Surface0: ${options.surface.primary};
$Surface1: ${options.surface.secondary};
$Surface2: ${options.surface.tertiary};

$Overlay0: ${options.overlay.primary};
$Overlay1: ${options.overlay.secondary};
$Overlay2: ${options.overlay.tertiary};

$Text: ${options.text.primary};
$Subtext0: ${options.text.secondary};
$Subtext1: ${options.text.tertiary};

$Button0: ${options.buttons.primary};
$Button1: ${options.buttons.secondary};
$Button2: ${options.buttons.tertiary};
`

export async function createStyle() {
    try {
        //Create Stylesheet Typescript file
        const vars = `/tmp/ags/variables.scss`
        await Utils.writeFile(style, vars)

        //Import all other scss files in project
        const all = '/tmp/ags/all.scss'
        const fd = await Utils.execAsync(`fd ".scss" ${App.configDir}`)
        const files = fd.split(/\s+/).map(f => `@import '${f}';`)
        const scss = [`@import '${vars}';`, ...files].join("\n")
        await Utils.writeFile(scss, all)

        //Parse scss to css
        const css = '/tmp/ags/style.css'
        await Utils.execAsync(`sassc ${all} ${css}`)
        App.resetCss()
        App.applyCss(css)
    } catch (error) {
        console.log(error)
    }
}

createStyle()

// Not Currently Used because it is not recursive and doesn't notice changes
Utils.monitorFile(App.configDir, () => {
    console.log('style changed')
    createStyle()
})

export {}