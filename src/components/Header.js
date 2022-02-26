import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link as Scroll } from "react-scroll";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbarwrapper: {
    width: "80%",
    margin: "0 auto",
    marginTop: "30px",
  },
  appbartitle: {
    flexGrow: 1,
    fontSize: "2rem",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#5AFF3D",
    fontWeight: 900,
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontWeight: 900,
    fontSize: "4rem",
    textAlign: "center",
  },
  godown: {
    color: "#5AFF3D",
    fontSize: "5rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <AppBar sx={{ background: "none", fontFamily: "Nunito" }} elevation={0}>
        <Toolbar className={classes.appbarwrapper}>
          <h1 className={classes.appbartitle}>
            My <span className={classes.colorText}>Page!</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            My <span className={classes.colorText}>Page!</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <KeyboardArrowDownIcon className={classes.godown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
