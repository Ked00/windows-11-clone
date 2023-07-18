import { ButtonGroup, Button } from "@mui/material";
import Image from "next/image";

export default function WindowControl(){
    return (
        <ButtonGroup size="small" >
              <Button className="border-none">
                <Image
                  width={15}
                  height={15}
                  alt="windows 11 icon"
                  src="/../public/images/minimize.png"
                />
              </Button>
              <Button className="border-none">
                <Image
                  width={15}
                  height={15}
                  alt="windows 11 icon"
                  src="/../public/images/restoreDown.png"
                />
              </Button>
              <Button className="border-none">
                <Image
                  width={15}
                  height={15}
                  alt="windows 11 icon"
                  src="/../public/images/close.png"
                />
              </Button>
            </ButtonGroup>
    )
}