{ pkgs, config, inputs, ... }: 
{
    home.packages = (with pkgs; [
    freecad
    remmina
  ]);
}