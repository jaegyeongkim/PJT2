import React, { useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import WcIcon from "@material-ui/icons/Wc";
import CakeIcon from "@material-ui/icons/Cake";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [uimage, setuImage] = useState("");

  const newmember = (email, password, gender, name, birth, uimage) => {
    return axios
      .post("/api/member/signup", {
        email: email,
        password: password,
        gender: gender,
        name: name,
        birth: birth,
        uimage: uimage,
      })
      .then(() => {
        console.log("make member");
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassWordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleBirthChange = (e) => {
    setBirth(e.target.value);
  };
  const handleuImageChange = (e) => {
    setuImage(e.target.value);
  };
  // const handleKeyPress = (e) => {
  //   // 눌려진 키가 Enter 면 handleCreate 호출
  //   if (e.key === "Enter") {
  //     handleCreate();
  //   }
  // };
  const handleCreate = () => {
    newmember(email, password, gender, name, birth, uimage).then(() => {
      console.log("hi");
    });
  };
  setTimeout(function () {
    setCardAnimation("");
  }, 100);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="The Casting"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>회원가입</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="이메일 *"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="비밀번호 *"
                      id="pass"
                      value={password}
                      onChange={handlePassWordChange}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="비밀번호 확인 *"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="이름 *"
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "name",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="성별 *"
                      id="name"
                      value={gender}
                      onChange={handleGenderChange}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "name",
                        endAdornment: (
                          <InputAdornment position="end">
                            <WcIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="출생년도 *"
                      id="name"
                      value={birth}
                      onChange={handleBirthChange}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "name",
                        endAdornment: (
                          <InputAdornment position="end">
                            <CakeIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    {/* <Link to="signup-page"> */}
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      onCreate={handleCreate}
                    >
                      회원가입
                    </Button>
                    {/* </Link> */}
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
