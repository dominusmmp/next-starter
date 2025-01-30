{ pkgs }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_22
    pkgs.bun
  ];
  idx.extensions = [ ];
  idx.workspace.onCreate = {
    deps-install = "bun install";
  };
  idx.previews = {
    previews = {
      web = {
        command = [
          "bun"
          "run"
          "dev"
          "--"
          "--port"
          "3000"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}
