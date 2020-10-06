import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GridList, Grid, TextField } from "@material-ui/core";
import classNames from "classnames";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import ActorCard from "../Actor/ActorCard";

import { CommonContext } from "../../../context/CommonContext";
const useStyles = makeStyles(styles);

const CategoryResult = ({ match }, props) => {
  const faceData = [match.params.cat1, match.params.cat2, match.params.cat3];
  const actorDic = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  const actor10 = [];
  const actorReal10over = [];
  const classes = useStyles();
  const { actorsData } = useContext(CommonContext);
  for (var a = 0; a < actorsData.length; a++) {
    if (actorsData[a]["gender"] === match.params.gender) {
      var face = actorsData[a]["face"].split("/");

      var cnt = 0;
      for (var f = 0; f < face.length; f++) {
        for (var d = 0; d < faceData.length; d++) {
          if (face[f].includes(faceData[d])) {
            cnt++;
            break;
          }
        }
      }
      if (cnt > 0) {
        actorDic[cnt].push(actorsData[a]);
      }
    }
  }
  console.log(actorDic);
  var actor10Cnt = 0;
  for (var d = 5; d > 0; d--) {
    if (actorDic[d].length > 0) {
      if (actorDic[d].length <= 10) {
        actor10Cnt = actorDic[d].length;
      }
      for (var b = 0; b < actorDic[d].length; b++) {
        actor10.push(actorDic[d][b]);
      }
    }
    if (actorDic[d].length > 10) {
      break;
    }
  }

  // console.log(actor10);
  const actorReal10 = [];
  if (actor10Cnt) {
    for (var ac = 0; ac < actor10Cnt; ac++) {
      actorReal10.push(actor10[ac]);
    }
    for (var oc = actor10Cnt; oc < actor10.length; oc++) {
      actorReal10over.push(actor10[oc]);
    }

    actorReal10.sort(function (a, b) {
      return a["movie_total"] - b["movie_total"];
    });
    actorReal10.reverse();
    actorReal10over.sort(function (a, b) {
      return a["movie_total"] - b["movie_total"];
    });
    actorReal10over.reverse();
    const N = actorReal10.length;
    for (var aoc = 0; aoc < 10 - N; aoc++) {
      actorReal10.push(actorReal10over[aoc]);
    }
  } else {
    actor10.sort(function (a, b) {
      return a["movie_total"] - b["movie_total"];
    });
    for (var ec = 0; ec < 10; ec++) {
      actorReal10.push(actor10[ec]);
    }
  }
  console.log(actorReal10[0]);

  // const finalactorReal10 = [];
  // for (var ee = 0; ee < actorReal10.length; ee++) {
  //   console.log(actorReal10[ee]["face"]);
  //   // finalactorReal10.push(actorReal10[ee]["name"]);
  // }

  return (
    <div>
      <Header
        brand="The Casting"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
      />
      <Grid
        // style={{ marginTop: "70px" }}
        className={classNames(classes.main, classes.mainRaised)}
      >
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>
            "{match.params.gender}" + "{match.params.cat1}" + "
            {match.params.cat2}" + "{match.params.cat3} + {match.params.cat4} +{" "}
            {match.params.cat5}" 선택 결과입니다.
          </h3>
        </Grid>
        {/* <GridList>
          {Object(actorReal10).map((name, index) => {
            return (
              <Grid
                xs={3}
                md={2}
                style={{
                  cursor: "pointer",
                  width: "100%",
                  height: "100%",
                  padding: "6px",
                }}
              >
                <ActorCard name={name[0]} index={index} />
              </Grid>
            );
          })}
        </GridList> */}
      </Grid>
      <Footer />
    </div>
  );
};

export default CategoryResult;
