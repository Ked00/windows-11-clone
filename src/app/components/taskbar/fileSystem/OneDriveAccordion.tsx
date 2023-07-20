import {useIsShowing} from "@/app/hooks/isShowing";
import {Divider} from "@mui/material";
import Image from "next/image";
import ExpandArrow from "./ExpandArrow";

export default function OneDriveAccordion() {
  const isOpen = useIsShowing(false);
  return (
    <div>
      {/* Accordion header */}
      <div className="flex mb-2 items-center" onClick={isOpen.reverseState}>
        <ExpandArrow />
        <Image src="/../public/images/onedrive-sm.png" width={18} height={14} alt="house icon" />
        <p className="text-sm">OneDrive</p>
      </div>

      {isOpen.isShowing == true ? (
        <ul>
          <li className="flex mb-2 items-center">
            <ExpandArrow />
            <Image src="/../public/images/desk-sm.png" width={18} height={14} alt="house icon" />
            <p className="text-sm ml-1">Desktop</p>
          </li>
          <li className="flex items-center mb-2">
            <ExpandArrow />
            <Image src="/../public/images/docs-sm.png" width={18} height={14} alt="house icon" />
            <p className="text-sm ml-1">Documents</p>
          </li>
          <li className="flex items-center mb-2">
            <ExpandArrow />
            <Image src="/../public/images/pics-sm.png" width={18} height={14} alt="house icon" />
            <p className="text-sm ml-1">Pictures</p>
          </li>
        </ul>
      ) : (
        ""
      )}
      <div>
        <Divider orientation="horizontal" variant="fullWidth" className="bg-black mx-1" />
      </div>
    </div>
  );
}
