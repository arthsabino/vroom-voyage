import { ClientStatus } from "@prisma/client";
import { prisma } from "../src/lib/prisma";
import { defaultClientStatus } from "../util/consts";

export const getDefaultClientStatus = async (): Promise<ClientStatus> => {
  const defaultClientStatusFromDB = (await prisma.clientStatus.findFirst({
    where: {
      name: defaultClientStatus,
    },
  })) as ClientStatus;

  return defaultClientStatusFromDB;
};
