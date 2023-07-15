export type Response = {
    success: boolean;
    error: null;
    response: [
      {
        loc: {
          lat: number;
          long: number;
        };
        place: {
          name: string;
          state: string;
          country: string;
        };
        periods: [
          {
            timestamp: number;
            dateTimeISO: string;
            tempC: number;
            tempF: number;
            feelslikeC: number;
            feelslikeF: number;
            dewpointC: number;
            dewpointF: number;
            humidity: number;
            pressureMB: number;
            pressureIN: number;
            windDir: string;
            windDirDEG: number;
            windSpeedKTS: number;
            windSpeedKPH: number;
            windSpeedMPH: number;
            windGustKTS: number;
            windGustKPH: number;
            windGustMPH: number;
            precipMM: number;
            precipIN: number;
            precipRateMM: number;
            precipRateIN: number;
            snowCM: number;
            snowIN: number;
            snowRateCM: number;
            snowRateIN: number;
            pop: number;
            visibilityKM: number;
            visibilityMI: number;
            sky: number;
            cloudsCoded: string;
            weather: string;
            weatherCoded: string;
            weatherPrimary: string;
            weatherPrimaryCoded: string;
            icon: string;
            solradWM2: string;
            uvi: number;
            isDay: boolean;
            spressureMB: number;
            spressureIN: number;
            altimeterMB: number;
            altimeterIN: number;
            solrad: {
              azimuthDEG: number;
              zenithDEG: number;
              ghiWM2: number;
              dniWM2: number;
              dhiWM2: number;
            };
          }
        ];
        profile: {
          tz: string;
          tzname: string;
          tzoffset: number;
          isDST: boolean;
          elevM: number;
          elevFT: number;
        };
      }
    ];
  };