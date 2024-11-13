{ pkgs, ... }: 
{
  home.packages = (with pkgs; [
    (retroarch.override {
      cores = with libretro; [
        mgba
        desmume
        citra
        dolphin
        mupen64plus
      ];
    })
    ryujinx
    prismlauncher
  ]);
}