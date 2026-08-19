import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined');
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

const missions = [
  {
    title: 'Primeiros Passos',
    description: 'Complete o cadastro na plataforma.',
    points: 50,
  },
  {
    title: 'Explorador',
    description: 'Visualize a lista de missões disponíveis.',
    points: 75,
  },
  {
    title: 'Persistente',
    description: 'Complete sua primeira missão.',
    points: 100,
  },
  {
    title: 'Competidor',
    description: 'Alcance pelo menos 250 pontos.',
    points: 150,
  },
  {
    title: 'Mestre das Missões',
    description: 'Complete todas as missões disponíveis.',
    points: 300,
  },
];

async function main() {
  for (const mission of missions) {
    await prisma.mission.upsert({
      where: {
        title: mission.title,
      },
      update: {
        description: mission.description,
        points: mission.points,
      },
      create: mission,
    });
  }

  console.log(`${missions.length} missions seeded successfully.`);
}

main()
  .catch((error: unknown) => {
    console.error('Failed to seed missions:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });