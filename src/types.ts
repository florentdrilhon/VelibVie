export type StationLocalisationT = {
  stationId: number;
  name: string;
  lat: number;
  lon: number;
  capacity: number;
  stationCode: string;
  rentalMethods?: string[];
};

export type StationStatusT = {
  stationCode: string;
  stationId: number;
  numBikesAvailable: number;
  numBikesAvailableTypes: [{ eBike: number }, { mechanical: number }];
  numDocksAvailable: number;
  isInstalled: number;
  isReturning: number;
  isRenting: number;
  lastReported: number;
};

export type StationDetailInformationT = {
  gps: {
    latitude: number;
    longitude: number;
  };
  // TODO: find if state is an enum
  state: string;
  name: string;
  code: string;
  type: string;
  dueDate: number;
};

export enum YesOrNo {
  YES = "yes",
  NO = "no",
}

export enum BikeAvailableness {
  AVAILABLE = "disponible",
  UNAVAILABLE = "indisponible",
}

export type BikeDetailT = {
  dockPosition: string;
  bikeName: string;
  bikeElectric: YesOrNo;
  bikeStatus: BikeAvailableness;
  bikeRate: number;
  numberOfRates: number;
  lastRateDate: string;
};

export type StationDetailsT = {
  station: StationDetailInformationT;
  nbBike: number;
  nbEbike: number;
  nbFreeDock: number;
  nbFreeEDock: number;
  creditCard: YesOrNo;
  nbDock: number;
  nbEDock: number;
  nbBikeOverflow: number;
  nbEBikeOverflow: number;
  kioskState: string;
  overflow: YesOrNo;
  overflowActivation: YesOrNo;
  maxBikeOverflow: number;
  densityLevel: number;
  bikes: BikeDetailT[];
};
