import { ButtonGroup } from "@mui/material";
import FSButton from "../Shared/FSButton";

export default function ActionButtons() {
  return (
    <ButtonGroup variant="text">
      <FSButton src="cut.png" />
      <FSButton src="copy.png" />
      <FSButton src="paste.png" />
      <FSButton src="rename.png" />
      <FSButton src="share.png" />
    </ButtonGroup>
  );
}
