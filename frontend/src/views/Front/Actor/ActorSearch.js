import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, TextField } from "@material-ui/core";
import classNames from "classnames";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function ActorSearch(props) {
  const classes = useStyles();
  let history = useHistory();

  const onKeyPress = (currentPathname) => (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        alert("검색어를 입력해주세요!");
      } else history.push(`/actor-search-result/${e.target.value}`);
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
      <div className={classNames(classes.main, classes.mainRaised)}>
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
      </div>
      <Footer />
    </div>
  );
}
