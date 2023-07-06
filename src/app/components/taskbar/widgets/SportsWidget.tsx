import axios from "axios";
import {Grid, Card, Paper} from "@mui/material";
import {useEffect} from "react";
import GameCard from "./GameCard";

export default function SportsWidget() {
  const options = {
    method: "GET",
    url: "https://sportscore1.p.rapidapi.com/sports/1/players",
    params: {page: "1"},
    headers: {
      ,
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid item xs={6} className=" h-[350px] mr-2">
      <Card className="h-full relative">
        <Paper>
          <GameCard />
          <GameCard />
          <GameCard />
        </Paper>
      </Card>
    </Grid>
  );
}