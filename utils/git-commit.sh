#!/bin/bash

export ORIGINAL_PATH=`pwd`

for name in packages/* *
do
  if [ -d "${name}/.git" ]; then
    echo commiting ${name}
    cd ${name}
    # check if we have unstaged, uncommit changes
    git add --all .
    if ! git diff-index --quiet HEAD --; then
      git commit -m "$1"
    fi
    cd ${ORIGINAL_PATH}
    echo
  fi
done
