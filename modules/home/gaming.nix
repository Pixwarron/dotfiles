{ pkgs, ... }: 
{
  home.packages = (with pkgs; [
    retroarch-full
    ryujinx
    prismlauncher
    alvr
    parsec-bin
  ]);
}