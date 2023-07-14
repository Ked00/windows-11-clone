import {Button} from "@mantine/core";
import Image from "next/image";

type Props = {
  alt1: string;
  alt2: string;
  alt3: string;
  src1: string;
  src2: string;
  src3: string;
  width: number;
  height: number;
};

export default function MultiIconButton(props: Props) {
  return (
    <Button variant="text" className="h-full">
      <Image
        src={`/../public/${props.src1}`}
        width={props.width}
        height={props.height}
        quality={100}
        alt={props.alt1}
        className="p-2"
      />
      <Image
        src={`/../public/${props.src2}`}
        width={props.width}
        height={props.height}
        quality={100}
        alt={props.alt2}
        className="p-2"
      />
      <Image
        src={`/../public/${props.src3}`}
        width={props.width}
        height={props.height}
        quality={100}
        alt={props.alt3}
        className="p-2"
      />
    </Button>
  );
}
