import React from "react";
import { Link, useHistory } from "react-router-dom";
import { GridList, Grid, TextField } from "@material-ui/core";
import classNames from "classnames";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import Wrapper from "../../../assets/jss/material-kit-react/components/aboutus";
const useStyles = makeStyles(styles);
export default function Aboutus(props) {
  const classes = useStyles();
  let history = useHistory();

  const { ...rest } = props;

  return (
    <Grid>
      <Header
        brand="The Casting"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
      />
      <Wrapper
        style={{ marginTop: "100px" }}
        className={classNames(classes.main, classes.mainRaised)}
      >
        <Grid className="about-me">
          <h2>개발자들</h2>

          <Grid container>
            <Grid item xs={12} md={4}>
              <Grid className="picture"></Grid>
              <h3>구준모</h3>
              <Grid container justify="center" className="info">
                <Grid item className="phone">
                  +82 10 0000 0000
                </Grid>
                <Grid item className="email">
                  jeni_lee@gmail.com
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid className="picture"></Grid>
              <h3>김경수</h3>
              <Grid container justify="center" className="info">
                <Grid item className="phone">
                  +82 10 0000 0000
                </Grid>
                <Grid item className="email">
                  jeni_lee@gmail.com
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid className="picture"></Grid>
              <h3>김재경</h3>
              <Grid container justify="center" className="info">
                <Grid item className="phone">
                  +82 10 0000 0000
                </Grid>
                <Grid item className="email">
                  jeni_lee@gmail.com
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={4}>
              <Grid className="picture"></Grid>
              <h3>변찬석</h3>
              <Grid container justify="center" className="info">
                <Grid item className="phone">
                  +82 10 0000 0000
                </Grid>
                <Grid item className="email">
                  jeni_lee@gmail.com
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <Grid className="picture"></Grid>
              <h3>윤종현</h3>
              <Grid container justify="center" className="info">
                <Grid item className="phone">
                  +82 10 0000 0000
                </Grid>
                <Grid item className="email">
                  jeni_lee@gmail.com
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
      <Footer />
    </Grid>
  );
}
