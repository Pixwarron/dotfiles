{
    description = "My System Configuration";

    inputs = {
        nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

        home-manager = {
            url = "github:nix-community/home-manager";
            inputs.nixpkgs.follows = "nixpkgs";
        };

        catppuccin.url = "github:catppuccin/nix";

        swww.url = "github:LGFae/swww";
    };

    outputs = { nixpkgs, self, ...} @ inputs:
        let
            username = "jdeboer";
            system = "x86_64-linux";
            pkgs = import nixpkgs {
                inherit system;
                config.allowUnfree = true;
            };
    lib = nixpkgs.lib;
        in {
        nixosConfigurations = {
            desktop = nixpkgs.lib.nixosSystem {
                inherit system;
                modules = [ (import ./hosts/desktop) ];
                specialArgs = { host="desktop"; inherit self inputs username ; };
        };
        };
    };
}