import {Grid, Card, Paper} from "@mui/material";
import {useEffect} from "react";
import GameCard from "./GameCard";
import useLiveMlbGamesInfo from "@/app/business-logic/api/api-calls/liveMlbGamesInfo";
import useScheduledMatchesInfo from "@/app/business-logic/api/api-calls/schedulesMatchinfo";

export default function SportsWidget() {
  const liveGames = useLiveMlbGamesInfo();
  const scheduledGames = useScheduledMatchesInfo(7, 6, 2023);

  useEffect(() => {
    // liveGames.getInfo()
    scheduledGames.getInfo();
  }, []);

  console.log(scheduledGames.scheduledMatches)

  return (
    <Grid item xs={6} className=" h-[350px] mr-2">
      <Card className="h-full relative">
        <Paper>
          <GameCard
            awayTeamName={scheduledGames.scheduledMatches[0].awayTeam.name}
            homeTeamName={scheduledGames?.scheduledMatches[0].homeTeam.name}
          />
          <GameCard
            awayTeamName={scheduledGames.scheduledMatches[1].awayTeam.name}
            homeTeamName={scheduledGames?.scheduledMatches[1].homeTeam.name}
          />
           <GameCard
            awayTeamName={scheduledGames.scheduledMatches[2].awayTeam.name}
            homeTeamName={scheduledGames?.scheduledMatches[2].homeTeam.name}
          />
        </Paper>
      </Card>
    </Grid>
  );
}
