import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GridList, Grid, TextField } from "@material-ui/core";
import classNames from "classnames";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";

import { CommonContext } from "../../../context/CommonContext";
const useStyles = makeStyles(styles);

const CategoryResult = ({ match }, props) => {
  const faceData = [match.params.cat1, match.params.cat2, match.params.cat3];
  const actorDic = { 1: [], 2: [], 3: [], 4: [], 5: [] };
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
        actorDic[cnt].push(actorsData[a]["name"]);
      }
    }
  }
  console.log(actorDic);
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
      </Grid>
      <Footer />
    </div>
  );
};

export default CategoryResult;
