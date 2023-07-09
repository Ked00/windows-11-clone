import {Grid, Card, Paper} from "@mui/material";
import Image from "next/image";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import {useEffect, useRef, useState} from "react"
import "../../../../../styles/globals.css";

type Props = {
  lat: number;
  long: number;
};

export default function TrafficWidget(props: Props) {
  const [map, setMap] = useState({});
  const mapElement = useRef();

  useEffect(() => {
    const map = tt.map({
      key: "GwZGwzhznTIA3uwxHuRFZ24FvwoZkRgd",
      container: mapElement.current!,
      center: [props.long, props.lat],
      zoom: 13,    
    });

    setMap(map);
    return () => map.remove();
  }, []);

  return (
    <Grid item xs={6} className="gridSize mb-3">
      <Card className="h-full relative">
        <Paper className="h-full p-3">
          <div className="flex justify-between">
            <div className="flex">
              <Image
                src="/../public/trafficLight.png"
                height={1}
                width={25}
                alt="windows 11 traffic light"
              />
              <h5>Traffic Cameras</h5>
            </div>
            <MoreHoriz />
          </div>

          <div className="mt-3">
            <h5>1-10 / Loyola Dr (1)</h5>
            <p className="text-gray-600 text-sm">Updated 9 mins ago</p>
          </div>

          <div className="h-4/6 relative" ref={mapElement}></div>
        </Paper>
      </Card>
    </Grid>
  );
}