{ inputs, username, host, ... }: {
  imports = [ (import ./default.nix) ] ++ [ (import ./gaming.nix) ];
}
