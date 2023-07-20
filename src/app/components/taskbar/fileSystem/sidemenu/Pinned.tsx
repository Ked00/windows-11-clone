import Image from "next/image";
import {useState} from "react";

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
      <li className="flex items-center mb-2" key={item.name}>
        <Image
          src={`/../public/images/${item.image}`}
          width={18}
          height={14}
          alt={`windows ${item.name} icon`}
        />
        <p className="text-sm ml-1">{item.name}</p>
      </li>
    );
  });
  return <ul>{mapPinnedItems}</ul>;
}
