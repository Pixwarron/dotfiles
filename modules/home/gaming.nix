{ pkgs, ... }: {
  home.packages = with pkgs; [ mangohud ];

  programs.steam = {
    enable = true;
    gamescopeSession.enable = true;
  };

  programs.gamemode.enable = true;
}
