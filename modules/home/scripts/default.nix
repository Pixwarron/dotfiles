{pkgs, ...}: let
  wallpaper-change = pkgs.writeShellScriptBin "wallpaper-change" (builtins.readFile ./wallpaper-change.sh);
in {
  home.packages = with pkgs; [
    wallpaper-change
  ];
}