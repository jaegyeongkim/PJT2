import React from "react";
// nodejs library that concatenates classes
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="The Casting"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/6.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h3 className={classes.subtitle}>
                  이미지에 맞는 배우를 추천받아 보세요!
                </h3>
                {/* <ListItem className={classes.listItem}> */}
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
                <Link
                  style={{ color: "inherit" }}
                  color="transparent"
                  to="/introduce"
                >
                  <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                    size="lg"
                    simple
                  >
                    The Casting 소개
                  </Button>
                </Link>
                {/* </ListItem> */}
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <Footer />
    </div>
  );
}
