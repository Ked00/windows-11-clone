import IconButton from "../../IconButton";
import {Modal, Button} from "react-bootstrap";
import {useIsShowing} from "@/app/hooks/isShowing";
import Image from "next/image";
import {ButtonGroup} from "@mui/material";

export default function FileSystem() {
  const isShowing = useIsShowing(false);
  return (
    <>
      <IconButton
        src="folder.ico"
        alt="windows 11 folder icon"
        variant="text"
        height={30}
        width={30}
        onClicked={isShowing.reverseState}
      />

      <Modal
        animation={false}
        onHide={isShowing.reverseState}
        backdrop={false}
        show={isShowing.isShowing}
        size="lg"
      >
        <Modal.Header className="flex justify-content-between p-2 bg-[#eff4f9]">
          <div className="flex items-center">
            <Image width={20} height={20} alt="windows 11 icon" src="/../public/folder.ico" />
            <p className="ml-1">File Explorer</p>
          </div>

          <ButtonGroup size="small" variant="text">
            <Button>
              <Image width={20} height={20} alt="windows 11 icon" src="/../public/folder.ico" />
            </Button>
            <Button>
              <Image width={20} height={20} alt="windows 11 icon" src="/../public/folder.ico" />
            </Button>
            <Button>
              <Image width={20} height={20} alt="windows 11 icon" src="/../public/folder.ico" />
            </Button>
          </ButtonGroup>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
}
