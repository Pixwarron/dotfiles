{ inputs, pkgs, ... }:
{
  imports = [ inputs.catppuccin.homeManagerModules.catppuccin ];
  catppuccin.flavor = "mocha";

  catppuccin.enable = true;
  gtk.catppuccin.enable = true;
}