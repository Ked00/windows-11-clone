import {Grid} from "@mui/material";
import Image from "next/image";
import OneDriveAccordion from "./OneDriveAccordion";
import Pinned from "./Pinned";
import {MouseEvent} from "react";


type Props = {
  addCrumbs: (event: MouseEvent) => void;
};

export default function Sidemenu(props: Props) {
  return (
    <Grid container>
      <Grid item xs={2} className="border-r-8">
        <div className="flex mb-2.5 hover:bg-[#e5f3ff]">
          <Image src="/../public/images/house.png" width={18} height={14} alt="house icon" />
          <span className="ml-1 text-sm">Home</span>
        </div>
        <OneDriveAccordion addCrumbs={props.addCrumbs} />
        <Pinned />
      </Grid>

      <Grid item xs={10} className="bg-red-400 max-h-[480px] min-h-[480px] overflow-scroll"></Grid>
    </Grid>
  );
}
