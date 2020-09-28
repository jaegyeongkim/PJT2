import React, { useEffect, useState } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Icon } from "@material-ui/core";
import { Link, useHistory, Redirect } from "react-router-dom";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
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
  let history = useHistory();

  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 100);
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [member, setMember] = useState([]);
  const { ...rest } = props;

  useEffect(() => {
    async function fetchData() {
      await axios.get(`/api/member`).then((res) => {
        setMember(res.data);
      });
    }
    fetchData();
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));
  const Login = (email, password) => {
    const memberList = member.filter((mem) => mem.email === email);
    if (memberList.length !== 0) {
      if (memberList[0].password !== password) {
        alert("패스워드를 정확히 입력해주세요.");
        return;
      } else {
        localStorage.setItem("user", JSON.stringify(memberList));
        history.push(`/`);
        return;
      }
    } else {
      return;
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassWordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (!password || !email) {
      alert("회원정보를 모두 입력해주세요.");
      return;
    } else {
      Login(email, password);
    }
  };
  if (user) {
    localStorage.removeItem("user");
    alert("로그아웃이 완료되었습니다.");
    history.push("/");
    return <></>;
  }
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
                    <h4>로그인</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
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
                      labelText="Password"
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
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Link to="signup-page">
                      <Button simple color="primary" size="lg">
                        회원가입
                      </Button>
                    </Link>
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      onLogin={handleLogin}
                    >
                      로그인
                    </Button>
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
