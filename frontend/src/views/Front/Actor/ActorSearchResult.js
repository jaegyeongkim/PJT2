import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GridList, Grid, TextField } from "@material-ui/core";
import classNames from "classnames";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import SectionBasics from "../../Components/Sections/SectionBasics";
import ActorCard from "./ActorCard";
import datas from "./ActorName";

import { CommonContext } from "../../../context/CommonContext";
import actor_names from "./actors_name_list_8146.json";

const useStyles = makeStyles(styles);

export default function ActorSearch({ match }, props) {
  const classes = useStyles();
  let history = useHistory();
  const { actorsData } = useContext(CommonContext);
  // const click = () => {
  //   history.push(`actor-detail/${name}`);
  // };

  const searchResult = [];
  for (var i = 0; i < actorsData.length; i++) {
    if (actorsData[i]["name"].includes(match.params.name)) {
      searchResult.push(actorsData[i]["name"]);
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
      <Grid
        style={{ marginTop: "100px" }}
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
          <h3>'{match.params.name}' 검색 결과입니다.</h3>
        </Grid>

        <Grid>
          {searchResult.map((name, index) => {
            return (
              <Grid>
                <ActorCard name={name} index={index} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
