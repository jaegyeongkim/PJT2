import React from "react";
import { Link } from "react-router-dom";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
const useStyles = makeStyles(styles);
const ActorDetail = ({ match }) => {
  const classes = useStyles();
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
        <img
          src={require(`../../../assets/img/actors/${match.params.name}.jpg`)}
          alt="배우 사진"
        />
        <p>{match.params.name}</p>
      </div>
      <Footer />
    </div>
  );
};
export default ActorDetail;
