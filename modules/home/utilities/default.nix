{inputs, username, host, ...}: {
imports =
  [(import ./filebrowser.nix)]
  ++ [(import ./media.nix)];
}
