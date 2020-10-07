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
              <h1 style={{ paddingRight: "30px", textAlign: "center" }}>
                <strong>The Casting은</strong>
                <hr
                  style={{
                    width: "10%",
                    height: "5px",
                    backgroundColor: "black",
                  }}
                />
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
              <h1 style={{ paddingRight: "30px", textAlign: "center" }}>
                <strong>
                  조건에 맞게 검색 <br /> 빠르게 캐스팅
                </strong>
                <hr
                  style={{
                    width: "10%",
                    height: "5px",
                    backgroundColor: "black",
                  }}
                />
                <h3>작품에 딱 맞는 배우들이 감독님을 기다리고 있습니다.</h3>
              </h1>
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
              <h1 style={{ paddingRight: "30px", textAlign: "center" }}>
                <strong>
                  영상 첨부도 안되는 <br /> PPT는 그만
                </strong>
                <hr
                  style={{
                    width: "10%",
                    height: "5px",
                    backgroundColor: "black",
                  }}
                />
                <h3>
                  The Casting에서 나만의 프로필을 제작하여
                  <br />
                  빠르고 간편하게 지원해보세요!
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
                  width: "80%",
                  Height: "80%",
                }}
                src={`https://j3b206.p.ssafy.io/static/img/main_img/intro3.png`}
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
