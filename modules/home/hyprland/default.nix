{ inputs, ... }: 
{
  imports = [ (import ./hyprland.nix) ]
    ++ [ (import ./config.nix) ]
    ++ [ (import ./hyprpaper.nix) ]
    ++ [ (import ./hyprlock.nix) ]
    ++ [ (import ./waybar) ]
    ++ [ (import ./variables.nix) ];
    #++ [ inputs.hyprland.homeManagerModules.default ];
}