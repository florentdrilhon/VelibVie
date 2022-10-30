import { AppService } from "../services/app.service";
import { useQuery } from "react-query";

const appService = new AppService();

export const useGetStationStatuses = (): any =>
  useQuery(["stationLocations"], appService.getStationsLocation, {
    select: (response) => response?.data?.stations,
  });
