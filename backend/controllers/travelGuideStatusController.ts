import { TravelGuideStatus } from "@prisma/client";
import { prisma } from "../src/lib/prisma";
import { defaultTravelGuideStatus } from "../util/consts";

export const getDefaultTravelGuideStatus = async () => {
  const defaultTravelGuideStatusFromDB =
    (await prisma.travelGuideStatus.findFirst({
      where: { name: defaultTravelGuideStatus },
    })) as TravelGuideStatus;

  return defaultTravelGuideStatusFromDB;
};
