import {useIsShowing} from "@/app/hooks/isShowing";
import {Divider, Link} from "@mui/material";
import Image from "next/image";
import ExpandArrow from "../../Shared/ExpandArrow";
import {MouseEvent} from "react";

type Props = {
  addCrumbs: (event: MouseEvent) => void;
};

export default function OneDriveAccordion(props: Props) {
  const isOpen = useIsShowing(false);

  return (
    <div>
      {/* Accordion header */}
      <div className="flex my-3 items-center hover:bg-[#e5f3ff]" onClick={isOpen.reverseState}>
        <ExpandArrow />
        <Image
          src="/../public/images/onedrive-sm.png"
          width={18}
          height={14}
          alt="house icon"
          className="ml-4"
        />
        <p className="text-sm" onClick={props.addCrumbs}>
          OneDrive
        </p>
      </div>

      {isOpen.isShowing == true ? (
        <ul className="ml-3">
          <li className="flex my-3 items-center hover:bg-[#e5f3ff]">
            <ExpandArrow />
            <Image
              src="/../public/images/desk-sm.png"
              width={18}
              height={14}
              alt="house icon"
              className="ml-4 mr-1"
            />
            <p className="text-sm ml-1" onClick={props.addCrumbs}>
              Desktop
            </p>
          </li>
          <li className="flex items-center my-3 hover:bg-[#e5f3ff]">
            <ExpandArrow />
            <Image
              src="/../public/images/docs-sm.png"
              width={18}
              height={14}
              alt="house icon"
              className="ml-4 mr-1"
            />
            <p className="text-sm ml-1" onClick={props.addCrumbs}>
              Documents
            </p>
          </li>
          <li className="flex items-center my-3 hover:bg-[#e5f3ff]">
            <ExpandArrow />
            <Image
              src="/../public/images/pics-sm.png"
              width={18}
              height={14}
              alt="house icon"
              className="ml-4 mr-1"
            />
            <p className="text-sm ml-1" onClick={props.addCrumbs}>
              Pictures
            </p>
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
