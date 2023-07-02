import {Grid, Card, Paper} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import axios from "axios";
import {useEffect, useState} from "react";
import Image from "next/image";

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

  useEffect(() => {
    axios
      .get<Response>(
        "https://api.aerisapi.com/conditions/kenner,la?format=json&plimit=1&filter=1min&client_id=OSobwDW7mgt0pXlx55HVQ&client_secret=mqbsZRnL1opLjBCvhAW6Za4ejxcxJP8V3qOgouTY"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [data?.response[0]]);

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
            <div>
              <Image
                src="/../public/weather.png"
                height={30}
                width={70}
                alt="weather widget"
                quality={100}
              />
              <h1>{data?.response[0].periods[0].tempF}</h1>
            </div>
            <div className="flex">
              <Image
                src="/../public/weather.png"
                height={5}
                width={10}
                alt="weather widget"
                quality={100}
              />
              <p>Hello this is the weather</p>
              <ExpandMore />
            </div>
          </div>
        </Paper>
      </Card>
    </Grid>
  );
}
