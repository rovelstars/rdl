<div align='center'>
  <img src="https://discord.rovelstars.com/assets/img/bot/logo.svg" height='100px' width='100px' />
  <h1>Rovel Discord List</h1>
  <h3>The Ultimate Discord List for Emojis, Users, Servers & Bots!</h3>
</div>

<br />

> ## The rewrite has been started! Join our [server](https://dscrdly.com/server) for more details

<br />


## Where is the old codebase?

### It can be found at [rovelstars/discord-list](https://github.com/rovelstars/discord-list)

# Please star that discord-list repo instead of this one! We will exchange repos once this rewrite goes into beta!

---

## This Readme will change soon to keep everything updated!

# Setup for development (This changes with every update to our codebase and is not guaranteed to be stable)

> If you are going to contribute, please have a comment on top of every line (atleast almost every line) of code you are going to code, that will help everyone (and co pilot for those who use co pilot) to know what you are doing. This will also help everyone to learn what did the code do, in future.

# The below code runs only on Ubuntu 21.10 version (x64 - AMD64), update your system and then continue. (You can probably get a ubuntu docker for this building and starting code), if you want to run on a different system, try to follow similar steps and hopefully it should be built. You can get the postgresql apt repos from [here](https://www.postgresql.org/download/linux/ubuntu/), or similar pages.
## Use the following command to install the dependencies, please read the installdeps.sh file to learn what will happen before you run it, we are not responsible for any damage caused by running this command. (Like messing up your sources.list or your whole installation. Learn what's going on and then only continue.)

```bash
# install postgresql and other libraries from ubuntu repository that is required to compile c++ codes
# we expect you to run this in home directory
chmod a+x ./installdeps.sh
./installdeps.sh

# now we are going to nvm, nodejs v17.4.0, pnpm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install 17.4.0
corepack pnpm@6.28.0

# now we are going to install dependencies of frontend, we expect you know nodejs, remixjs, typescript, reactls, tailwindcss, for this
# cd discord-list 
cd frontend && pnpm i

# moving over to db, we expect you know nodejs, prisma, postgresql basics
cd ../db && pnpm i

# we used cpm.cmake to provide every package be installable project-wide and not globally, that saves everyone from a lot of troubles, and lets you all to build c++ codes on another os, arch and/or distros. The drawback is that you need to build the dependencies and the code, please build it. In future we may ship builds for the version we stated above, where everyone can download and paste them to your respective folders. Try not to run clean command on the project, it will remove all the builds of dependencies and the code, and you will have to build them again.

# moving over to backend, we expect you know c++, oatpp & zeromq if you are going to develop backend server
cd ../backend && pnpm i && pnpm run build
# learn the scripts from backend/package.json
# if you need to again run a clean install and build of backend, run the following command: "pnpm run clean && pnpm i && pnpm run build"

# moving over to bot, we expect you know c++, dpp & zeromq if you are going to develop bot
cd ../bot && pnpm i && pnpm run build
# learn the scripts from bot/package.json
# if you need to again run a clean install and build of bot, run the following command: "pnpm run clean && pnpm i && pnpm run build"
```

> Please make an issue if you think anything is missing, and/or if you got any questions. It's a huge trouble for us to provide support for self deployment (previously we didn't provide support for self hosting, but now we want to try our best to provide help! You can now ask help in our server too! This should be POG!), so bear with us, let us know if anything goes wrong! Although me (@renhiyama) runs it directly on ubuntu on real daily usage machine, you are not suggested to run this directly on your pc without emulation/containerization, atleast not in this alpha stages of the rewrite. Please run a vm or use docker if you don't want to mess up your pc and/or installation.