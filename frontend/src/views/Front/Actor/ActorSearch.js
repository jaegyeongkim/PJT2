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

export default function ActorSearch(props) {
  const classes = useStyles();
  let history = useHistory();

  const { ...rest } = props;

  const onKeyPress = (currentPathname) => (e) => {
    if (e.key === "Enter") {
      history.push(`/actor-search-result/${e.target.value}`);
      // // 만약에 서치에서 또 서치를 하면
      // if (currentPathname.pathname.includes("searchresult")) {
      //   history.push(`${e.target.value}`);
      // }
      // // 만약에 디테일에서 서치를 하면
      // else if (currentPathname.pathname.includes("voteitemdetail")) {
      //   history.push(`/searchresult/${e.target.value}`);
      // }
      // // 아니라면
      // else {
      //   history.push(`/searchresult/${e.target.value}`);
      // }
    }
  };

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
        <h3>배우 이름을 검색해보세요!</h3>
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
      </div>
      <Footer />
    </div>
  );
}
