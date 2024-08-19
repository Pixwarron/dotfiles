{ pkgs, config, inputs, ... }: {
  home.packages = with pkgs; [ nixfmt ];

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
    ];
  };

  programs.kitty = {
    enable = true;

    #theme = "Catppuccin-Mocha";

    #font = {
    #  name = "JetBrainsMono Nerd Font";
    #  size = 13;
    #};

    settings = {
      confirm_os_window_close = 0;
      background_opacity = "0.55";
      window_padding_width = 10;
      scrollback_lines = 10000;
      enable_audio_bell = false;
      mouse_hide_wait = 60;

      ## Tabs
      tab_title_template = "{index}";
      active_tab_font_style = "normal";
      inactive_tab_font_style = "normal";
      tab_bar_style = "powerline";
      tab_powerline_style = "round";
      active_tab_foreground = "#1e1e2e";
      active_tab_background = "#cba6f7";
      inactive_tab_foreground = "#bac2de";
      inactive_tab_background = "#313244";
    };

    keybindings = {
      ## Tabs
      "alt+1" = "goto_tab 1";
      "alt+2" = "goto_tab 2";
      "alt+3" = "goto_tab 3";
      "alt+4" = "goto_tab 4";

      ## Unbind
      "ctrl+shift+left" = "no_op";
      "ctrl+shift+right" = "no_op";
    };
  };
}
