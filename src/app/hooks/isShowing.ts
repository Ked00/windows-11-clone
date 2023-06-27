"use client"
import {useState} from "react";

type outPut = {
  isShowing: boolean;
  reverseState: () => void;
};

export function useIsShowing(show: boolean): outPut {
  const [isShowing, setIsShowing] = useState(show);

  function reverseState() {
    setIsShowing((prev) => !prev);
  }

  return {
    isShowing: isShowing,
    reverseState: reverseState,
  };
}
