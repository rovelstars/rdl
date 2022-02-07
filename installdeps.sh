#!/usr/bin/bash
echo "Should be ran on Ubuntu 21.10 x64 [AMD64] (or any similar linux distro with this version only, if you don't have, get upgraded to this version)"
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt install libjsoncpp-dev postgresql-14 libspdlog-dev libsodium23 linux-headers-`uname -r` gcc g++ cmake make htop zlib1g-dev openssl libssl-dev uuid-dev postgresql-server-dev-all libtool pkg-config build-essential autoconf automake libzmq3-dev libhiredis-dev