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
    <Grid>
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
            item
            container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button onClick={executeScroll_director}>
              <h3>감독이신가요?</h3>
            </Button>
            <Button onClick={executeScroll_actor}>
              <h3>배우이신가요?</h3>
            </Button>
          </Grid>
          <Grid>
            <h5>
              The Casting은 눈썹, 눈, 코, 입 관상을 이용해 찾으신는 이미지의
              배우를 추천해드립니다.
            </h5>
          </Grid>

          <Grid>
            <h4 ref={director}>감독</h4>
            <p>어떤 이미지의 배우를 찾으시나요?</p>
            <p>The Casting은 생각하는 이미지의 배우를 추천해드립니다.</p>
            <p>찾는 이미지를 골라 검색해보세요!</p>
            <Link
              style={{ color: "inherit" }}
              color="transparent"
              to="/category"
            >
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}
                size="lg"
                simple
              >
                배우 추천 받아보기
              </Button>
            </Link>
          </Grid>

          <Grid>
            <h4 ref={actor}>배우</h4>
            <p>자신을 소개할 곳이 부족했나요?</p>
            <p>자유롭게 사진을 고르고 감독이 찾을 수 있게 자신을 소개해봐요</p>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};
export default Introduce;