import date from "date-and-time";

type outPut = {
  time: string;
  today: string;
};

export default function useDateAndTime(): outPut {
  const now = new Date();
  const today = date.format(now, "DD/MM/YY");
  const time = date.format(now, "hh:mm A");

  return {
    today: today,
    time: time,
  };
}
