import {Grid, Card, Paper} from "@mui/material";
import GameCard from "./GameCard";
import Image from "next/image";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

export default function SportsWidget() {
  return (
    <Grid item xs={6} className="gridSize mr-2">
      <Card className="h-full relative">
        <Paper className="p-2 h-full bg-gradient-to-tl from-[#cddfff] from-40% to-[#f0e1f7]">
          <div className="p-2 flex justify-between">
            <div className="w-2/4 flex">
              <Image src="/../public/images/mlb.png" width={25} height={10} alt="mlb logo" className="" />
              <span className="mx-3">MLB</span>
            </div>
            <MoreHoriz />
          </div>
          <p className="p-1 my-2">Recently selected</p>
          
          <GameCard
            awayTeamName="marlins"
            homeTeamName="marlins"
            homeTeamScore={2}
            awayTeamScore={3}
          />
          <GameCard
            awayTeamName="marlins"
            homeTeamName="marlins"
            homeTeamScore={4}
            awayTeamScore={1}
          />
          <GameCard
            awayTeamName="marlins"
            homeTeamName="marlins"
            homeTeamScore={5}
            awayTeamScore={9}
          />
        </Paper>
      </Card>
    </Grid>
  );
}
