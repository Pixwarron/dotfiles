#!/bin/bash

INSTALLPATH="$(pwd)"

command_exists() {
    command -v $1 >/dev/null 2>&1
}

installDeps() {
    # Check for yay otherwise install
    if ! command_exists yay; then
        echo "Installing the AUR helper yay..."
        sudo pacman -S --needed git base-devel --noconfirm
        cd /tmp && sudo git clone https://aur.archlinux.org/yay.git
        cd yay
        sudo makepkg -si --noconfirm
        cd ${INSTALLPATH}
    else
        echo "yay is already installed!"
    fi

    # Install Hyprland
    if ! command_exists Hyprland; then
        echo "Installing Hyprland..."
        yay -S hyprland hyprpaper hyprpicker hypridle hyprlock hyprcursor xdg-desktop-portal-hyprland --answerdiff None --answerclean None
    else
        echo "Hyprland is already installed!"
    fi

    # Install AGS
    if ! command_exists ags; then
        echo "Installing AGS..."
        yay -S aylurs-gtk-shell --answerdiff None --answerclean None
    else
        echo "AGS is already installed!"
    fi
}

copyConfigs() {
    echo "Copying config files..."
    \cp -rf ./ags ~/.config/ags
    \cp -rf .hypr ~/.config/hypr
}

installDeps
copyConfigs