import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Homepage = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: 600,
        ml: 50,
        borderColor: "primary.main",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            “your events should not disorient your day.we will plan everything!.”
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="400"
          image="https://unsplash.com/photos/NvZvtjn6Wrg"
          alt="planner"
        />
      </CardActionArea>
    </Card>
  );
};

export default Homepage;
