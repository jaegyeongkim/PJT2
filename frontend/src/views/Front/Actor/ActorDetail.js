import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import { CommonContext } from "../../../context/CommonContext";
import GenrePiechart from "./GenrePiechart";
const useStyles = makeStyles(styles);

const ActorDetail = ({ match }) => {
  const classes = useStyles();
  const { actorsData, movieData } = useContext(CommonContext);

  // 출연 영화 split
  for (var i = 0; i < actorsData.length; i++) {
    if (actorsData[i]["name"] === match.params.name) {
      var filmo = actorsData[i]["movie"].split("/");
      break;
    }
  }

  var filmo_list = [];
  for (var j = 0; j < Object(filmo).length; j++) {
    if (filmo_list.includes(filmo[j])) {
      continue;
    }
    filmo_list.push(filmo[j]);
  }
  // 출연 영화 포스터
  var movie_detail_data = [];
  for (var m = 0; m < filmo_list.length; m++) {
    for (var n = 0; n < movieData.length; n++) {
      if (movieData[n]["name"] === filmo_list[m]) {
        movie_detail_data.push(movieData[n]);
        break;
      }
    }
  }
  return (
    <Grid>
      <Header
        brand="The Casting"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
      />
      <Grid className={classNames(classes.main, classes.mainRaised)}>
        <Grid container>
          <Grid item xs={3}>
            <img
              style={{ width: "100%" }}
              src={`https://j3b206.p.ssafy.io/static/img/actor/${match.params.name}.jpg`}
              alt="배우 사진"
            />
          </Grid>
          <Grid item xs={4}>
            <p>{match.params.name}</p>
            <p>관상 데이터</p>
          </Grid>
          <Grid item xs={5}>
            <GenrePiechart />
          </Grid>
        </Grid>

        <Grid></Grid>

        <Grid container>
          <Grid>
            {filmo_list.map((movie, index) => {
              return <p>{movie}</p>;
            })}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};
export default ActorDetail;
