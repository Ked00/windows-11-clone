import {useIsShowing} from "@/app/hooks/isShowing";
import IconButton from "../../IconButton";
import {Drawer, Grid, Card, Paper} from "@mui/material";
import Weather from "./Weather";
import {Response} from "../../../business-logic/api/api-types/weatherResponse";
import {Image} from "react-bootstrap";

type Props = {
  data: Response | undefined;
  temp: string;
  lat: number;
  long: number;
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
            <Weather data={props.data} temp={props.temp} lat={props.lat} long={props.long} />

            <Grid item xs={5.5} className="ml-3 mb-3">
              <Card className="h-2/4 p-3">
                <div className="flex mb-3">
                  <Image
                    src="https://i.ytimg.com/vi/scFQaqRzC7A/hqdefault.jpg"
                    height="1px"
                    width="30px"
                    alt="weather widget"
                  />
                  <span className="mx-3">The outsiders</span>
                </div>
                <h5>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                </h5>
              </Card>
              <Card className="h-2/4">
                <p>hello</p>
              </Card>
            </Grid>

            <Grid item xs={6} className="h-[350px] mb-3">
              <Card className="h-full relative">
                <Paper>
                  <h5>Kenner</h5>
                </Paper>
              </Card>
            </Grid>

            <Grid item xs={5.5} className="ml-3 mb-3">
              <Card className="h-2/4">
                <p>hello</p>
              </Card>
              <Card className="h-2/4">
                <p>hello</p>
              </Card>
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
