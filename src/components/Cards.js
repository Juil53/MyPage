import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
});
export default function Cards(props) {
  const {place} = props;
  const classes = useStyle();
  return (
    <Card sx={{maxWidth:645,background:'rgba(0,0,0,.5)',margin:"20px"}}>
      <CardMedia
        component="img"
        height="400"
        image={place.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="p"
          className={classes.title}
        >
          {place.title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.desc}
        >
          {place.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
