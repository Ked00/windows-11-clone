import { SearchSharp } from "@mui/icons-material";
import { TextField,InputAdornment } from "@mui/material";

export default function Search() {
  return (
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
  );
}
