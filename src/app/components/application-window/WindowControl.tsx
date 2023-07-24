import {ButtonGroup, Button} from "@mui/material";
import Image from "next/image";

type Props = {
  close: () => void;
  minimize: () => void;
  hide: () => void;
};

export default function WindowControl(props: Props) {
  return (
    <ButtonGroup size="small">
      <Button className="border-none" onClick={props.hide}>
        <Image width={15} height={15} alt="windows 11 icon" src="/../public/images/minimize.png" />
      </Button>
      <Button className="border-none" onClick={props.minimize}>
        <Image
          width={15}
          height={15}
          alt="windows 11 icon"
          src="/../public/images/restoreDown.png"
        />
      </Button>
      <Button className="border-none" onClick={props.close}>
        <Image width={15} height={15} alt="windows 11 icon" src="/../public/images/close.png" />
      </Button>
    </ButtonGroup>
  );
}
