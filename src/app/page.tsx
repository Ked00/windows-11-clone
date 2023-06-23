import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Image
        src="/../public/desktop-image.jpeg"
        fill={true}
        quality={100}
        alt="windows 11 desktop image"
      />
    </div>
  );
}
