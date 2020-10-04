import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "components/Footer/Footer.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import Wrapper from "../../assets/jss/material-kit-react/components/contactus";
import classNames from "classnames";

const useStyles = makeStyles(styles);
const BASE_URL = "http://j3b206.p.ssafy.io";
const ApplyPage = () => {
  const classes = useStyles();
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")) || []);
  }, []);

  const [content, setContent] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [uimage, setuImage] = useState("");
  const [video, setVideo] = useState("");
  const [face, setFace] = useState("");
  const [movie, setMovie] = useState("");
  const [uploadedImg, setUploadedImg] = useState({
    fileName: "",
    fillPath: "",
  });
  // if (user[0]) {
  //   setName(user[0].name);
  // }
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
  const handleVideoChange = (e) => {
    setVideo(e.target.value);
  };
  const handleFaceChange = (e) => {
    setFace(e.target.value);
  };
  const handleMovieChange = (e) => {
    setMovie(e.target.value);
  };

  const onChange = (e) => {
    setContent(e.target.files[0]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("gender", gender);
    // formData.append("birth", birth);
    // formData.append("img", content);
    // formData.append("face", face);
    // formData.append("movie", movie);
    // formData.append("video", video);
    // console.log(formData);
    return axios
      .post("/api/upload", {
        gender: gender,
        name: name,
        birth: birth,
        image: content,
        face: face,
        movie: movie,
        video: video,
      })
      .then((res) => {
        const { fileName } = res.data;
        console.log(fileName);
        setUploadedImg({
          fileName,
          filePath: `localhost:5000/upload/${fileName}`,
          // filePath: `${BASE_URL}/static/img/actor/${fileName}`,
        });
        alert("The file is successfully uploaded");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <Header
        brand="The Casting"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
      />
      <Wrapper
        style={{ marginTop: "100px" }}
        className={classNames(classes.main, classes.mainRaised)}
      >
        <form onSubmit={onSubmit}>
          {uploadedImg ? (
            <>
              <img src={uploadedImg.filePath} alt="" />
              <h3>{uploadedImg.fileName}</h3>
            </>
          ) : (
            ""
          )}
          <input type="file" onChange={onChange} />
          <br />
          <input type="name" value={name} onChange={handleNameChange} />
          <br />
          <input type="gender" value={gender} onChange={handleGenderChange} />
          <br />
          <input type="birth" value={birth} onChange={handleBirthChange} />
          <br />
          <input type="movie" value={movie} onChange={handleMovieChange} />
          <br />
          <input type="face" value={face} onChange={handleFaceChange} />
          <br />
          <input type="video" value={video} onChange={handleVideoChange} />
          <br />
          <button type="submit">Upload</button>
        </form>
        {/* <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Title level={2}>신입 배우 등록 페이지</Title>
          </div>
          <Form onSubmit>
            <div style={{ display: "flex", justifyContent: "space-between" }}> */}
        {/* <Dropzone onDrop multiple maxSize>
                maxSize
                {({ getRootProps, getInputProps }) => (
                  <div
                    style={{
                      width: "300px",
                      height: "240px",
                      border: "1px solid lightgray",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <Icon type="plus" style={{ fontSize: "3rem" }} />
                  </div>
                )}
              </Dropzone> */}
        {/* <div>
                <img src alt />
              </div>
            </div>
            <br />
            <br />
            <label>Title</label>
            <Input onChange value />
            <br />
            <br />
            <label>Description</label>
            <TextArea onChange value />
            <br />
            <br />
            <select onChange>
              <option key value></option>
            </select>

            <Button type="primary" size="large" onClick>
              Submit
            </Button> */}
        {/* </Form>
        </div> */}
      </Wrapper>
      <Footer />
    </>
  );
};

export default ApplyPage;
