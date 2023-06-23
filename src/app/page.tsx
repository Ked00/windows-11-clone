import Image from "next/image";

export default function Home() {
  return (
    <div className="static w-full h-3/4">
      <Image
        src="/../public/desktop-image.jpeg"
        fill={true}
        quality={100}
        alt="windows 11 desktop image"
      />
      <div className="bg-red-200 fixed bottom-0 w-full h-11">
       
       </div>
    </div>
  );
}
