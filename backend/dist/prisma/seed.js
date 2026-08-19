"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../src/generated/prisma/client");
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error('DATABASE_URL is not defined');
}
const adapter = new adapter_pg_1.PrismaPg({
    connectionString,
});
const prisma = new client_1.PrismaClient({
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
    .catch((error) => {
    console.error('Failed to seed missions:', error);
    process.exitCode = 1;
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map