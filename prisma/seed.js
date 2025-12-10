const products = require('../src/data/products');
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

async function main() {
    for (let product of products) {
        await prisma.product.create({
            data: product
        });
    }
    console.log("🌱 Seeding finished!");
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
})