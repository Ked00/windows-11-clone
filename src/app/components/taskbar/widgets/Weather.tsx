import {Grid, Card, Paper} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import Image from "next/image";
import InteractiveMap from "./InteractiveMap";

type Props = {
  weatherData: Response | undefined;
  temp: string;
  lat: number;
  long: number;
};

export default function Weather(props: Props) {
  return (
    <Grid item xs={6} className="h-[350px] mb-3">
      <Card className="h-full relative">
        <Paper className="h-full p-3">
          <div className="flex justify-between">
            <div className="flex">
              <h5>{props.weatherData?.response[0].place.name}</h5>
              <ExpandMore />
            </div>
            <MoreHoriz />
          </div>

          <div className="h-1/4 flex align-items-center">
            <Image
              src="/../public/weather.png"
              height={30}
              width={70}
              alt="weather widget"
              quality={100}
            />
            <h1>{props.temp}</h1>
          </div>

          <InteractiveMap lat={props.lat} long={props.long} />
        </Paper>
      </Card>
    </Grid>
  );
}
