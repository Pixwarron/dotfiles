directory=~/dotfiles/wallpapers

while [ true ]; do
    if [ -d "$directory" ]; then
        # Get current background and a inital random background
        current_background=$(hyprctl hyprpaper listloaded)
        random_background=$(ls $directory | shuf -n 1)

        # repeat until random background is not the same as the current one
        while [ "$directory/$random_background" == "$current_background" ]; do
            random_background=$(ls $directory | shuf -n 1)
        done

        hyprctl hyprpaper unload all
        hyprctl hyprpaper preload $directory/$random_background
        hyprctl hyprpaper wallpaper ",$directory/$random_background"

    fi
    sleep 300
done