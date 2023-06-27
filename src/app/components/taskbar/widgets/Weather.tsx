import {useIsShowing} from "@/app/hooks/isShowing";
import IconButton from "../../IconButton";
import {Drawer} from "@mui/material";

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
  }
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
      </Drawer>
    </>
  );
}
