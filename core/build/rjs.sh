#!/bin/sh
#npm install requirejs -g

echo $(pwd)
cd build
echo $(pwd)

if [ "$1" = "client" ];
then
	node r.js -o ../../html/build/build.js
else
	node r.js -o ../../html/build/webbuild.js
fi