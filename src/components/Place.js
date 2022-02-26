import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Cards from "./Cards";
import desc from "../static/desc";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Place() {
  const classes = useStyle();
  return (
    <div className={classes.root} id="place-to-visit">
      <Cards place={desc[0]} />
      <Cards place={desc[1]} />
    </div>
  );
}
