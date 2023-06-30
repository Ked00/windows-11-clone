import {Button} from "@mantine/core";
import Image from "next/image";

type Props = {
  alt: string;
  src: string;
  buttonCss?: string;
  iconCSs?: string;
  height: number;
  width: number;
  onClicked?: () => void;
  onHover?: () => void;
};

export default function IconButton(props: Props) {
  return (
    <Button
      compact
      variant="light"
      className={`${props.buttonCss}`}
      onPointerEnter={() => props.onHover}
      onClick={props.onClicked}
    >
      <Image
        src={`/../public/${props.src}`}
        width={props.width}
        height={props.height}
        quality={100}
        alt={props.alt}
        className={`${props.iconCSs}`}
      />
    </Button>
  );
}