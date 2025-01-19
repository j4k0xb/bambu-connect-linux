import { FusesPlugin } from "@electron-forge/plugin-fuses";
import { FuseV1Options, FuseVersion } from "@electron/fuses";
import { MakerAppImage } from "@reforged/maker-appimage";

export const packagerConfig = {
  asar: true,
};
export const rebuildConfig = {};
export const makers = [
  new MakerAppImage({
    options: {
      // Package name.
      name: "bambu-connect",
      // Executable name.
      bin: "bambu-connect",
      // Human-friendly name of the application.
      productName: "Bambu Connect (Beta)",
      // `GenericName` in generated `.desktop` file.
      genericName: "Bambu Connect",
      // Path to application's icon.
      icon: "icon.png",
      // Desktop file to be used instead of the configuration above.
      // desktopFile: "/path/to/example-app.desktop",
      // Release of `AppImage/AppImageKit`, either number or "continuous".
      AppImageKitRelease: "continuous",
      // Support parsing Arch Linux '*_flags.conf' file.
      flagsFile: true,
    },
  }),
];
export const publishers = [
  {
    name: "@electron-forge/publisher-github",
    config: {
      repository: {
        owner: "j4k0xb",
        name: "bambu-connect",
      },
      prerelease: true,
    },
  },
];
export const plugins = [
  // Fuses are used to enable/disable various Electron functionality
  // at package time, before code signing the application
  new FusesPlugin({
    version: FuseVersion.V1,
    [FuseV1Options.RunAsNode]: true,
    [FuseV1Options.EnableCookieEncryption]: true,
    [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: true,
    [FuseV1Options.EnableNodeCliInspectArguments]: true,
    [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: false,
    [FuseV1Options.OnlyLoadAppFromAsar]: false,
  }),
];
