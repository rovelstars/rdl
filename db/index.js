const { PrismaClient } = require('@prisma/client')
const ioredis = require("ioredis");
const redis = new ioredis();
const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })