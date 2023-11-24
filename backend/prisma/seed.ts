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
      { name: "NEW" },
      { name: "FOR REVIEW" },
      { name: "REVIEWING" },
      { name: "APPROVED" },
    ],
  });
  await prisma.rentStatus.createMany({
    data: [
      { name: "PENDING" },
      { name: "REVIEWING" },
      { name: "RETURNED" },
      { name: "RESERVED" },
    ],
  });
  await prisma.travelGuideStatus.createMany({
    data: [
      { name: "NEW" },
      { name: "PENDING" },
      { name: "IN PROGRESS" },
      { name: "DONE" },
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
