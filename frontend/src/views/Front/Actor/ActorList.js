import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import SectionBasics from "../../Components/Sections/SectionBasics";
import Actorimg from "./Actorimg";
const useStyles = makeStyles(styles);

export default function ActorList(props) {
  const classes = useStyles();
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
        <div>
          <h3>배우 목록</h3>
          <Actorimg />
        </div>
      </div>
      <Footer />
    </div>
  );
}
