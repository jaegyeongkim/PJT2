import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Grid, GridList } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Footer from "components/Footer/Footer.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
// import Wrapper from "../../assets/jss/material-kit-react/components/contactus";
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

const useStyles = makeStyles(styles);
const ApplyPage = () => {
  const classes = useStyles();
  const [user, setUser] = useState([[]]);
  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")) || []);
  }, []);
  let history = useHistory();

  const [file, setFile] = useState("");
  const [file2, setFile2] = useState("");
  const [url, setUrl] = useState("");
  const [url2, setUrl2] = useState("");
  // const [gender, setGender] = useState("");
  // const [name, setName] = useState("");
  // const [birth, setBirth] = useState("");
  // const [uimage, setuImage] = useState("");
  // const [video, setVideo] = useState("");
  // const [face, setFace] = useState("");
  // const [movie, setMovie] = useState("");

  // const handleGenderChange = (e) => {
  //   setGender(e.target.value);
  // };
  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };
  // const handleBirthChange = (e) => {
  //   setBirth(e.target.value);
  // };
  // const handleuImageChange = (e) => {
  //   setuImage(e.target.value);
  // };
  // const handleVideoChange = (e) => {
  //   setVideo(e.target.value);
  // };
  // const handleFaceChange = (e) => {
  //   setFace(e.target.value);
  // };
  // const handleMovieChange = (e) => {
  //   setMovie(e.target.value);
  // };

  // const actorface = (info) => {
  //   fetch("/api/upload/face", {
  //     method: "post",
  //     body: info,
  //   });
  // };

  const onChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const onChange2 = (e) => {
    e.preventDefault();
    let reader2 = new FileReader();
    let file2 = e.target.files[0];
    reader2.onloadend = () => {
      setFile2(file2);
      setUrl2(reader2.result);
    };
    reader2.readAsDataURL(file2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("id", user[0].id);
    formData.append("gender", user[0].gender);
    formData.append("name", event.target.name.value);
    formData.append("profile_img", event.target.profile_img.files[0]);
    // formData.append("birth", event.target.birth.value);
    // formData.append("face", event.target.face.value);
    // formData.append("movie", event.target.movie.value);
    formData.append("profile_video", event.target.profile_video.files[0]);

    register(formData);
  };

  const register = (regiInfo) => {
    fetch("/api/upload/account", {
      method: "post",
      body: regiInfo,
    })
      .then((res) => res.json())
      .then((data) => alert(data.msg));
    history.push(`/`);
  };

  let profile_preview = null;
  if (file !== "") {
    profile_preview = (
      <img
        style={{ width: "300px" }}
        className="profile_preview"
        src={url}
      ></img>
    );
  }
  return (
    <>
      <Header
        brand="The Casting"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
      />
      <Grid className={classNames(classes.main, classes.mainRaised)}>
        <Grid
          container
          direction="column"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={11}
            style={{
              fontSize: "3.5vw",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            등록하기
          </Grid>

          <Grid
            item
            xs={11}
            style={{
              marginLeft: "50px",
            }}
          >
            <form
              name="accountFrm"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              style={{ width: "80%" }}
            >
              <br />
              <Grid container justify="space-between" alignItems="center">
                <Grid
                  item
                  xs={12}
                  style={{ fontSize: "1.5vw", marginBottom: "20px" }}
                >
                  프로필 사진 (영문 파일)
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  <input
                    type="file"
                    accept="image/jpg,impge/png,image/jpeg,image/gif"
                    name="profile_img"
                    onChange={onChange}
                  ></input>
                </Grid>
              </Grid>
              <hr />
              <div style={{ display: "flex", justifyContent: "center" }}>
                {profile_preview}
              </div>

              <br />
              <br />
              <br />
              <br />
              <br />
              {/* <Grid container justify="space-between" alignItems="center">
                <Grid item style={{ fontSize: "1.5vw" }}>
                  이름
                </Grid>
                <Grid item>
                  <input
                    style={{
                      width: "6vw",
                      height: "4vh",
                      borderRadius: 6,
                      fontSize: "1.2vw",
                      textAlign: "center",
                    }}
                    type="text"
                    name="name"
                    defaultValue={user[0].name}
                  ></input>
                </Grid>
              </Grid>

              <hr />
              <br />
              <br />
              <Grid container justify="space-between" alignItems="center">
                <Grid item style={{ fontSize: "1.5vw" }}>
                  성별
                </Grid>
                <Grid item>
                  <div
                    style={{
                      fontSize: "1.3vw",

                      textAlign: "right",
                    }}
                    type="text"
                    name="gender"
                    value={user[0].gender}
                  >
                    {user[0].gender}
                  </div>
                </Grid>
              </Grid>

              <hr />
              <br />
              <br /> */}

              <Grid container direction="column">
                <Grid
                  item
                  xs={12}
                  style={{ fontSize: "1.5vw", marginBottom: "20px" }}
                >
                  자신을 어필할 영상 (5MB 이하)
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  <input
                    type="file"
                    name="profile_video"
                    onChange={onChange2}
                  ></input>
                </Grid>
              </Grid>
              <hr />
              <br />
              <br />

              <Grid
                item
                xs={11}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Button color="primary" type="submit">
                  등록하기
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default ApplyPage;
