import useDateAndTime from "@/app/hooks/dateAndTime";
import {useEffect} from "react";

export default function DateAndTime() {
  const current = useDateAndTime();

  return (
    <div className="text-black flex flex-col">
      <span className="text-xs">{current.time}</span>
      <span className="text-xs">{current.today}</span>
    </div>
  );
}
