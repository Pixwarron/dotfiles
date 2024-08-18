{ inputs, pkgs, ... }:
{
  imports = [ inputs.catppuccin.nixosModules.catppuccin ];
  catppuccin.flavor = "mocha";

  catppuccin.enable = true;
}