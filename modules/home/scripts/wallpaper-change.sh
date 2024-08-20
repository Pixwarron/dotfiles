directory=~/dotfiles/wallpapers
hyprpaper=false

while [ true ]; do
    if [ $hyprpaper == true ]; then
        if [ -d "$directory" ]; then
            # Get current background and a inital random background
            current_background=$(hyprctl hyprpaper listloaded)
            random_background=$(ls $directory | shuf -n 1)

            # repeat until random background is not the same as the current one
            while [ "$directory/$random_background" == "$current_background" ]; do
                random_background=$(ls $directory | shuf -n 1)
            done

            hyprctl hyprpaper unload all -q
            hyprctl hyprpaper preload $directory/$random_background -q
            hyprctl hyprpaper wallpaper ",$directory/$random_background" -q

        fi
    else
        if [ -d "$directory" ]; then
            # Get current background and a inital random background
            current_background=$(swww query | awk NR==1{'print $8'})
            random_background=$(ls $directory | shuf -n 1)

            # repeat until random background is not the same as the current one
            while [ "$directory/$random_background" == "$current_background" ]; do
                random_background=$(ls $directory | shuf -n 1)
            done

            swww img $directory/$random_background --transition-type any --transition-fps 60
        fi
    fi
    sleep 300
done