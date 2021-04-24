#
# @author Ranjoy Sen
# @email ranjoy.sen@rockwellcollins.com
# @create date 2021-01-10 12:10:53
# @modify date 2021-01-10 12:10:53
# @desc PWA Asset generator and any app. Follow readme file before running this script
#


echo "Copy icon-source.png from icon-source";
cp event-grid-app/src/assets/icon-source/icon-source.png ./

echo "Copy icon-source.svg from icon-source";
cp event-grid-app/src/assets/icon-source/icon-source.svg ./

echo "Generate pwa splash";
pwa-asset-generator icon-source.svg ./splash-screens --splash-only --background "#E5561A"

echo "Copy newly generated splash to";
cp -a ./splash-screens event-grid-app/src/assets/

echo "Create icons";
mkdir ./icons

echo "Genarate favicon";
sips -z 96 96 icon-source.png --out ./icons/favicon.png

echo "Genarate apple-icon-180";
sips -z 180 180 icon-source.png --out ./icons/apple-icon-180.png

echo "Genarate icon-48x48";
sips -z 48 48 icon-source.png --out ./icons/icon-48x48.png

echo "Genarate icon-72x72";
sips -z 72 72 icon-source.png --out ./icons/icon-72x72.png

echo "Genarate icon-96x96";
sips -z 96 96 icon-source.png --out ./icons/icon-96x96.png

echo "Genarate icon-128x128";
sips -z 128 128 icon-source.png --out ./icons/icon-128x128.png

echo "Genarate icon-144x144";
sips -z 144 144 icon-source.png --out ./icons/icon-144x144.png


echo "Genarate icon-152x152";
sips -z 152 152 icon-source.png --out ./icons/icon-152x152.png


echo "Genarate icon-192x192";
sips -z 192 192 icon-source.png --out ./icons/icon-192x192.png

echo "Genarate icon-384x384";
sips -z 384 384 icon-source.png --out ./icons/icon-384x384.png


echo "Genarate icon-512x512";
sips -z 512 512 icon-source.png --out ./icons/icon-512x512.png


echo "Copy newly icons to";
cp -a ./icons event-grid-app/src/assets/

#echo "Cleanup";
#find . ! -name asset-generator.sh -delete
