{ pkgs, ... }: 
{
  imports = [
    ./hardware-configuration.nix
    ./../../modules/core
  ];

  # Videocard Setup
  hardware.graphics = {
    enable = true;
    enable32Bit = true;
  };
  services.xserver.videoDrivers = ["amdgpu"];

  programs.steam = {
    enable = true;
    gamescopeSession.enable = true;
  };

  programs.gamemode.enable = true;

  environment.systemPackages = with pkgs; [
    protonup
    mangohud
  ];

  environment.sessionVariables = {
    STEAM_EXTRA_COMPAT_TOOLS_PATHS = "/home/.steam/root/compatibilitytools.d";
  };
}