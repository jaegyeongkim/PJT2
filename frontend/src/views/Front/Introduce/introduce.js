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
import { Height } from "@material-ui/icons";

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
        direction="column"
        style={{ marginTop: "71px" }}
        // className={classNames(classes.main, classes.mainRaised)}
      >
        <Grid style={{ background: "white", height: "650px" }}>
          <Grid
            direction="row"
            style={{
              height: "650px",
              display: "flex",
              padding: "0 100px",
            }}
          >
            <Grid
              style={{
                height: "650px",
                display: "flex",
                alignItems: "center",
                width: "50%",
              }}
            >
              <h1 style={{ paddingRight: "30px" }}>
                <strong>The Casting은</strong>
                <h3>
                  배우의 얼굴을 관상 데이터와 비교하여 <br /> 이미지
                  카테고리별로 배우를 추천해드립니다.
                </h3>
              </h1>
            </Grid>
            <Grid
              style={{
                height: "650px",
                display: "flex",
                alignItems: "center",
                width: "50%",
              }}
            >
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
        <Grid style={{ background: "#FAF8F6", height: "650px" }}>
          <Grid
            direction="row"
            style={{
              height: "650px",
              display: "flex",
              padding: "0 100px",
            }}
          >
            <Grid
              style={{
                height: "650px",
                display: "flex",
                alignItems: "center",
                width: "50%",
              }}
            >
              <img
                style={{
                  width: "80%",
                  Height: "80%%",
                }}
                src={`https://j3b206.p.ssafy.io/static/img/main_img/intro2.jpg`}
                alt=""
              />
            </Grid>
            <Grid
              style={{
                height: "650px",
                display: "flex",
                alignItems: "center",
                width: "50%",
              }}
            >
              <h2 style={{ paddingLeft: "30px" }}>
                The Casting은
                <h5>
                  배우의 눈썹, 눈, 코, 입을 관상 데이터와 비교하여 카테고리별로
                  배우를 추천해드립니다.
                </h5>
              </h2>
            </Grid>
          </Grid>
        </Grid>
        <Grid style={{ background: "white", height: "650px" }}>
          <Grid
            direction="row"
            style={{
              height: "650px",
              display: "flex",
              padding: "0 100px",
            }}
          >
            <Grid
              style={{
                height: "650px",
                display: "flex",
                alignItems: "center",
                width: "50%",
              }}
            >
              <h2 style={{ paddingRight: "30px" }}>
                The Casting은
                <h5>
                  배우의 눈썹, 눈, 코, 입을 관상 데이터와 비교하여 카테고리별로
                  배우를 추천해드립니다.
                </h5>
              </h2>
            </Grid>
            <Grid
              style={{
                height: "650px",
                display: "flex",
                alignItems: "center",
                width: "50%",
              }}
            >
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
