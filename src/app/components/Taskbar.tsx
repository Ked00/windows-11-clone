"use client";
import Image from "next/image";
import {TextInput} from "@mantine/core";
import {Button} from "@mantine/core";

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

        <TextInput placeholder="Search" variant="filled" radius="xl" size="xs" />

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
      <div className="flex items-center">
        <Button.Group>
          <Button compact variant="light">
            <Image
              src="/../public/arrow.png"
              width={40}
              height={40}
              quality={100}
              alt="weather icon"
              className="p-3"
            />
          </Button>

          <Button compact variant="light">
            <Image
              src="/../public/wifi.png"
              width={35}
              height={35}
              quality={100}
              alt="weather icon"
              className="p-2"
            />

            <Image
              src="/../public/audio3.png"
              width={35}
              height={35}
              quality={100}
              alt="weather icon"
              className="p-2"
            />
            <Image
              src="/../public/battery.png"
              width={35}
              height={35}
              quality={100}
              alt="weather icon"
              className="p-2"
            />
          </Button>
        </Button.Group>
          <div className="p-2 text-black">
            <p className="text-xs">3:08 PM</p>
            <p className="text-xs">6/25/23</p>
          </div>
      </div>
    </div>
  );
}
