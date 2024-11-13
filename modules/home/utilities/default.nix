{inputs, username, host, ...}: {
imports =
  [(import ./basics.nix)]
  ++ [(import ./utils.nix)]
  ++ [(import ./media.nix)];
}
