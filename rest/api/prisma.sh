#!/bin/sh
C_GREEN='\033[0;32m'

set -e

printf "${C_GREEN}> Waiting for Postgres to finish initializing...\n"

while ! curl http://kp-db:5432/ 2>&1 | grep '52'
do
  printf "${C_GREEN}...DB ping...\n"
  sleep 1
done

printf "${C_GREEN}> Postgres is initialized\n"

yarn prisma migrate dev || true

yarn format:generated

