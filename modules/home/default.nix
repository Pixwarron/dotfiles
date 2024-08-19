{inputs, username, host, ...}: {
imports =
  [(import ./hyprland)]
  ++ [(import ./theme.nix)]
  ++ [(import ./utilities)]
  ++ [(import ./coding.nix)]
  ++ [(import ./comms.nix)]
  ++ [(import ./browser.nix)];
}
