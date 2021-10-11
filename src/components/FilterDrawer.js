import { SwipeableDrawer, List, ListItem, ListItemText } from "@mui/material";
import { Box } from "@mui/system";

const FilterDrawer = (anchor) => {
  return (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      hello
    </Box>
  );
};

export default FilterDrawer;
