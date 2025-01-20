import { FusesPlugin } from "@electron-forge/plugin-fuses";
import { FuseV1Options, FuseVersion } from "@electron/fuses";
import { MakerAppImage } from "@reforged/maker-appimage";

export const packagerConfig = {
  asar: true,
  icon: "bambu-connect",
  protocols: [
    {
      name: "bambu-connect",
      schemes: ["bambu-connect"],
    },
  ],
};
export const rebuildConfig = {};
export const makers = [
  new MakerAppImage({
    options: {
      icon: "bambu-connect.png",
      desktopFile: "bambu-connect.desktop",
      AppImageKitRelease: "continuous",
      flagsFile: true,
    },
  }),
];
export const publishers = [
  {
    name: "@electron-forge/publisher-github",
    config: {
      authToken: process.env.GITHUB_TOKEN,
      repository: {
        owner: "j4k0xb",
        name: "bambu-connect-linux",
      },
      draft: process.env.PUBLISHER_GITHUB_DRAFT,
      prerelease: process.env.PUBLISHER_GITHUB_PRERELEASE,
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
