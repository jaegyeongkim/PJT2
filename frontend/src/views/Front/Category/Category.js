import React, { useState, useContext } from "react";

import classNames from "classnames";
import {
  Grid,
  // FormControlLabel,
  // Radio,
  // Checkbox,
  TextField,
  // Chip,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
// import ButtonStyles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import Button from "components/CustomButtons/Button.js";
// import GridItem from "components/Grid/GridItem.js";
// import { FiberManualRecord, Check } from "@material-ui/icons";
import { CommonContext } from "../../../context/CommonContext";
import Badge from "components/Badge/Badge.js";
const useStyles = makeStyles(styles);

const selectCharacters = [];
const Category = (props) => {
  const classes = useStyles();
  // const buttonStyles = makeStyles(ButtonStyles);
  const { ...rest } = props;
  // const [selectedGender, setSelectedGender] = useState("");
  // const [selectedCharacter, setSelectedCharacter] = useState([]);
  const [liveInput, setLiveInput] = useState([]);
  // const [liveCharacter, setLiveCharacter] = useState([]);
  const { characterData } = useContext(CommonContext);
  // 선택 완료 버튼 누르면 이곳으로 옵니다.
  // Router에 정보를 담아서 넘기는 거기 때문에
  // 꼭!!!! 성별 선택 + 카테고리 3개 선택이어야지만 넘어가도록 만들었습니다.
  // 이부분은 추후 상의해서 카테고리를 만들고 추천 방식을 만들어야 합니다.

  const submitCoronationData = () => {
    if (selectCharacters.length === 1) {
      window.location.href = `/category-result1/${selectCharacters[0]}`;
    } else if (selectCharacters.length === 2) {
      window.location.href = `/category-result2/${selectCharacters[0]}/${selectCharacters[1]}/`;
    } else if (selectCharacters.length === 3) {
      window.location.href = `/category-result3/${selectCharacters[0]}/${selectCharacters[1]}/${selectCharacters[2]}/`;
    } else if (selectCharacters.length < 1) {
      alert("카테고리를 1개 이상 선택해주세요!");
    } else if (selectCharacters.length > 3) {
      alert("카테고리를 3개 이하로 선택해주세요!");
    }
  };
  // category_list에 제시해줄 데이터를 추가해주면 됩니다.
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 성별 선택 Radio 버튼
  // const Gender = () => {
  //   const classes = buttonStyles();
  //   return (
  //     <Grid>
  //       <Grid>
  //         <h4 className={classes.subtitle}>성별</h4>
  //         <GridItem>
  //           <div
  //             className={
  //               classes.checkboxAndRadio +
  //               " " +
  //               classes.checkboxAndRadioHorizontal
  //             }
  //           >
  //             <FormControlLabel
  //               control={
  //                 <Radio
  //                   checked={selectedGender === "남자"}
  //                   onChange={() => setSelectedGender("남자")}
  //                   value="남자"
  //                   name="radio button enabled"
  //                   aria-label="A"
  //                   icon={
  //                     <FiberManualRecord className={classes.radioUnchecked} />
  //                   }
  //                   checkedIcon={
  //                     <FiberManualRecord className={classes.radioChecked} />
  //                   }
  //                   classes={{
  //                     checked: classes.radio,
  //                     root: classes.radioRoot,
  //                   }}
  //                 />
  //               }
  //               classes={{
  //                 label: classes.label,
  //                 root: classes.labelRoot,
  //               }}
  //               label="남자"
  //             />
  //           </div>
  //           <div
  //             className={
  //               classes.checkboxAndRadio +
  //               " " +
  //               classes.checkboxAndRadioHorizontal
  //             }
  //           >
  //             <FormControlLabel
  //               control={
  //                 <Radio
  //                   checked={selectedGender === "여자"}
  //                   onChange={() => setSelectedGender("여자")}
  //                   value="여자"
  //                   name="radio button enabled"
  //                   aria-label="B"
  //                   icon={
  //                     <FiberManualRecord className={classes.radioUnchecked} />
  //                   }
  //                   checkedIcon={
  //                     <FiberManualRecord className={classes.radioChecked} />
  //                   }
  //                   classes={{
  //                     checked: classes.radio,
  //                     root: classes.radioRoot,
  //                   }}
  //                 />
  //               }
  //               classes={{
  //                 label: classes.label,
  //                 root: classes.labelRoot,
  //               }}
  //               label="여자"
  //             />
  //           </div>
  //           <div
  //             className={
  //               classes.checkboxAndRadio +
  //               " " +
  //               classes.checkboxAndRadioHorizontal
  //             }
  //           ></div>
  //           <div
  //             className={
  //               classes.checkboxAndRadio +
  //               " " +
  //               classes.checkboxAndRadioHorizontal
  //             }
  //           ></div>
  //         </GridItem>
  //         <br />
  //       </Grid>
  //     </Grid>
  //   );
  // };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Badge
  const click = (e, data) => {
    console.log(data);
    const index = selectCharacters.indexOf(data);
    console.log(selectCharacters);
    selectCharacters.splice(index, 1);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 성격 선택 체크 박스
  const Character = () => {
    const test = (event) => {
      const index = selectCharacters.indexOf(event.target.textContent);

      selectCharacters.indexOf(event.target.textContent) === -1
        ? selectCharacters.push(event.target.textContent)
        : selectCharacters.splice(index, 1);

      setLiveInput((liveInput) => [...liveInput, event.target.textContent]);
    };

    return (
      <Grid>
        {/* <h4 className={classes.subtitle}>이미지</h4> */}
        {/* <p>3개를 선택하세요</p> */}
        <div className={checkclasses.root}>
          <Autocomplete
            onChange={test}
            multiple
            limitTags={5}
            id="multiple-limit-tags"
            options={Object(characterData)}
            getOptionLabel={(option) =>
              typeof option === "string" ? option : option.character
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="원하는 키워드를 검색하여 선택해보세요 "
                placeholder="검색"
              />
            )}
          />
        </div>

        <Grid>
          <br />
          {selectCharacters.map((character, index) => {
            return (
              <span
                onClick={(e) => click(e, character)}
                style={{ cursor: "pointer" }}
              >
                <Badge color="primary">{character}</Badge>
              </span>
            );
          })}
        </Grid>
        <br />
      </Grid>
    );
  };

  const checkstyles = makeStyles((theme) => ({
    root: {
      width: 500,
      "& > * + *": {
        marginTop: theme.spacing(3),
      },
    },
  }));
  const checkclasses = checkstyles();
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 최종 return 하는 곳
  return (
    <div>
      <Header
        brand="The Casting"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        {...rest}
      />

      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundImage:
          //   "url(https://j3b206.p.ssafy.io/static/img/main_img/main1.jpg)",
          // backgroundPosition: "center",
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
        }}
        className={classNames(classes.main, classes.mainRaised)}
      >
        <Grid>
          {/* <img
            src="https://j3b206.p.ssafy.io/static/img/main_img/main1.jpg"
            style={{ height: "40vh" }}
            alt="관상"
          /> */}
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item>
                <br />
                <br />
                <br />
                <br />
                {/* <br />
                <br />
                <br /> */}
                <h3 style={{ textAlign: "center" }}>어떤 이미지의</h3>
                <h3 style={{ textAlign: "center" }}>인물을 찾으시나요?</h3>
                <h5>최대 3개의 키워드를 선택해보세요.</h5>
                <br />
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item>
                {/* <Grid>
                <Gender />
              </Grid> */}
                <Grid>
                  <Character
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </Grid>

                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid onClick={submitCoronationData}>
                    <Button color="primary">선택 완료</Button>
                    <br />
                    <br />
                    <br />
                    <br />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Category;
