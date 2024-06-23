#!/bin/bash

theme='Catppuccin-Mocha-Standard-Blue-Dark'
icons='Papirus-Dark'
font='Noto Sans 11'

schema='gsettings set org.gnome.desktop.interface'

apply_themes() {
    ${schema} gtk-theme "$theme"
    ${schema} icon-theme "$icons"
    #${schema} cursor-theme "$cursor"
    #${schema} font-name "$font"
}

apply_themes