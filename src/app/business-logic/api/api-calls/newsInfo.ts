import {useState} from "react";
import axios from "axios";
import {newsResponse} from "../api-types/newsResponse";

type outPut = {
  data: newsResponse | null;
  getInfo: () => void;
};

export default function useNewsInfo(): outPut {
  const [data, setData] = useState<newsResponse | null>(null);

  function getInfo() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=98dd4448fc4e4950bdfeb5f4c1ad68d5"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
  
  return {
    data: data,
    getInfo: getInfo,
  };
}
