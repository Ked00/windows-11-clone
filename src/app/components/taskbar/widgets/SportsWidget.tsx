import {Grid, Card, Paper} from "@mui/material";
import {useEffect} from "react";
import GameCard from "./GameCard";
import useLiveMlbGamesInfo from "@/app/business-logic/api/api-calls/liveMlbGamesInfo";
import useScheduledMatchesInfo from "@/app/business-logic/api/api-calls/schedulesMatchinfo";

export default function SportsWidget() {

  return (
    <Grid item xs={6} className=" h-[350px] mr-2">
      <Card className="h-full relative">
        <Paper className="p-2">
          {/* {liveGames.liveMatches.length === 0 ? <p>Live Games</p> : <p>Upcoming games</p>} */}
          <GameCard
            awayTeamName="miami-marlins-king"
            homeTeamName="miami-marlins-king"
            homeTeamScore={0}
            awayTeamScore={0}
          />
          <GameCard
            awayTeamName="miami-marlins-king"
            homeTeamName="miami-marlins-king"
            homeTeamScore={0}
            awayTeamScore={0}
          />
          <GameCard
            awayTeamName="miami-marlins-king"
            homeTeamName="miami-marlins-king"
            homeTeamScore={0}
            awayTeamScore={0}
          />
        </Paper>
      </Card>
    </Grid>
  );
}
