import IconButton from "../../IconButton";
import {Modal} from "react-bootstrap";
import {useIsShowing} from "@/app/hooks/isShowing";
import Image from "next/image";
import {ButtonGroup, Divider} from "@mui/material";
import WindowControl from "../../application-window/WindowControl";
import {useState} from "react";
import FSButton from "./Shared/FSButton";
import Search from "./Search";
import NavigationBar from "./Navigation/NavigationBar";
import Sidemenu from "./Navigation/sidemenu/Sidemenu";
import NavigationControls from "./Navigation/Controls/NavigationControls";
import ActionButtons from "./ButtonGroups/ActionButtons";

export default function FileSystem() {
  const isShowing = useIsShowing(false);
  const [size, setSize] = useState<"xl" | true>("xl");
  const [hidden, setHidden] = useState("visible");
  const [crumbs, setCrumbs] = useState<string[] | null>([
    "google",
    "apple",
    "microsoft",
    "netflix",
  ]);

  function changeSize() {
    if (size == "xl") {
      setSize(true);
    } else {
      setSize("xl");
    }
  }

  function hide() {
    if (hidden == "invisible") {
      setHidden("visible");
    } else {
      setHidden("invisible");
    }
  }

  return (
    <>
      <IconButton
        src="folder.ico"
        alt="windows 11 folder icon"
        variant="text"
        height={30}
        width={30}
        onClicked={isShowing.reverseState}
        hide={hide}
      />

      <Modal
        animation={false}
        onHide={isShowing.reverseState}
        backdrop={false}
        show={isShowing.isShowing}
        size={size}
        fullscreen={size}
        className={hidden}
      >
        <Modal.Header className="flex flex-col p-2 bg-[#eff4f9]">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <Image
                width={15}
                height={15}
                alt="windows 11 icon"
                src="/../public/images/folder.ico"
              />
              <p className="ml-1 text-sm">File Explorer</p>
            </div>
            <WindowControl close={isShowing.reverseState} minimize={changeSize} hide={hide} />
          </div>

          <div className="w-full flex mt-4">
            <FSButton text="New" src="new.png" />

            <div>
              <Divider orientation="vertical" variant="fullWidth" className="bg-black mx-1" />
            </div>

            <ActionButtons />

            <div>
              <Divider orientation="vertical" variant="fullWidth" className="bg-black mx-1" />
            </div>

            <ButtonGroup variant="text">
              <FSButton src="sort.png" text="Sort" />
              <FSButton src="view.png" text="View" />
            </ButtonGroup>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="flex items-center">
            <NavigationControls />
            <NavigationBar crumbsArray={crumbs} />
            <Search />
          </div>
          <Sidemenu />
        </Modal.Body>
      </Modal>
    </>
  );
}
