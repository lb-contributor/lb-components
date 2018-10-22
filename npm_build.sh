#!/bin/sh

rm -rf lib

npx tsc

if [ $? -eq 0 ]; then
  cp components/table/style/*.scss lib/table/style
fi
