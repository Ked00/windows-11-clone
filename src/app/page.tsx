import Image from "next/image";
import Taskbar from "./components/Taskbar";

export default function Home() {
  return (
    <div className="static w-full h-3/4">
      <Image
        src="/../public/desktop-image.jpeg"
        fill={true}
        quality={100}
        alt="windows 11 desktop image"
      />

      {/* taskbar */}
      <Taskbar />
    </div>
  );
}
