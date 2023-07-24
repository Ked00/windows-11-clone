import Image from "next/image";
import {useState} from "react";
import {Divider} from "@mui/material";

type pinnedItem = {
  image: string;
  name: string;
}[];

export default function Pinned() {
  const [pinnedItems, setPinnedItems] = useState<pinnedItem | null>([
    {image: "desk-sm.png", name: "Desktop"},
    {image: "down-sm.png", name: "Downloads"},
    {image: "docs-sm.png", name: "Documents"},
    {image: "pics-sm.png", name: "Pictures"},
    {image: "music-sm.png", name: "Music"},
    {image: "vid-sm.png", name: "Videos"},
  ]);

  const mapPinnedItems = pinnedItems?.map((item) => {
    return (
      <>
        <li className="flex items-center my-3 hover:bg-[#e5f3ff]" key={item.image}>
          <Image
            src={`/../public/images/${item.image}`}
            width={18}
            height={14}
            alt={`windows ${item.name} icon`}
          />
          <p className="text-sm ml-1">{item.name}</p>
        </li>
      </>
    );
  });
  return (
    <>
      <ul>{mapPinnedItems}</ul>
      <div>
        <Divider orientation="horizontal" variant="fullWidth" className="bg-black mx-1" />
      </div>
    </>
  );
}
