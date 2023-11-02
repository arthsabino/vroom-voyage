import { RentStatus } from "@prisma/client";
import { prisma } from "../src/lib/prisma";
import { defaultRentStatus, reservedRentStatus } from "../util/consts";

export const getDefaultRentStatus = async (): Promise<RentStatus> => {
  const defaultRentStatusFromDB = (await prisma.rentStatus.findFirst({
    where: {
      name: defaultRentStatus,
    },
  })) as RentStatus;

  return defaultRentStatusFromDB;
};

export const getReservedRentStatus = async (): Promise<RentStatus> => {
  const reservedRentStatusFromDB = (await prisma.rentStatus.findFirst({
    where: {
      name: reservedRentStatus,
    },
  })) as RentStatus;

  return reservedRentStatusFromDB;
};
