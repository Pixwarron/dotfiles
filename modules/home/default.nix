{inputs, username, host, ...}: {
imports =
  [(import ./hyprland)]
  ++ [(import ./theme.nix)]
  ++ [(import ./utilities)]
  ++ [(import ./coding.nix)]
  ++ [(import ./comms.nix)]
  ++ [(import ./gaming.nix)]
  ++ [(import ./scripts)]
  ++ [(import ./swaync/swaync.nix)]
  ++ [(import ./browser.nix)];
}
