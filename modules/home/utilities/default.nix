{inputs, username, host, ...}: {
imports =
  [(import ./basics.nix)]
  ++ [(import ./media.nix)];
}
