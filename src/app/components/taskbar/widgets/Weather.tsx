import {Grid, Card, Paper} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import axios from "axios";
import {useEffect, useState} from "react";
import Image from "next/image";
import InteractiveMap from "./InteractiveMap";

type Response = {
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

export default function Weather() {
  const [data, setData] = useState<Response | null>(null);
  const temp = `${data?.response[0].periods[0].tempF}`.slice(0, 2);
  const lat = data!.response[0].loc.lat ? data!.response[0].loc.lat : 47.5
  const long = data!.response[0].loc.long ? data!.response[0].loc.long : -121.5

  useEffect(() => {
    axios
      .get<Response>(
        "https://api.aerisapi.com/conditions/kenner,la?format=json&plimit=1&filter=1min&"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid item xs={6} className="h-[350px] mb-3">
      <Card className="h-full relative">
        <Paper className="h-full p-3">
          <div className="flex justify-between">
            <div className="flex">
              <h5>{data ? data!.response[0].place.name : "Loading..."}</h5>
              <ExpandMore />
            </div>
            <MoreHoriz />
          </div>

          <div className="h-1/4 flex align-items-center">
            <Image
              src="/../public/weather.png"
              height={30}
              width={70}
              alt="weather widget"
              quality={100}
            />
            <h1>{temp}</h1>
          </div>

          <InteractiveMap lat={lat} long={long} />
        </Paper>
      </Card>
    </Grid>
  );
}
