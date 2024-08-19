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

    # System Monitor
    programs.btop = {
        enable = true;
    };

    # System Info
    programs.fastfetch = {
        enable = true;
    };
}