import { Container, ButtonGroup, IconButton } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";

import { makeStyles } from "@mui/styles";
import logo from "../images/logo.svg";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0",
      marginBlock: "49px 83px",
    },
  };
});

const Header = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <img src={logo} alt="logo" />

      {/* utility div */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          bgcolor: "background.paper",
          borderRadius: 4,
          color: "text.secondary",
          boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <FormatAlignLeftIcon />
        <FormatAlignCenterIcon />
        <FormatAlignRightIcon />
        <Divider orientation="vertical" flexItem />
        <IconButton
          sx={{
            ml: -0.5,
            borderRadius: "0 16px 16px 0",
          }}
          aria-label="search"
          size="small"
          color="secondary"
        >
          <SearchIcon
            sx={{
              fontSize: "28px",
            }}
          />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Header;
