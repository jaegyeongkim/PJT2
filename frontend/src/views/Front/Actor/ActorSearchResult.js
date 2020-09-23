import React from "react";
import { Link, useHistory } from "react-router-dom";
import { GridList, Grid, TextField } from "@material-ui/core";
import classNames from "classnames";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import SectionBasics from "../../Components/Sections/SectionBasics";
import Actorimg from "./Actorimg";
import datas from "./ActorName";
const useStyles = makeStyles(styles);

export default function ActorSearch({ match }) {
  const classes = useStyles();
  let history = useHistory();

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
        <h3>{match.params.name} 에 대한 검색 결과입니다.</h3>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Grid>
      </div>
      <Footer />
    </div>
  );
}
