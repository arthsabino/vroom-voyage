import { Car } from "@/@types/car";
import { Rent } from "@/@types/rent";
import { Branch } from "@/@types/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "./consts";

export function useBranchList() {
  const [branchList, setBranchList] = useState<Branch[]>([]);

  useEffect(() => {
    const fetchBranchList = async () => {
      await axios
        .get(API_URL.getBranchList)
        .then((res) => {
          if (res && res.data) {
            setBranchList(res.data ?? []);
          }
        })
        .catch(console.error);
    };
    fetchBranchList();
    return () => {
      setBranchList([]);
    };
  }, []);

  return {
    branchList,
  };
}

export function useCarByShortName(shortName: string | undefined) {
  const [car, setCar] = useState<Car | null>(null);
  useEffect(() => {
    const fetchCarByShortName = async () => {
      await axios
        .get(API_URL.getCars + "/" + shortName)
        .then((res) => {
          if (res && res.data) {
            setCar(res.data);
          }
        })
        .catch(console.error);
    };

    if (shortName) {
      fetchCarByShortName();
    }
  }, [shortName]);

  return {
    car,
  };
}

export function useRentDatesByCarId(carId: string) {
  const [dates, setDates] = useState<[Date, Date][]>([]);
  useEffect(() => {
    const filterRentDatesByCarId = async () => {
      await axios
        .get(API_URL.filterRent + "?carId=" + carId)
        .then((res) => {
          if (res && res.data) {
            const rents: Rent[] = res.data;
            setDates(
              rents.map((r) => [
                new Date(r.startDate as string),
                new Date(r.endDate as string),
              ])
            );
          }
        })
        .catch(console.error);
    };

    if (carId) {
      filterRentDatesByCarId();
    }
  }, [carId]);

  return { dates };
}
