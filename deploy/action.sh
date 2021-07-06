#!/usr/bin/env bash

set -e

yarn build

VERSION=`node deploy/select-cli.js`


npm version $VERSION -m "[release] $VERSION"
npm publish
echo -e "\033[32mrelease: $VERSION\033[0m"