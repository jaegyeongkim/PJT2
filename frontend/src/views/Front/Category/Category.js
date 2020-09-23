import React from "react";

import classNames from "classnames";
import { Button, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
const useStyles = makeStyles(styles);
export default function Category(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="The Casting"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        {...rest}
      />

      <div
        style={{ marginTop: "100px" }}
        className={classNames(classes.main, classes.mainRaised)}
      >
        <div>
          <h3>원하는 카테고리를 선택해보세요</h3>
        </div>

        <div>
          <h4 className={classes.subtitle}>성별</h4>
          <div>
            <span className={classes.subtitle}>남자</span>
            <Checkbox
              value="checkedA"
              inputProps={{ "aria-label": "Checkbox A" }}
            />
            <span className={classes.subtitle}>여자</span>
            <Checkbox
              value="checkedA"
              inputProps={{ "aria-label": "Checkbox A" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
