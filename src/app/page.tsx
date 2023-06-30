"use client";
import Image from "next/image";
import Taskbar from "./components/Taskbar";
import WidgetDrawer from "./components/taskbar/widgets/WidgetDrawer";

// hooks
import {useIsShowing} from "../app/hooks/isShowing";

export default function Home() {
  return (
    <div className="static w-full h-3/4">
      <Image
        src="/../public/desktop-image.jpeg"
        fill={true}
        quality={100}
        alt="windows 11 desktop image"
        priority={true}
      />

      {/* taskbar */}
      <Taskbar/>
      <WidgetDrawer />
    </div>
  );
}
