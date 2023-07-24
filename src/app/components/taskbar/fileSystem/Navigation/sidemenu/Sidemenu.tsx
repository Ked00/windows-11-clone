import {Grid} from "@mui/material";
import Image from "next/image";
import OneDriveAccordion from "./OneDriveAccordion";
import Pinned from "./Pinned";

export default function Sidemenu() {
  return (
    <Grid container>
      <Grid item xs={2} className="border-r-8">
        <div className="flex mb-2.5 hover:bg-[#e5f3ff]">
          <Image src="/../public/images/house.png" width={18} height={14} alt="house icon" />
          <span className="ml-1 text-sm">Home</span>
        </div>
        <OneDriveAccordion />
        <Pinned />
      </Grid>
    </Grid>
  );
}
