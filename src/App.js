import React from "react";
import "./App.css";
import { makeStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Place from "./components/Place";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "img/bgimage.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function App() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Place />
    </div>
  );
}
