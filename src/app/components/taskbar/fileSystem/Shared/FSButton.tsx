import {Button} from "react-bootstrap";
import Image from "next/image";

type Props = {
  src: string;
  text?: string;
  onClick?: () => void;
};

export default function FSButton(props: Props) {
  return (
    <Button className="flex items-center border-none text-black">
      <Image width={19} height={19} alt="windows 11 icon" src={`/../public/images/${props.src}`} />
      <span className="ml-1">{props.text}</span>
    </Button>
  );
}
