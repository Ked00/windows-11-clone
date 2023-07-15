import axios from "axios";
import {useState} from "react";

type outPut = {
  getInfo: () => void;
  scheduledMatches: scheduledMatchesResponse | string;
};

export default function useScheduledMatchesInfo(month: number, day: number, year: number): outPut {
  const [scheduledMatches, setScheduledMatches] = useState<scheduledMatchesResponse | string>("");

  const options = {
    method: "GET",
    // pass in todays date
    url: `https://baseballapi.p.rapidapi.com/api/baseball/matches/${month}/${day}/${year}`,
    headers: {
      "X-RapidAPI-Key": "21d2c7a22fmshf5f05c75bacb94fp1c26aejsn040dab709365",
      "X-RapidAPI-Host": "baseballapi.p.rapidapi.com",
    },
  };
  function getInfo() {
    axios
      .request(options)
      .then((res) => setScheduledMatches(res.data.events))
      .catch((err) => console.log(err));
  }

  return {
    getInfo: getInfo,
    scheduledMatches: scheduledMatches,
  };
}
