"use client";
import Image from "next/image";
import {TextInput} from "@mantine/core";
import {Button} from "@mantine/core";
import IconButton from "./IconButton";
import MultiIconButton from "./taskbar/MultiIconButton";
import DateAndTime from "./taskbar/systemTray/DateAndTime";
import Widgets from "./taskbar/widgets/Widgets";
import {useEffect} from "react";
import useWeatherInfo from "../business-logic/api/api-calls/weatherInfo";
import useNewsInfo from "../business-logic/api/api-calls/newsInfo";

export default function Taskbar() {
  const weatherInfo = useWeatherInfo();
  const newsInfo = useNewsInfo();

  useEffect(() => {
    weatherInfo.getInfo();
    newsInfo.getInfo();
  }, []);

  return (
    <div className="bg-[#f3f3f3]/[.85] fixed bottom-0 w-full h-[5.5%] flex justify-between">
      <Widgets
        weatherData={weatherInfo.data}
        temp={weatherInfo.temp}
        lat={weatherInfo.lat}
        long={weatherInfo.long}
        newsData={newsInfo.data}
      />

      {/* quick launch */}
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

      {/* system tray*/}
      <div className="flex items-center">
        <Button.Group>
          <IconButton
            src="arrow.png"
            alt="microsoft expand icon"
            iconCSs="p-3"
            buttonCss="h-full"
            width={35}
            height={35}
          />

          <MultiIconButton
            src1="wifi.png"
            alt1="microsoft wifi icon"
            src2="audio3.png"
            alt2="microsoft audio icon"
            src3="battery.png"
            alt3="microsoft battery icon"
            width={33}
            height={33}
          />
        </Button.Group>
        <DateAndTime />
      </div>
    </div>
  );
}
