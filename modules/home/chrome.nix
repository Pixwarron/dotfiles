{ pkgs, config, inputs, ... }: 
{
  home.packages = with pkgs;[
    google-chrome
  ];
}