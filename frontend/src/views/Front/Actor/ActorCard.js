import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";

const ActorCard = (props) => {
  const { name, idnex } = props;
  let history = useHistory();
  const clickActorDetail = () => {
    history.push("/");
    // history.goBack(1);
    history.push(`actor-detail/${name}`);
  };
  return (
    <Grid>
      {name}
      <img
        onClick={clickActorDetail}
        src={`https://j3b206.p.ssafy.io/static/img/actor_img/${name}.jpg`}
      />
    </Grid>
  );
};
export default ActorCard;
