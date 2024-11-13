{pkgs, ...}: let
  wallpaper-change = pkgs.writeShellScriptBin "wallpaper-change" (builtins.readFile ./wallpaper-change.sh);
in {
  home.packages = with pkgs; [
    wallpaper-change
  ];

  # systemd.user.services.wallpaper-change = {
  #   Unit = {
  #     Description = "Automatically changes to a random wallpaper in the dotfiles directory";
  #     After = [ "graphical.target" ];
  #   };
  #   Install = {
  #     WantedBy = [ "default.target" ];
  #   };
  #   Service = {
  #     ExecStart = "${wallpaper-change}/bin/wallpaper-change";
  #   };
  # };
}