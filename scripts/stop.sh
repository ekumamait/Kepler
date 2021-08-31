#!/usr/bin/env bash

echo "Stopping ui infrastructures..."

# Stops ui infrastructures without removing the containers
docker-compose stop
