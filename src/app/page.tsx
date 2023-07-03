"use client";
import Image from "next/image";
import Taskbar from "./components/Taskbar";
import {useEffect, useState} from "react";
import axios from "axios";
// hooks
import {useIsShowing} from "../app/hooks/isShowing";

export default function Home() {
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://newsapi.org/v2/top-headlines?country=us&apiKey=98dd4448fc4e4950bdfeb5f4c1ad68d5"
  //     )
  //     .then((res) => console.log(res.data));
  // });
  
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
      
      <Taskbar />
    </div>
  );
}
