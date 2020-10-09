import React, { useContext } from "react";
import { GridList, Grid } from "@material-ui/core";
import classNames from "classnames";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import ActorCard from "../Actor/ActorCard";

import { CommonContext } from "../../../context/CommonContext";
const useStyles = makeStyles(styles);

const CategoryResult3 = ({ match }, props) => {
  const faceData = [match.params.cat1, match.params.cat2, match.params.cat3];
  const actorDic = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  const actor200 = [];
  const actorReal200over = [];
  const classes = useStyles();
  const { actorsData } = useContext(CommonContext);
  for (var a = 0; a < actorsData.length; a++) {
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
  var actor200Cnt = 0;
  for (var s = 5; s > 0; s--) {
    if (actorDic[s].length > 0) {
      if (actorDic[s].length <= 200) {
        actor200Cnt = actorDic[s].length;
      }
      for (var b = 0; b < actorDic[s].length; b++) {
        actor200.push(actorDic[s][b]);
      }
    }
    if (actorDic[s].length > 200) {
      break;
    }
  }

  const actorReal200 = [];
  const final = [];
  if (actor200Cnt > 0) {
    for (var ac = 0; ac < actor200Cnt; ac++) {
      actorReal200.push(actor200[ac]);
    }
    for (var oc = actor200Cnt; oc < actor200.length; oc++) {
      actorReal200over.push(actor200[oc]);
    }

    actorReal200.sort(function (a, b) {
      return a["movie_total"] - b["movie_total"];
    });
    actorReal200.reverse();
    actorReal200over.sort(function (a, b) {
      return a["movie_total"] - b["movie_total"];
    });
    actorReal200over.reverse();
    const N = actorReal200.length;
    for (var aoc = 0; aoc < 200 - N; aoc++) {
      actorReal200.push(actorReal200over[aoc]);
    }

    for (var fi = 0; fi < actorReal200.length; fi++) {
      if (actorReal200[fi] !== undefined) {
        final.push([actorReal200[fi]["name"], actorReal200[fi]["image"]]);
      }
    }
  } else {
    actor200.sort(function (a, b) {
      return a["movie_total"] - b["movie_total"];
    });
    actor200.reverse();
    for (var ec = 0; ec < 200; ec++) {
      actorReal200.push(actor200[ec]);
    }
    for (var fif = 0; fif < actorReal200.length; fif++) {
      if (actorReal200[fif] !== undefined) {
        final.push([actorReal200[fif]["name"], actorReal200[fif]["image"]]);
      }
    }
  }

  return (
    <div>
      <Header
        brand="The Casting"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
      />
      <Grid className={classNames(classes.main, classes.mainRaised)}>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ padding: "5vh 0" }}>
            "{match.params.cat1}" + "{match.params.cat2}" + "{match.params.cat3}{" "}
            " 선택 결과입니다.
          </h3>
        </Grid>
        <GridList>
          {final.map((name, index) => {
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
                <ActorCard name={name[0]} image={name[1]} index={index} />
              </Grid>
            );
          })}
        </GridList>
      </Grid>
      <Footer />
    </div>
  );
};

export default CategoryResult3;
