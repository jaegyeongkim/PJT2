import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GridList, Grid, TextField } from "@material-ui/core";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import { CommonContext } from "../../../context/CommonContext";
import { supportsGoWithoutReloadUsingHash } from "history/DOMUtils";
const useStyles = makeStyles(styles);

const ActorDetail = ({ match }) => {
  const classes = useStyles();
  const { actorsData } = useContext(CommonContext);

  for (var i = 0; i < actorsData.length; i++) {
    if (actorsData[i]["name"] == match.params.name) {
      var filmo = actorsData[i]["movie"].split(",");
      break;
    }
  }

  var filmo_list = [];
  for (var i = 0; i < Object(filmo).length; i++) {
    filmo_list.push(filmo[i]);
  }

  return (
    <div>
      <Header
        brand="The Casting"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
      />
      <div
        style={{ marginTop: "100px" }}
        className={classNames(classes.main, classes.mainRaised)}
      >
        <img
          src={`https://j3b206.p.ssafy.io/static/img/actor/${match.params.name}.jpg`}
          alt="배우 사진"
        />
        <Grid>
          {filmo_list.map((movie, index) => {
            return <p>{movie}</p>;
          })}
        </Grid>

        <p>{match.params.name}</p>
      </div>
      <Footer />
    </div>
  );
};
export default ActorDetail;
