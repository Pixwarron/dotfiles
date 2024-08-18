{ pkgs, ... }:
{
  #boot.loader.systemd-boot.enable = true;
  #boot.loader.systemd-boot.configurationLimit = 10;
  
  boot.loader.grub.enable = true;
  boot.loader.grub.device = "nodev";
  boot.loader.grub.efiSupport = true;
  boot.loader.grub.useOSProber = true;

  boot.loader.efi.canTouchEfiVariables = true;
  boot.kernelPackages = pkgs.linuxPackages_latest;
}