#!/bin/sh

echo Downloading bambu-connect.dmg...
curl -s "https://public-cdn.bblmw.com/upgrade/bambu-connect/v1.1.3/bambu-connect-beta-darwin-arm64-v1.1.3_2c73d82.dmg" -o bambu-connect.dmg

echo Extracting dmg...
rm -rf "Bambu Connect (Beta)"
7z x bambu-connect.dmg

echo Extracting asar...
rm -rf src
npx asar extract "Bambu Connect (Beta)/Bambu Connect (Beta).app/Contents/Resources/app.asar" src
rm -rf "Bambu Connect (Beta)"

rm src/package.json
