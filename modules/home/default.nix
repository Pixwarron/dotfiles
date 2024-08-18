{inputs, username, host, ...}: {
imports =
  [(import ./hyprland)]                      # window manager
  ++ [(import ./kitty.nix)]
  ++ [(import ./theme.nix)]
  ++ [(import ./code.nix)]                     # terminal
  ++ [(import ./chrome.nix)];                     # terminal
}
