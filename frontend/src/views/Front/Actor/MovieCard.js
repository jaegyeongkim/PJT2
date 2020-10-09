import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const MovieCard = (props) => {
  const { movie } = props;

  const useStyles = makeStyles({
    root: {
      maxWidth: 180,
    },
    media: {
      height: 250,
    },
  });
  const classes = useStyles();
  return (
    <Grid>
      <Card className={classes.root} style={{ margin: "auto" }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={movie[1]}
            title="Contemplative Reptile"
          />

          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {movie[0]}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
export default MovieCard;
