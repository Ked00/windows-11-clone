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
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import BackButtonIcon from "../../../../../public/svgIcons/backbuttonIcon";
import ForwardButtonIcon from "../../../../../public/svgIcons/forwardbuttonIcon";
import RecentLocations from "../../../../../public/svgIcons/RecentLocations";
import UpOneLevelButton from "../../../../../public/svgIcons/upOneLevelButton";
import {SearchSharp, ArrowForwardIosSharp} from "@mui/icons-material/";
import WindowControl from "../../application-window/WindowControl";

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
            <Grid item xs={3}>
              <Accordion className="border-none" disableGutters={true}>
                <AccordionSummary expandIcon={<ArrowForwardIosSharp />}>
                  <Typography className="flex">
                    <Image
                      src="/../public/images/star-sm.png"
                      width={16}
                      height={0}
                      alt="quick access star"
                    />
                    <p className="text-sm mx-2">Quick access</p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="flex flex-col">
                    <Link className="text-black flex" underline="none">
                      <Image
                        src="/../public/images/down-sm.png"
                        alt="windows 11 download icon"
                        width={16}
                        height={0}
                      />
                      <p className="text-sm mx-1"> Downloads</p>
                    </Link>
                    <Link className="text-black flex" underline="none">
                      <Image
                        src="/../public/images/docs-sm.png"
                        alt="windows 11 documents icon"
                        width={16}
                        height={0}
                      />
                      <p className="text-sm mx-1">Documents</p>
                    </Link>
                    <Link className="text-black flex" underline="none">
                      <Image
                        src="/../public/images/pics-sm.png"
                        alt="windows 11 pictures icon"
                        width={16}
                        height={0}
                      />
                      <p className="text-sm mx-1">Pictures</p>
                    </Link>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/../public/images/onedrive-sm.png"
                    width={16}
                    height={0}
                    alt="quick access star"
                  />
                  <p className="text-sm mx-2">OneDrive</p>
                </AccordionSummary>
              </Accordion>

              <Accordion>
                <AccordionSummary>
                  <Image
                    src="/../public/images/thispc-sm.png"
                    width={16}
                    height={0}
                    alt="quick access star"
                  />
                  <p className="text-sm mx-2">This PC</p>
                </AccordionSummary>
              </Accordion>
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Modal.Body>
      </Modal>
    </>
  );
}
