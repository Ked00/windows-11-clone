import axios from "axios";
import {useState} from "react";

type outPut = {
  liveMatches: liveMatchesResponse | undefined;
  getInfo: () => void;
};

export default function useLiveMlbGamesInfo(): outPut {
  const [liveMatches, setLiveMatches] = useState<liveMatchesResponse | undefined>(undefined);

  const options = {
    method: "GET",
    url: "https://baseballapi.p.rapidapi.com/api/baseball/matches/live",
    headers: {
      "X-RapidAPI-Key": "21d2c7a22fmshf5f05c75bacb94fp1c26aejsn040dab709365",
      "X-RapidAPI-Host": "baseballapi.p.rapidapi.com",
    },
  };
  function getInfo() {
    axios
      .request(options)
      .then((res) => setLiveMatches(res.data))
      .catch((err) => console.log(err));
  }

  return {
    liveMatches: liveMatches,
    getInfo: getInfo,
  };
}
