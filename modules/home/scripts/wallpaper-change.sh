#!/usr/bin/env bash

directory=~/dotfiles/wallpapers
monitor=`hyprctl monitors | grep Monitor | awk '{print $2}'`

if [ -d "$directory" ]; then
    random_background=$(ls $directory | shuf -n 1)
    echo $directory/$random_background

    hyprctl hyprpaper unload all
    hyprctl hyprpaper preload $directory/$random_background
    hyprctl hyprpaper wallpaper ",$directory/$random_background"

fi