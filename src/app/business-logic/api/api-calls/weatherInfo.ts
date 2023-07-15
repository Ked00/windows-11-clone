import {useState} from "react";
import axios from "axios";
import {Response} from "../api-types/weatherResponse";

type outPut = {
  data: Response | undefined;
  temp: string;
  lat: number;
  long: number;
  getInfo: () => void;
};

export default function useWeatherInfo(): outPut {
  const [data, setData] = useState<Response | undefined>(undefined);
  const temp = `${data?.response[0].periods[0].tempF}`.slice(0, 2);
  const lat = data?.response[0].loc.lat ? data!.response[0].loc.lat : 47.5;
  const long = data?.response[0].loc.long ? data!.response[0].loc.long : -121.5;

  function getInfo() {
    axios
      .get<Response>(
        "https://api.aerisapi.com/conditions/kenner,la?format=json&plimit=1&filter=1min&client_id=OSobwDW7mgt0pXlx55HVQ&client_secret=mqbsZRnL1opLjBCvhAW6Za4ejxcxJP8V3qOgouTY"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }

  return {
    data: data,
    temp: temp,
    lat: lat,
    long: long,
    getInfo: getInfo,
  };
}
