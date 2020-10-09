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

const CategoryResult1 = ({ match }, props) => {
  const faceData = match.params.cat1;
  var actorList = [];
  const classes = useStyles();
  const { actorsData } = useContext(CommonContext);
  for (var a = 0; a < actorsData.length; a++) {
    var face = actorsData[a]["face"].split("/");

    for (var f = 0; f < face.length; f++) {
      if (face[f].includes(faceData)) {
        actorList.push(actorsData[a]);
        break;
      }
    }
  }
  actorList.sort(function (a, b) {
    return a["movie_total"] - b["movie_total"];
  });
  actorList.reverse();
  actorList = actorList.slice(0, 200);
  const final = [];
  for (var fi = 0; fi < actorList.length; fi++) {
    final.push([actorList[fi]["name"], actorList[fi]["image"]]);
  }
  console.log(final);

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
            "{match.params.cat1}" 선택 결과입니다.
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

export default CategoryResult1;
