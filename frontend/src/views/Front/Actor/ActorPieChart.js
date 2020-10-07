import React from "react";
import { Grid } from "@material-ui/core";
import Wrapper from "../../../assets/jss/material-kit-react/components/GenrePiechart";
import Chart from "react-google-charts";

const ActorPieChart = (props) => {
  var { sameMovieActor } = props;
  var originActors = [];
  var actors = [];
  var actorsCnt = [];
  for (var x = 0; x < sameMovieActor.length; x++) {
    var movie_actor = [];
    movie_actor = sameMovieActor[x].split("/");
    for (var y = 0; y < movie_actor.length; y++) {
      originActors.push(movie_actor[y]);
      if (actors.includes(movie_actor[y])) {
        continue;
      }
      actors.push(movie_actor[y]);
      actorsCnt.push([movie_actor[y], 0]);
    }
  }

  for (var m = 0; m < originActors.length; m++) {
    for (var n = 0; n < actors.length; n++) {
      if (originActors[m] === actors[n]) {
        actorsCnt[n][1]++;
      }
    }
  }

  actorsCnt.sort(function (a, b) {
    return a[1] - b[1];
  });
  actorsCnt.reverse();
  if (actorsCnt.length >= 10) {
    actorsCnt = actorsCnt.slice(1, 11);
  } else if (actorsCnt.length < 10) {
    actorsCnt = actorsCnt.slice(1);
  }

  actorsCnt.unshift(["장르", "횟수"]);
  return (
    <Wrapper>
      <Grid>
        <Chart
          width={"35vw"}
          height={"40vh"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={actorsCnt}
          options={{
            title: "캐미 레이팅",
            // Just add this option
            is3D: true,
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </Grid>
    </Wrapper>
  );
};
export default ActorPieChart;
