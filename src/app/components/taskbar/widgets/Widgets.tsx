import {useIsShowing} from "@/app/hooks/isShowing";
import IconButton from "../../IconButton";
import {Drawer, Grid} from "@mui/material";
import Weather from "./Weather";
import {Response} from "../../../business-logic/api/api-types/weatherResponse";
import NewsCard from "./NewsCard";
import {newsResponse} from "@/app/business-logic/api/api-types/newsResponse";
import TrafficWidget from "./TrafficWidget";
import SportsWidget from "./SportsWidget";
import useDateAndTime from "@/app/hooks/dateAndTime";
import FullSizeNewsCard from "./FullSizeNewsCard";
import WideNewsCard from "./WideNewsCard";

type Props = {
  weatherData: Response | undefined;
  temp: string;
  lat: number;
  long: number;
  newsData: newsResponse | undefined;
};

export default function Widgets(props: Props) {
  const showing = useIsShowing(false);
  const current = useDateAndTime();
  const style = {
    sx: {
      backgroundColor: "#eaeaea40",
      width: "70%",
      minHeight: "500px",
      maxHeight: "750px",
      margin: "12px 0 0 12px",
      borderRadius: "8px",
    },
  };

  return (
    <>
      <IconButton
        src="weather.png"
        alt="weather icon"
        variant="light"
        buttonCss="h-full"
        width={40}
        height={40}
        onClicked={showing.reverseState}
      />

      <Drawer
        open={showing.isShowing}
        onClose={showing.reverseState}
        PaperProps={style}
        hideBackdrop={false}
      >
        <div className="flex justify-center">
          <div className="w-3/4">
            <h1 className="text-center my-4">{current.time}</h1>
            <Grid container spacing={1}>
              <Weather
                weatherData={props.weatherData}
                temp={props.temp}
                lat={props.lat}
                long={props.long}
              />
              <Grid item xs={6} className="mb-3">
                <NewsCard
                  title={props.newsData?.articles[0].title}
                  image={props.newsData?.articles[0].urlToImage}
                  name={props.newsData?.articles[0].source.name}
                  marginBottom={true}
                  classname=" bg-gradient-to-r from-[#d5f0cb] from-40% to-[#e7ebc4]"
                />
                <NewsCard
                  title={props.newsData?.articles[1]?.title}
                  image={props.newsData?.articles[1]!.urlToImage}
                  name={props.newsData?.articles[1]!.source.name}
                  classname=" bg-gradient-to-r from-[#dad7d7] from-40% to-[#b3b2b2]"
                />
              </Grid>
              <TrafficWidget lat={props.lat} long={props.long} />
              <Grid item xs={6} className="mb-3">
                <NewsCard
                  title={props.newsData?.articles[2].title}
                  image={props.newsData?.articles[2].urlToImage}
                  name={props.newsData?.articles[2].source.name}
                  marginBottom={true}
                  classname=" bg-gradient-to-r from-[#e0eaef] from-40% to-[#d0edec]"
                />
                <NewsCard
                  title={props.newsData?.articles[3]!.title}
                  image={props.newsData?.articles[3]!.urlToImage}
                  name={props.newsData?.articles[3]!.source.name}
                  classname=" bg-gradient-to-r from-[#ece9c2] from-40% to-[#eee4da]"
                />
              </Grid>
              <SportsWidget />
              <FullSizeNewsCard
                title={props.newsData?.articles[5].title}
                image={props.newsData?.articles[5].urlToImage}
                name={props.newsData?.articles[5].source.name}
              />
              <WideNewsCard
                title={props.newsData?.articles[7].title}
                image={props.newsData?.articles[7].urlToImage}
                name={props.newsData?.articles[7].source.name}
              />
            </Grid>
          </div>
        </div>
      </Drawer>
    </>
  );
}
