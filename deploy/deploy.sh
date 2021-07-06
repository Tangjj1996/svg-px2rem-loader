#!/usr/bin/env bash

set -e

npm run build

VERSION=$(select-cli.js)

npm version $VERSION -m "[release] $VERSION"

git push --follow-tags

git add -A

git commit -m "release: deploy new version [$VERSION]"

npm publish

echo "release $VERSION"