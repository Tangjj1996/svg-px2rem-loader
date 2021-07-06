#!/usr/bin/env bash

set -e

yarn build

VERSION=`node deploy/select-cli.js`

git add -A
git commit -m "feat: [release] $VERSOIN"
npm version $VERSION
npm publish --tag

echo -e "\033[32mrelease: $VERSION\033[0m"