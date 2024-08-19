{ pkgs, config, inputs, ... }: 
{
    # CLI File Browser
    programs.yazi = {
        enable = true;
    };

    # App Launcher
    programs.fuzzel = {
        enable = true;
    };
}