{ pkgs, ... }: 
{
  hardware.pulseaudio.enable = true;
  hardware.pulseaudio.support32Bit = true; 

  #services.pipewire = {
  #  enable = true;
  #  alsa.enable = true;
  #  alsa.support32Bit = true;
  #  pulse.enable = true;
  #};
  environment.systemPackages = with pkgs; [
    pulseaudioFull
    pavucontrol
  ];
}