import {Grid, Card, Paper} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import axios from "axios";

export default function Weather() {
  return (
    <Grid item xs={6} className="h-[350px] mb-3">
      <Card className="h-full relative">
        <Paper className="h-full p-3">
          <div className="flex justify-between">
            <div className="flex">
              <h5>Kenner</h5>
              <ExpandMore />
            </div>
            <MoreHoriz />
          </div>
          <div className="border-2 border-red-400 h-1/4"></div>
        </Paper>
      </Card>
    </Grid>
  );
}
