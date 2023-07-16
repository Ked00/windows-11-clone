import IconButton from "../../IconButton";
import {Modal, Button} from "react-bootstrap";
import {useIsShowing} from "@/app/hooks/isShowing";
import Image from "next/image";
import {ButtonGroup, Divider} from "@mui/material";
import BackButtonIcon from "../../../../../public/svgIcons/backbuttonIcon";
import ForwardButtonIcon from "../../../../../public/svgIcons/forwardbuttonIcon";
import RecentLocations from "../../../../../public/svgIcons/RecentLocations";
import UpOneLevelButton from "../../../../../public/svgIcons/upOneLevelButton";

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
        <Modal.Header className="flex flex-col p-2 bg-[#eff4f9]">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <Image width={20} height={20} alt="windows 11 icon" src="/../public/images/folder.ico" />
              <p className="ml-1">File Explorer</p>
            </div>

            <ButtonGroup size="small">
              <Button className="border-none">
                <Image width={15} height={15} alt="windows 11 icon" src="/../public/images/minimize.png" />
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
                <Image width={15} height={15} alt="windows 11 icon" src="/../public/images/close.png" />
              </Button>
            </ButtonGroup>
          </div>

          <div className="w-full flex mt-4">
            <Button className="flex items-center border-none text-black">
              <Image width={19} height={19} alt="windows 11 icon" src="/../public/images/new.png" />
              <span className="ml-1">New</span>
            </Button>

            <div>
              <Divider orientation="vertical" variant="fullWidth" className="bg-black mx-1" />
            </div>

            <ButtonGroup variant="text">
              <Button className="flex items-center border-none text-black">
                <Image width={19} height={19} alt="windows 11 icon" src="/../public/images/cut.png" />
              </Button>
              <Button className="flex items-center border-none text-black">
                <Image width={19} height={19} alt="windows 11 icon" src="/../public/images/copy.png" />
              </Button>
              <Button className="flex items-center border-none text-black">
                <Image width={19} height={19} alt="windows 11 icon" src="/../public/images/paste.png" />
              </Button>
              <Button className="flex items-center border-none text-black">
                <Image width={19} height={19} alt="windows 11 icon" src="/../public/images/rename.png" />
              </Button>
              <Button className="flex items-center border-none text-black">
                <Image width={19} height={19} alt="windows 11 icon" src="/../public/images/share.png" />
              </Button>
            </ButtonGroup>

            <div>
              <Divider orientation="vertical" variant="fullWidth" className="bg-black mx-1" />
            </div>

            <ButtonGroup variant="text">
              <Button className="flex items-center border-none text-black">
                <Image width={19} height={19} alt="windows 11 icon" src="/../public/images/sort.png" />
                <span className="ml-1">Sort</span>
              </Button>
              <Button className="flex items-center border-none text-black">
                <Image width={19} height={19} alt="windows 11 icon" src="/../public/images/view.png" />
                <span className="ml-1">View</span>
              </Button>
            </ButtonGroup>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="flex">
            <BackButtonIcon />
            <ForwardButtonIcon />
            <RecentLocations />
            <UpOneLevelButton />

            {/* <div className="border-4 border-red-400 w-2/4 p-2">
            <Image width={19} height={19} alt="windows 11 icon" src="/../public/images/user-sm.png" />
            </div> */}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
