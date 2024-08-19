{ ... }: {
  services = {
    gvfs.enable = true;
    gnome.gnome-keyring.enable = true;
    dbus.enable = true;
    fstrim.enable = true;
    xserver.enable = true;
    displayManager.sddm = {
      enable = true;
      wayland.enable = true;
    };
    displayManager.autoLogin = {
      enable = true;
      user = "jdeboer";
    };
  };
  #services.logind.extraConfig = ''
  # don’t shutdown when power button is short-pressed
  # HandlePowerKey=ignore
  #'';
}
