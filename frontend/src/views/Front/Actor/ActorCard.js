import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const ActorCard = (props) => {
  const { name, idnex } = props;
  let history = useHistory();
  const clickActorDetail = () => {
    history.push(`/actor-detail/${name}`);
  };
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
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            onClick={clickActorDetail}
            className={classes.media}
            image={`https://j3b206.p.ssafy.io/static/img/actor/${name}.jpg`}
            title="Contemplative Reptile"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
export default ActorCard;
