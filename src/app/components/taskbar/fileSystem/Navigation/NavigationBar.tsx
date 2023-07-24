import {Breadcrumbs, Link} from "@mui/material";
import Image from "next/image";

type Props = {
  crumbsArray: string[] | null;
};

export default function NavigationBar(props: Props) {
  const mapCrumbs = props.crumbsArray?.map((item) => {
    return (
      <Link variant="caption" className="text-black" underline="hover" key={item}>
        {item}
      </Link>
    );
  });
  return (
    <div className="border-1 border-[#bbb] w-3/4 p-2 flex">
      <Breadcrumbs separator="›">
        <Image width={19} height={19} alt="windows 11 icon" src="/../public/images/user-sm.png" />
        {mapCrumbs}
      </Breadcrumbs>
    </div>
  );
}
