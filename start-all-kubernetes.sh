#!/bin/bash

set -e

ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd ${ROOT_DIR}

# To Reset all services
# kubectl get all \
#     | grep pets \
#     | grep -v replicaset.apps \
#     | grep -v pod \
#     | cut -f1 -d" " \
#     | xargs kubectl delete > /dev/null || true

# sleep 5

function startService {
    echo ''
    echo "-- SERVICE: ${1}"
    cd ${ROOT_DIR}/$1
    ../start-service-kubernetes.sh .
}

startService pets-proxy-kubernetes
startService pets-web-vue
startService pets-web-angular
startService pets-web-react
startService pets-cats
startService pets-dogs
startService pets-hamsters
startService pets-parrots
startService pets-turtles
startService pets-comments
