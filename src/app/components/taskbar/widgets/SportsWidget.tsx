import axios from "axios";
import {Grid, Card, Paper} from "@mui/material";

import GameCard from "./GameCard";

export default function SportsWidget() {
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
