{ inputs, pkgs, ... }:
{
  imports = [ inputs.catppuccin.nixosModules.catppuccin ];
  #boot.loader.systemd-boot.enable = true;
  #boot.loader.systemd-boot.configurationLimit = 10;
  
  boot.loader.grub.enable = true;
  boot.loader.grub.device = "nodev";
  boot.loader.grub.efiSupport = true;
  boot.loader.grub.useOSProber = true;

  boot.loader.grub.catppuccin.enable = true;
  boot.loader.grub.catppuccin.flavor = "mocha";

  boot.loader.efi.canTouchEfiVariables = true;
  boot.kernelPackages = pkgs.linuxPackages_latest;
}