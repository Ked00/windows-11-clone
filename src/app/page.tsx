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

      {/* taskbar */}
      <div className="bg-[#f3f3f3]/[.85] fixed bottom-0 w-full h-[7%] flex justify-between p-3">
        <Image src="/../public/cloud.png" width={50} height={50} quality={100} alt="weather icon"/> 

        <div className="flex">
        <Image src="/../public/cloud.png" width={50} height={50} quality={100} alt="weather icon" className="mx-2"/>
        <Image src="/../public/cloud.png" width={50} height={50} quality={100} alt="weather icon" className="mx-2"/>
        <Image src="/../public/cloud.png" width={50} height={50} quality={100} alt="weather icon" className="mx-2"/>
        <Image src="/../public/cloud.png" width={50} height={50} quality={100} alt="weather icon" className="mx-2"/>
        <Image src="/../public/cloud.png" width={50} height={50} quality={100} alt="weather icon" className="mx-2"/>
        <Image src="/../public/cloud.png" width={50} height={50} quality={100} alt="weather icon" className="mx-2"/>
        <Image src="/../public/cloud.png" width={50} height={50} quality={100} alt="weather icon" className="mx-2"/>
        </div>

        <div className="flex">
        <Image src="/../public/cloud.png" width={50} height={50} quality={100} alt="weather icon" className="mx-2"/>
        <Image src="/../public/cloud.png" width={50} height={50} quality={100} alt="weather icon" className="mx-2"/>
        <Image src="/../public/cloud.png" width={50} height={50} quality={100} alt="weather icon" className="mx-2"/>
        </div>

      </div>
    </div>
  );
}
