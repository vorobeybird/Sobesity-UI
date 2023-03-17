#! /usr/bin/env bash
set -xe

# auth in gitlab npm
echo "//gitlab.godeltech.com/api/v4/projects/3127/packages/npm/:_authToken=${CI_PUSH_TOKEN}" >> .npmrc

npm ci
