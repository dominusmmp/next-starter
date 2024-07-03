{ pkgs }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_22
    pkgs.bun
  ];
  idx.extensions = [ ];
  env = {
    PORT = 3000;
  };
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
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}
