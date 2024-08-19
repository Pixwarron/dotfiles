{ inputs, pkgs, ... }:
{
  imports = [ inputs.catppuccin.homeManagerModules.catppuccin ];

  catppuccin.enable = true;
  catppuccin.flavor = "mocha";
}