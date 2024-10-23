import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Seed for the Book model
  const book1 = await prisma.book.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
    },
  });

  const book2 = await prisma.book.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "What's new in Prisma? (Q1/22)",
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
    },
  });

  // Seed for the Article model
  const article1 = await prisma.article.upsert({
    where: { title: 'Prisma Adds MongoDB' },
    update: {},
    create: {
      title: 'Prisma  goDB',
      body: 'Support for since the initial release of...',
      description: 'We are excited   adds stable support for MongoDB!',
      published: false,
    },
  });

  const article2 = await prisma.article.upsert({
    where: { title: "What's new " },
    update: {},
    create: {
      title: "What's new ",
      body: 'Our engineer issuing new releases with many improvements...',
      description: 'Learn about   from January to March 2022.',
      published: true,
    },
  });

  // Log the seeded data
  console.log({ book1, book2, article1, article2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
