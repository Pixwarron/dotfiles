{ inputs, pkgs, ... }:
{
  home.packages = with pkgs; [
    hyprpaper
  ];
  xdg.configFile."hypr/hyprpaper.conf".text = ''
    preload = ~/dotfiles/wallpapers/vibrant-landscape-2560x1440-17436.jpg
    wallpaper = , ~/dotfiles/wallpapers/vibrant-landscape-2560x1440-17436.jpg
  '';
}