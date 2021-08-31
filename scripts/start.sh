#!/usr/bin/env bash

BUILD_CONTAINER="--build"

# Check if build is required
if [ "$1" == "${BUILD_CONTAINER}" ]; then
    echo "Building docker images..."
    docker-compose build
fi

echo "Starting ui containers..."
docker-compose up -d

# Install any new package dependencies
echo "Installing dependency packages..."
docker container exec -i smp-kepler-ui bash -c "npm install"
docker container logs -f smp-kepler-ui
