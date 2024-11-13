{ pkgs, config, inputs, ... }: {
  home.packages = with pkgs; [
    nixfmt
    nodejs_22
    nodePackages."@angular/cli"
    nodePackages.typescript
    nodePackages.ts-node
    nodePackages.nodemon
    go
    ];

  programs.gh = { enable = true; };

  programs.vscode = {
    enable = true;
    enableUpdateCheck = true;
    enableExtensionUpdateCheck = true;

    userSettings = {
      "git.enableSmartCommit" = true;
      "git.confirmSync" = false;
      "workbench.colorTheme" = "Catppuccin Mocha";
      "workbench.iconTheme" = "catppuccin-mocha";
      "explorer.confirmDragAndDrop" = false;
      "window.menuBarVisibility" = "toggle";
      "editor.fontFamily" =
        "'JetBrainsMono Nerd Font', 'SymbolsNerdFont', 'monospace', monospace";
      "editor.fontVariations" = false;
      "editor.fontLigatures" = false;
    };
    extensions = with pkgs.vscode-extensions; [
      bbenoist.nix
      catppuccin.catppuccin-vsc
      catppuccin.catppuccin-vsc-icons
      brettm12345.nixfmt-vscode
      esbenp.prettier-vscode
    ];
  };
}
