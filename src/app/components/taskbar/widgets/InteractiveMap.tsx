import AerisWeather from "@aerisweather/javascript-sdk";
import "@aerisweather/javascript-sdk/dist/styles/styles.css";
import {useEffect} from "react";

type Props = {
  lat: number;
  long: number;
};

export default function InteractiveMap(props:Props) {
  const aeris = new AerisWeather(
    "",
    ""
  );

  aeris.views().then((views) => {
    const map = new views.InteractiveMap("#map", {
      strategy: "leaflet",
      zoom: 4,
      layers:
        "flat-dk:blend(color-burn),water-depth,rivers,roads,admin,ftemperatures-max,admin-cities-dk",
    });

    map.on("ready", () => {
      map.setCenter({lat: props.lat, lon: props.long});
      map.setZoom(6);
    });
  });

  return <div id="map" className="h-2/4 w-full rounded"></div>;
}
