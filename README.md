# Bambu Connect for Linux

This repo extracts the MacOs version of [Bambu Connect](https://wiki.bambulab.com/en/software/bambu-connect) and repackages it for Linux as an AppImage.

You can download it from the [Releases](https://github.com/j4k0xb/bambu-connect-linux/releases/latest) page or build it yourself:

```sh
./scripts/download.sh
npm run make
```

For debugging:

```sh
npm start -- --inspect-electron
```

> [!TIP]
> Consider using [webcrack](https://github.com/j4k0xb/webcrack) to make the minified code more readable.
