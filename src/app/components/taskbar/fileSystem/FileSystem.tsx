import IconButton from "../../IconButton";
import {Modal, Button} from "react-bootstrap";
import {useIsShowing} from "@/app/hooks/isShowing";
import Image from "next/image";
import {
  ButtonGroup,
  Divider,
  Breadcrumbs,
  Link,
  TextField,
  InputAdornment,
  Grid,
} from "@mui/material";
import BackButtonIcon from "../../../../../public/svgIcons/backbuttonIcon";
import ForwardButtonIcon from "../../../../../public/svgIcons/forwardbuttonIcon";
import UpOneLevelButton from "../../../../../public/svgIcons/upOneLevelButton";
import {SearchSharp} from "@mui/icons-material/";
import WindowControl from "../../application-window/WindowControl";
import OneDriveAccordion from "./OneDriveAccordion";

export default function FileSystem() {
  const isShowing = useIsShowing(false);
  const crumbs = ["Google", "Apple", "Netflix"];

  const mapCrumbs = crumbs.map((item) => {
    return (
      <Link variant="caption" className="text-black" underline="none">
        {item}
      </Link>
    );
  });

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
              <Image
                width={15}
                height={15}
                alt="windows 11 icon"
                src="/../public/images/folder.ico"
              />
              <p className="ml-1 text-sm">File Explorer</p>
            </div>
            <WindowControl />
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
                <Image
                  width={19}
                  height={19}
                  alt="windows 11 icon"
                  src="/../public/images/cut.png"
                />
              </Button>
              <Button className="flex items-center border-none text-black">
                <Image
                  width={19}
                  height={19}
                  alt="windows 11 icon"
                  src="/../public/images/copy.png"
                />
              </Button>
              <Button className="flex items-center border-none text-black">
                <Image
                  width={19}
                  height={19}
                  alt="windows 11 icon"
                  src="/../public/images/paste.png"
                />
              </Button>
              <Button className="flex items-center border-none text-black">
                <Image
                  width={19}
                  height={19}
                  alt="windows 11 icon"
                  src="/../public/images/rename.png"
                />
              </Button>
              <Button className="flex items-center border-none text-black">
                <Image
                  width={19}
                  height={19}
                  alt="windows 11 icon"
                  src="/../public/images/share.png"
                />
              </Button>
            </ButtonGroup>

            <div>
              <Divider orientation="vertical" variant="fullWidth" className="bg-black mx-1" />
            </div>

            <ButtonGroup variant="text">
              <Button className="flex items-center border-none text-black">
                <Image
                  width={19}
                  height={19}
                  alt="windows 11 icon"
                  src="/../public/images/sort.png"
                />
                <span className="ml-1">Sort</span>
              </Button>
              <Button className="flex items-center border-none text-black">
                <Image
                  width={19}
                  height={19}
                  alt="windows 11 icon"
                  src="/../public/images/view.png"
                />
                <span className="ml-1">View</span>
              </Button>
            </ButtonGroup>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="flex items-center">
            <BackButtonIcon />
            <ForwardButtonIcon />
            <UpOneLevelButton />
            <div className="border-1 border-[#bbb] w-3/4 p-2 flex">
              <Breadcrumbs separator="›">
                <Image
                  width={19}
                  height={19}
                  alt="windows 11 icon"
                  src="/../public/images/user-sm.png"
                />
                {mapCrumbs}
              </Breadcrumbs>
            </div>
            <TextField
              placeholder="Search"
              variant="outlined"
              className="mx-2 p-2"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchSharp />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Grid container>
            <Grid item xs={2}>
              <div className="flex">
                <Image src="/../public/images/house.png" width={18} height={14} alt="house icon" />
                <span className="ml-1 text-sm">Home</span>
              </div>
              <OneDriveAccordion />
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Modal.Body>
      </Modal>
    </>
  );
}
