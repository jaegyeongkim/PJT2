import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, GridList, Grid, TextField } from "@material-ui/core";
import classNames from "classnames";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/introduce.js";
import SectionBasics from "../../Components/Sections/SectionBasics";

const useStyles = makeStyles(styles);
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const Introduce = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const { ...rest } = props;
  const director = useRef();
  const actor = useRef();
  const executeScroll_director = () => {
    director.current.scrollIntoView({ behavior: "smooth" });
  };
  const executeScroll_actor = () => {
    actor.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header
        brand="The Casting"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
      />
      <Grid
        container
        direction="column"
        // style={{ marginTop: "100px" }}
        className={classNames(classes.main, classes.mainRaised)}
        xs={12}
      >
        <Grid item xs={12}>
          <Grid container direction="row">
            <Grid item xs={6} style={{ background: "F6F8F9" }}>
              <h2>
                The Casting은
                <h5>
                  배우의 눈썹, 눈, 코, 입을 관상 데이터와 비교하여 카테고리별로
                  배우를 추천해드립니다.
                </h5>
              </h2>
            </Grid>
            <Grid item xs={6}>
              <img
                style={{
                  width: "100%",
                  Height: "100%",
                }}
                src={`https://j3b206.p.ssafy.io/static/img/main_img/intro1.png`}
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item xs={6}>
            <img
              style={{
                width: "100%",
                Height: "100%%",
              }}
              src={`https://j3b206.p.ssafy.io/static/img/main_img/intro2.jpg`}
              alt=""
            />
          </Grid>
          <Grid item xs={6}>
            <h2>
              The Casting은
              <h5>
                배우의 눈썹, 눈, 코, 입을 관상 데이터와 비교하여 카테고리별로
                배우를 추천해드립니다.
              </h5>
            </h2>
          </Grid>
        </Grid>
        <Grid>
          <Grid container direction="row">
            <Grid item xs={6}>
              <h2>
                The Casting은
                <h5>
                  배우의 눈썹, 눈, 코, 입을 관상 데이터와 비교하여 카테고리별로
                  배우를 추천해드립니다.
                </h5>
              </h2>
            </Grid>
            <Grid item xs={6}>
              <img
                style={{
                  width: "100%",
                  Height: "100%",
                }}
                src={`https://j3b206.p.ssafy.io/static/img/main_img/intro1.png`}
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>

        <Footer />
      </Grid>
    </>
  );
};
export default Introduce;
