import React from "react";
import { Link, useHistory } from "react-router-dom";
import { GridList, Grid, TextField } from "@material-ui/core";
import classNames from "classnames";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
const useStyles = makeStyles(styles);

export default function SigninPage(props) {
  const classes = useStyles();
  let history = useHistory();

  const { ...rest } = props;

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
        <Grid>
          <h1>Signin</h1>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
