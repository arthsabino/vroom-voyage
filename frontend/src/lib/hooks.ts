import { Location } from "@/@types/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "./consts";

export function useLocation() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      await axios
        .get(API_URL.getLocations)
        .then((res) => {
          if (res && res.data) {
            setLocations(res.data ?? []);
          }
        })
        .catch(console.error);
    };
    fetchLocations();
    return () => {
      setLocations([]);
    };
  }, []);

  return {
    locations,
  };
}
