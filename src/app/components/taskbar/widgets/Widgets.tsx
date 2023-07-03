import {useIsShowing} from "@/app/hooks/isShowing";
import IconButton from "../../IconButton";
import {Drawer, Grid, Card, Paper} from "@mui/material";
import Weather from "./Weather";
import {Response} from "../../../business-logic/api/api-types/weatherResponse";
import NewsCard from "./NewsCard";
import {newsResponse} from "@/app/business-logic/api/api-types/newsResponse";

type Props = {
  weatherData: Response | undefined;
  temp: string;
  lat: number;
  long: number;
  newsData: newsResponse | undefined;
};

export default function Widgets(props: Props) {
  const showing = useIsShowing(false);
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
        iconCSs="p-1"
        buttonCss="h-full"
        width={40}
        height={40}
        onClicked={showing.reverseState}
      />

      <Drawer
        open={showing.isShowing}
        onClose={showing.reverseState}
        PaperProps={style}
        hideBackdrop={true}
      >
        <div className=" w-3/4 ml-24">
          <h1 className="text-center">3:50 PM</h1>
          <Grid container>
            <Weather
              weatherData={props.weatherData}
              temp={props.temp}
              lat={props.lat}
              long={props.long}
            />

            <Grid item xs={5.5} className="ml-3 mb-3">
              <NewsCard
                title={props.newsData?.articles[0].title}
                image={props.newsData?.articles[0].urlToImage}
                name={props.newsData?.articles[0].source.name}
              />
              <NewsCard
                title={props.newsData?.articles[1]?.title}
                image={props.newsData?.articles[1]!.urlToImage}
                name={props.newsData?.articles[1]!.source.name}
              />
            </Grid>

            <Grid item xs={6} className="h-[350px] mb-3">
              <Card className="h-full relative">
                <Paper>
                  <h5>Kenner</h5>
                </Paper>
              </Card>
            </Grid>

            <Grid item xs={5.5} className="ml-3 mb-3">
              <NewsCard
                title={props.newsData?.articles[2].title}
                image={props.newsData?.articles[2].urlToImage}
                name={props.newsData?.articles[2].source.name}
              />
              <NewsCard
                title={props.newsData?.articles[3]!.title}
                image={props.newsData?.articles[3]!.urlToImage}
                name={props.newsData?.articles[3]!.source.name}
              />
            </Grid>

            <Grid item xs={6} className=" h-[350px] mr-2">
              <Card className="h-full relative">
                <Paper>
                  <h5>Kenner</h5>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={5.7} className=" h-[350px]">
              <Card className="h-full relative">
                <Paper>
                  <h5>Kenner</h5>
                </Paper>
              </Card>
            </Grid>

            <Grid item xs={17} className="h-[175px]">
              <Card className="h-full relative mt-3">
                <Paper>
                  <h5>Kenner</h5>
                </Paper>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Drawer>
    </>
  );
}
