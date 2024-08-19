{inputs, username, host, ...}: {
imports =
  [(import ./hyprland)]
  ++ [(import ./theme.nix)]
  ++ [(import ./coding.nix)]
  ++ [(import ./browser.nix)];
}
