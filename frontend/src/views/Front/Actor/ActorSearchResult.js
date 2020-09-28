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

import { CommonContext } from "../../../context/CommonContext";
import ActorSearch from "./ActorSearch";
const useStyles = makeStyles(styles);

export default function ActorSearchResult({ match }, props) {
  const classes = useStyles();
  let history = useHistory();
  const { actorsData } = useContext(CommonContext);
  // const click = () => {
  //   history.push(`actor-detail/${name}`);
  // };
  const onKeyPress = (currentPathname) => (e) => {
    if (e.key === "Enter") {
      history.push(`/actor-search-result/${e.target.value}`);
    }
  };
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
        <Grid>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3>배우 이름을 검색해보세요!</h3>
          </Grid>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              placeholder="Search..."
              autoFocus={true}
              onKeyPress={onKeyPress(history.location)}
              // className="input2"
              style={{
                height: "5vh",
                width: "10vw",
              }}
            />
          </Grid>
        </Grid>
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

        <GridList>
          {searchResult.map((name, index) => {
            return (
              <Grid
                xs={3}
                md={2}
                style={{ cursor: "pointer", width: "100%", height: "100%" }}
              >
                <ActorCard name={name} index={index} />
              </Grid>
            );
          })}
        </GridList>
      </Grid>
      <Footer />
    </div>
  );
}
