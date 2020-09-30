import React, { useContext } from "react";
import { Grid, GridList } from "@material-ui/core";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import { CommonContext } from "../../../context/CommonContext";
import GenrePiechart from "./GenrePiechart";
import MovieCard from "./MovieCard";
const useStyles = makeStyles(styles);

const ActorDetail = ({ match }) => {
  const classes = useStyles();
  const { actorsData, movieData, genreData } = useContext(CommonContext);

  // 출연 영화 split
  for (var i = 0; i < actorsData.length; i++) {
    if (actorsData[i]["name"] === match.params.name) {
      var filmo = actorsData[i]["movie"].split("/");
      break;
    }
  }
  /////////////////////////////////////////
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
        movie_detail_data.push([
          movieData[n]["name"],
          movieData[n]["poster"],
          movieData[n]["genre"],
        ]);

        break;
      }
    }
  }
  //////////////////////////////////////////////////
  var genre_cnt = [];
  for (var k = 0; k < genreData.length; k++) {
    genre_cnt.push([genreData[k]["genre_name"], 0]);
  }
  for (var g = 0; g < movie_detail_data.length; g++) {
    var genres = movie_detail_data[g][2].split(",");
    for (var c = 0; c < genres.length; c++) {
      for (var p = 0; p < genre_cnt.length; p++) {
        if (genre_cnt[p][0] === genres[c]) {
          genre_cnt[p][1]++;
          break;
        }
      }
    }
  }
  console.log(genre_cnt);
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
            <GenrePiechart genre_cnt={genre_cnt} />
          </Grid>
        </Grid>

        <Grid></Grid>

        <GridList>
          {movie_detail_data.map((movie, index) => {
            return (
              <Grid
                xs={3}
                md={2}
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "6px",
                }}
              >
                <MovieCard movie={movie} index={index} />
              </Grid>
            );
          })}
        </GridList>
      </Grid>
      <Footer />
    </Grid>
  );
};
export default ActorDetail;
