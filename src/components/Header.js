import {
  Container,
  ButtonGroup,
  IconButton,
  Grid,
  Button,
  Typography,
  OutlinedInput,
  Input,
  InputBase,
  inputBaseClasses,
} from "@mui/material";
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
import { maxWidth } from "@mui/system";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0",
      marginBlock: "40px 83px",
    },
    text: {
      textTransform: "capitalize",
      fontWeight: 500,
      padding: "19px 16px",
      paddingRight: "18px",
      marginRight: "-5px",
      borderRadius: "16px 0 0 16px",
    },
    input: {
      width: "fit-content",
      maxWidth: "calc(84px + 24px)",
      fontSize: "14px",
      paddingInline: "14px",
    },
  };
});

const Header = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid
          className="logoImage"
          item
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "flex-start",
            "@media (max-width: 472px)": {
              mb: 2,
            },
          }}
        >
          <img src={logo} alt="logo" width="110px" />
        </Grid>

        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 472px)": {
              width: "100%",
            },
          }}
        >
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
            <Button className={classes.text} color="primary">
              Helsinki, Finland
            </Button>
            <Divider orientation="vertical" flexItem />

            <InputBase
              className={classes.input}
              placeholder="Add guests"
              inputProps={{ "aria-label": "add guests" }}
            />

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
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
