{ pkgs, config, inputs, ... }: 
{
  home.packages = with pkgs;[
    retroarch
  ];
}