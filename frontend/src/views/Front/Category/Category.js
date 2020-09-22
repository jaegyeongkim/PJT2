import React from "react";
import { Link } from "react-router-dom";
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
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <div style={{ marginTop: "100px" }}>
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
      <Footer />
    </div>
  );
}
