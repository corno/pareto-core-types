#!/usr/bin/env bash

scriptDir=`realpath $(dirname "$0")`
rootDir="$scriptDir/../.."

#the scriptsdir will be deleted, change to the root
cd "$rootDir" && \

#make sure everything is pushed
git push && \

#validate that everything is committed and pushed (to make sure we're not messing with open work)
git diff --exit-code && git log origin/master..master --exit-code && \

rm -rf "$rootDir/pub/dist" && \
pushd "$rootDir/pub" && \
tsc && \
popd && \

#validate that everything is still committed after the update and build
git diff --exit-code && git log origin/master..master --exit-code && \

pushd "$rootDir/pub" > /dev/null && \
npm version patch && \
npm publish