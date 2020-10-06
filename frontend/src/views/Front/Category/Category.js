import React, { useState, useContext } from "react";

import classNames from "classnames";
import {
  Grid,
  FormControlLabel,
  Radio,
  Checkbox,
  TextField,
  Chip,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import ButtonStyles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import { FiberManualRecord, Check } from "@material-ui/icons";
import { CommonContext } from "../../../context/CommonContext";
import Badge from "components/Badge/Badge.js";
const useStyles = makeStyles(styles);

const _list = [];
const selectCharacters = [];
const Category = (props) => {
  const classes = useStyles();
  const buttonStyles = makeStyles(ButtonStyles);
  const { ...rest } = props;
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState([]);
  const [liveInput, setLiveInput] = useState([]);
  const [liveCharacter, setLiveCharacter] = useState([]);
  const { characterData } = useContext(CommonContext);
  // 선택 완료 버튼 누르면 이곳으로 옵니다.
  // Router에 정보를 담아서 넘기는 거기 때문에
  // 꼭!!!! 성별 선택 + 카테고리 3개 선택이어야지만 넘어가도록 만들었습니다.
  // 이부분은 추후 상의해서 카테고리를 만들고 추천 방식을 만들어야 합니다.

  const submitCoronationData = () => {
    if (selectedGender && selectCharacters.length === 5) {
      window.location.href = `/category-result/${selectedGender}/${selectCharacters[0]}/${selectCharacters[1]}/${selectCharacters[2]}/${selectCharacters[3]}/${selectCharacters[4]}`;
    } else if (selectedGender.length === 0) {
      alert("성별 선택을 해주세요!");
    } else if (selectCharacters.length != 5) {
      alert("카테고리를 5개 선택해주세요!");
    }
  };
  // category_list에 제시해줄 데이터를 추가해주면 됩니다.
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 성별 선택 Radio 버튼

  const Gender = () => {
    const classes = buttonStyles();
    return (
      <Grid>
        <Grid>
          <h4 className={classes.subtitle}>성별</h4>
          <GridItem>
            <div
              className={
                classes.checkboxAndRadio +
                " " +
                classes.checkboxAndRadioHorizontal
              }
            >
              <FormControlLabel
                control={
                  <Radio
                    checked={selectedGender === "남자"}
                    onChange={() => setSelectedGender("남자")}
                    value="남자"
                    name="radio button enabled"
                    aria-label="A"
                    icon={
                      <FiberManualRecord className={classes.radioUnchecked} />
                    }
                    checkedIcon={
                      <FiberManualRecord className={classes.radioChecked} />
                    }
                    classes={{
                      checked: classes.radio,
                      root: classes.radioRoot,
                    }}
                  />
                }
                classes={{
                  label: classes.label,
                  root: classes.labelRoot,
                }}
                label="남자"
              />
            </div>
            <div
              className={
                classes.checkboxAndRadio +
                " " +
                classes.checkboxAndRadioHorizontal
              }
            >
              <FormControlLabel
                control={
                  <Radio
                    checked={selectedGender === "여자"}
                    onChange={() => setSelectedGender("여자")}
                    value="여자"
                    name="radio button enabled"
                    aria-label="B"
                    icon={
                      <FiberManualRecord className={classes.radioUnchecked} />
                    }
                    checkedIcon={
                      <FiberManualRecord className={classes.radioChecked} />
                    }
                    classes={{
                      checked: classes.radio,
                      root: classes.radioRoot,
                    }}
                  />
                }
                classes={{
                  label: classes.label,
                  root: classes.labelRoot,
                }}
                label="여자"
              />
            </div>
            <div
              className={
                classes.checkboxAndRadio +
                " " +
                classes.checkboxAndRadioHorizontal
              }
            ></div>
            <div
              className={
                classes.checkboxAndRadio +
                " " +
                classes.checkboxAndRadioHorizontal
              }
            ></div>
          </GridItem>
          <br />
        </Grid>
      </Grid>
    );
  };
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
    const classes = buttonStyles();

    const test = (event) => {
      const index = selectCharacters.indexOf(event.target.textContent);

      selectCharacters.indexOf(event.target.textContent) === -1
        ? selectCharacters.push(event.target.textContent)
        : selectCharacters.splice(index, 1);

      // const idx = liveInput.indexOf(event.target.textContent);
      // liveInput.indexOf(event.target.textContent) === -1
      //   ? liveInput.push(event.target.textContent)
      //   : liveInput.splice(idx, 1);
      setLiveInput((liveInput) => [...liveInput, event.target.textContent]);
    };
    // const handleToggle = (value) => {
    //   const currentIndex = selectedCharacter.indexOf(value);
    //   const newChecked = [...selectedCharacter];

    //   if (currentIndex === -1) {
    //     newChecked.push(value);
    //   } else {
    //     newChecked.splice(currentIndex, 1);
    //   }
    //   setSelectedCharacter(newChecked);
    // };
    return (
      <Grid>
        <h4 className={classes.subtitle}>이미지</h4>
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
          {/* <br />
          {liveInput.map((character, index) => {
            return (
              <span
                onClick={(e) => click(e, character)}
                style={{ cursor: "pointer" }}
              >
                <Badge color="primary">{character}</Badge>
              </span>
            );
          })} */}
        </Grid>
        <br />
      </Grid>
    );
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 실시간 변화

  // var selectedCharacterData = [];
  // const handleNameChange = (event) => {
  //   setLiveCharacter([]);
  //   setLiveInput(event.target.value);
  //   for (var i = 0; i < characterData.length; i++) {
  //     if (characterData[i]["character"].includes(liveInput)) {
  //       const data = characterData[i]["character"];
  //       setLiveCharacter((liveCharacter) => [...liveCharacter, data]);
  //       // selectedCharacterData.push(characterData[i]["character"]);
  //     }
  //   }
  //   console.log(liveCharacter);
  // };

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

      <Grid className={classNames(classes.main, classes.mainRaised)}>
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
            xs={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item>
              <h3>원하는 배우의 이미지를 검색 & 선택해보세요</h3>
              <br />
            </Grid>
          </Grid>
          <Grid
            container
            xs={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item>
              <Grid>
                <Gender />
              </Grid>
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
