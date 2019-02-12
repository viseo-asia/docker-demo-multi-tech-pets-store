#!/bin/bash

set -e

ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd ${ROOT_DIR}

function startService {
    echo ''
    echo "-- SERVICE: ${1}"
    cd ${ROOT_DIR}/$1
    ../start-service-swarm.sh .
}

startService pets-proxy
startService pets-web-vue
startService pets-web-angular
startService pets-web-react
startService pets-cats
startService pets-dogs
startService pets-hamsters
startService pets-parrots
startService pets-turtles
startService pets-comments
