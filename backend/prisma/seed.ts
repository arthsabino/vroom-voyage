import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  await prisma.branch.deleteMany();
  await prisma.clientStatus.deleteMany();
  await prisma.rentStatus.deleteMany();
  await prisma.branch.createMany({
    data: [
      { name: "Los Baños, Laguna" },
      { name: "Angono, Rizal" },
      { name: "Pasig City, NCR" },
    ],
  });
  await prisma.clientStatus.createMany({
    data: [
      { name: "NEW", color: "text-red-600" },
      { name: "FOR REVIEW", color: "text-orange-600" },
      { name: "REVIEWING", color: "text-cyan-300" },
      { name: "APPROVED", color: "text-green-400" },
    ],
  });
  await prisma.rentStatus.createMany({
    data: [
      { name: "PENDING", color: "text-red-600" },
      { name: "REVIEWING", color: "text-orange-600" },
      { name: "RETURNED", color: "text-cyan-300" },
      { name: "RESERVED", color: "text-green-400" },
    ],
  });
  await prisma.travelGuideStatus.createMany({
    data: [
      { name: "NEW", color: "text-red-600" },
      { name: "PENDING", color: "text-orange-600" },
      { name: "IN PROGRESS", color: "text-cyan-300" },
      { name: "DONE", color: "text-green-400" },
    ],
  });
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
