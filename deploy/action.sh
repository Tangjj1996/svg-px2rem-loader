#!/usr/bin/env sh

set -e

VERSION=`node deploy/select-cli.js`

echo "release $VERSION"

npm version $VERSION -m "[release] $VERSION"
npm publish