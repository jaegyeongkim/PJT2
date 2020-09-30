import React from "react";
import { Grid } from "@material-ui/core";
import Footer from "components/Footer/Footer.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import Wrapper from "../../../assets/jss/material-kit-react/components/contactus";
import classNames from "classnames";
const useStyles = makeStyles(styles);
const ContactUs = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Header
        brand="The Casting"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
      />
      <Grid className={classNames(classes.main, classes.mainRaised)}>
        <Wrapper>
          <Grid className="subject">문의</Grid>
          <Grid container className="info">
            <Grid xs={12} sm={6} md={3} item>
              <Grid className="img">
                <img src="/images/contact_us_img_1.png" alt="" />
              </Grid>
              <Grid className="title">전화번호</Grid>
              <Grid className="text">042-2222-5566</Grid>
            </Grid>
            <Grid xs={12} sm={6} md={3} item>
              <Grid className="img">
                <img src="/images/contact_us_img_2.png" alt="" />
              </Grid>
              <Grid className="title">이메일</Grid>
              <Grid className="text">help@golalagolasupport.com</Grid>
            </Grid>
            <Grid xs={12} sm={6} md={3} item>
              <Grid className="img">
                <img src="/images/contact_us_img_3.png" alt="" />
              </Grid>
              <Grid className="title">팩스</Grid>
              <Grid className="text">02-2233-6655</Grid>
            </Grid>
            <Grid xs={12} sm={6} md={3} item>
              <Grid className="img">
                <img src="/images/contact_us_img_4.png" alt="" />
              </Grid>
              <Grid className="title">주소</Grid>
              <Grid className="text">
                대전 광역시 유성구 학하서로 121번길
                <br />
                (45-18 덕명동)
              </Grid>
            </Grid>
          </Grid>
        </Wrapper>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default ContactUs;
