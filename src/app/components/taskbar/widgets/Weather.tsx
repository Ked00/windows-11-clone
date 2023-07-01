import {useIsShowing} from "@/app/hooks/isShowing";
import IconButton from "../../IconButton";
import {Drawer, Grid, Card, Paper} from "@mui/material";
import Image from "next/image";

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
        <div className=" w-3/4 ml-16">
          <h1 className="text-center">3:50 PM</h1>
          <Grid container>
            <Grid item xs={6} className="h-[350px] mb-3">
              <Card className="h-full relative">
                <Paper>
                  <Image
                    src="/../public/desktop-image.jpeg"
                    fill={true}
                    quality={100}
                    alt="windows 11 desktop image"
                  />
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

            <Grid item xs={6} className="h-[350px] mb-3">
              <Card className="h-full relative">
                <Paper>
                  <Image
                    src="/../public/desktop-image.jpeg"
                    fill={true}
                    quality={100}
                    alt="windows 11 desktop image"
                  />
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
                  <Image
                    src="/../public/desktop-image.jpeg"
                    fill={true}
                    quality={100}
                    alt="windows 11 desktop image"
                  />
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={5.7} className=" h-[350px]">
              <Card className="h-full relative">
                <Paper>
                  <Image
                    src="/../public/desktop-image.jpeg"
                    fill={true}
                    quality={100}
                    alt="windows 11 desktop image"
                  />
                </Paper>
              </Card>
            </Grid>

            <Grid item xs={17} className="h-[150px]">
              <Card className="h-full relative mt-3">
                <Paper>
                  <Image
                    src="/../public/desktop-image.jpeg"
                    fill={true}
                    quality={100}
                    alt="windows 11 desktop image"
                  />
                </Paper>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Drawer>
    </>
  );
}
