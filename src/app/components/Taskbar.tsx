"use client";
import Image from "next/image";
import {TextInput} from "@mantine/core";

export default function Taskbar() {
  return (
    <div className="bg-[#f3f3f3]/[.85] fixed bottom-0 w-full h-[5.5%] flex justify-between">
      {/* left */}
      <Image
        src="/../public/weather.png"
        width={50}
        height={50}
        quality={100}
        alt="weather icon"
        className="p-2"
      />

      {/* middle */}
      <div className="flex justify-center p-2 space-x-5 items-center ml-28">
        <Image
          src="/../public/home.png"
          width={30}
          height={30}
          quality={100}
          alt="microsoft menu icon"
        />

        <TextInput
          placeholder="Search"
          variant="filled"
          radius="xl"
          size="xs"
        />
        
        <Image
          src="/../public/edge.png"
          width={30}
          height={30}
          quality={100}
          alt="microsoft edge icon"
        />
        <Image
          src="/../public/folder.ico"
          width={30}
          height={30}
          quality={100}
          alt="microsoft folder icon"
        />
        <Image
          src="/../public/store.png"
          width={30}
          height={30}
          quality={100}
          alt="microsoft store icon"
        />
        <Image
          src="/../public/mail.png"
          width={30}
          height={30}
          quality={100}
          alt="microsoft mail icon"
        />
      </div>

      {/* end */}
      <div className="flex p-3">
        <Image
          src="/../public/cloud.png"
          width={50}
          height={50}
          quality={100}
          alt="weather icon"
          className=""
        />

        <div className="flex">
          <Image
            src="/../public/cloud.png"
            width={50}
            height={50}
            quality={100}
            alt="weather icon"
            className=""
          />
          <Image
            src="/../public/cloud.png"
            width={50}
            height={50}
            quality={100}
            alt="weather icon"
            className=""
          />
          <Image
            src="/../public/cloud.png"
            width={50}
            height={50}
            quality={100}
            alt="weather icon"
            className=""
          />
        </div>
        <Image
          src="/../public/cloud.png"
          width={50}
          height={50}
          quality={100}
          alt="weather icon"
          className=""
        />
      </div>
    </div>
  );
}
