import { Branch } from "@prisma/client";
import { RequestHandler } from "express";
import { prisma } from "../src/lib/prisma";

export const getBranchList: RequestHandler = async (req, res, next) => {
  try {
    const branchList = await prisma.branch.findMany();
    res.status(200).json(branchList);
  } catch (error) {
    next(error);
  }
};

export async function getBranchByName(name: string): Promise<Branch> {
  const branch = (await prisma.branch.findFirst({
    where: {
      name: {
        equals: name as string,
        mode: "insensitive",
      },
    },
  })) as Branch;

  return branch;
}
