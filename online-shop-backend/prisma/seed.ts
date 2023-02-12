import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { states } from './seed.data';

const prisma = new PrismaClient();

async function main() {
  for (const state of states) {
    const stateCreated = await prisma.state.upsert({
      where: { id: randomUUID() },
      update: {},
      create: {
        name: state.name,
        uf: state.uf,
      },
    });

    for (const city of state.cities) {
      await prisma.city.upsert({
        where: { id: randomUUID() },
        update: {},
        create: {
          name: city,
          stateId: stateCreated.id,
        },
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
