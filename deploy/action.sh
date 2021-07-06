#!/usr/bin/env bash

set -e

yarn build

VERSION=`node deploy/select-cli.js`

git add -A
npm version --force $VERSION -m "feat: [release] v.$VERSION success"
npm publish

echo -e "\033[32m 🎁 congratulation~ you have released: \0333[1mv.$VERSION\033[0m"