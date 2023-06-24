"use client";
import Image from "next/image";
import {ActionIcon} from "@mantine/core";
import {IconBrandWindows} from "@tabler/icons-react";
import {TextInput} from "@mantine/core";

export default function Taskbar() {
  return (
    <div className="bg-[#f3f3f3]/[.85] fixed bottom-0 w-full h-[7%] flex justify-between">
      {/* left */}
      <ActionIcon variant="subtle" radius="xs" size="xl">
        <IconBrandWindows size="xl" />
      </ActionIcon>

      {/* middle */}
      <div className="flex border-2 border-red-200">
      <Image
          src="/../public/home.png"
          width={50}
          height={50}
          quality={100}
          alt="weather icon"
          className=""
        />

        <TextInput
          placeholder="Search"
          variant="filled"
          radius="xl"
          size="sm"
          sx={{width: "23%"}}
          className="text-black"
        />
        <Image
          src="/../public/edge.png"
          width={35}
          height={35}
          quality={100}
          alt="weather icon"
          className=""
        />
        <Image
          src="/../public/folder.ico"
          width={50}
          height={50}
          quality={100}
          alt="weather icon"
          className=""
        />
        <Image
          src="/../public/store.png"
          width={50}
          height={50}
          quality={100}
          alt="weather icon"
          className=""
        />
      </div>

      {/* end */}
      <div className="flex ">
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
