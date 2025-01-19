#!/bin/sh

ASAR_KEY=B0AE6995063C191D2B404637FBC193AE10DAB86A6BC1B1DE67B5AEE6E03018A2

wget "https://public-cdn.bblmw.com/upgrade/bambu-connect/bambu-connect-beta-darwin-arm64-v1.0.4_4bb9cf0.dmg" -O bambu-connect.dmg
7z x bambu-connect.dmg
npx asarfix "Bambu Connect (Beta)/Bambu Connect (Beta).app/Contents/Resources/app.asar" -k "$ASAR_KEY" -o fixed.asar
npx asar extract fixed.asar src

rm src/package.json src/icon.icns

# asarmor wraps the code in an exported function and calls it from the native code
echo "module.exports();" >> src/.vite/build/main.js
