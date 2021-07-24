#!/usr/bin/env bash

set -e

yarn build

VERSION=`node deploy/select-cli.js`

rm -rf dist

npm run test
npm run build

git add -A
npm version --force $VERSION -m "feat: [release] v$VERSION success"
npm publish

git push orgin master
git push --tags

echo -e "\033[32m 🎁 congratulation~ you have released: \033[1mv$VERSION\033[0m"