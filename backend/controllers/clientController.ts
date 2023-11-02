import { Client } from "@prisma/client";
import { prisma } from "../src/lib/prisma";
import { getDefaultClientStatus } from "./clientStatusController";

export const addClient = async (
  fullName: string,
  primaryContact: string
): Promise<Client> => {
  const defaultClientStatusFromDB = await getDefaultClientStatus();
  const client = await prisma.client.create({
    data: {
      fullName,
      primaryContact,
      clientStatusId: defaultClientStatusFromDB.id,
    },
  });

  return client;
};
