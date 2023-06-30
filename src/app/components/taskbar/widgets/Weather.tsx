import {useIsShowing} from "@/app/hooks/isShowing";
import IconButton from "../../IconButton";
import {Drawer, Grid, Card} from "@mui/material";

export default function Weather() {
  const showing = useIsShowing(false);
  const style = {
    sx: {
      backgroundColor: "#eaeaea40",
      width: "50%",
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
        <div className="border-2 border-red-400 w-3/4 ml-16">
          <h1 className="text-center">3:50 PM</h1>
          <Grid container>
            <Grid item xs={6} className="h-[350px]">
              <Card className="h-full">

              </Card>
            </Grid>
            <Grid item xs={6} className="border-2 border-red-400">
              <p>hello</p>
            </Grid>
            <Grid item xs={6} className="border-2 border-red-400 h-[350px]">
              <p>hello</p>
            </Grid>
            <Grid item xs={6} className="border-2 border-red-400">
              <p>hello</p>
            </Grid>
            <Grid item xs={6} className="border-2 border-red-400 h-[350px]">
              <p>hello</p>
            </Grid>
            <Grid item xs={6} className="border-2 border-red-400 h-[350px]">
              <p>hello</p>
            </Grid>
            <Grid item xs={17} className="border-2 border-red-400 h-[150px]">
              <p>hello</p>
            </Grid>
          </Grid>
        </div>
      </Drawer>
    </>
  );
}