import React, { useState } from "react";

import classNames from "classnames";
import { Grid, FormControlLabel, Radio, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import ButtonStyles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import { FiberManualRecord, Check } from "@material-ui/icons";
const useStyles = makeStyles(styles);
const Category = (props) => {
  const classes = useStyles();
  const buttonStyles = makeStyles(ButtonStyles);
  const { ...rest } = props;
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState([]);

  // 선택 완료 버튼 누르면 이곳으로 옵니다.
  // Router에 정보를 담아서 넘기는 거기 때문에
  // 꼭!!!! 성별 선택 + 카테고리 3개 선택이어야지만 넘어가도록 만들었습니다.
  // 이부분은 추후 상의해서 카테고리를 만들고 추천 방식을 만들어야 합니다.

  const submitCoronationData = () => {
    if (selectedGender && selectedCharacter.length === 3) {
      window.location.href = `/category-result/${selectedGender}/${selectedCharacter[0]}/${selectedCharacter[1]}/${selectedCharacter[2]}`;
    } else if (selectedGender.length === 0) {
      alert("성별 선택을 해주세요!");
    } else if (selectedCharacter.length != 3) {
      alert("카테고리를 3개만 선택해주세요!");
    }
  };
  // category_list에 제시해줄 데이터를 추가해주면 됩니다.
  const category_list = ["우직한", "비범한", "비열한", "왕", "거지"];
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
                    checked={selectedGender === "남성"}
                    onChange={() => setSelectedGender("남성")}
                    value="남성"
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
                label="남성"
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
                    checked={selectedGender === "여성"}
                    onChange={() => setSelectedGender("여성")}
                    value="여성"
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
                label="여성"
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
        </Grid>
      </Grid>
    );
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 성격 선택 체크 박스

  const Character = () => {
    const classes = buttonStyles();

    const handleToggle = (value) => {
      const currentIndex = selectedCharacter.indexOf(value);
      const newChecked = [...selectedCharacter];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setSelectedCharacter(newChecked);
    };
    return (
      <Grid>
        <h4 className={classes.subtitle}>성격</h4>
        <p>3개를 선택하세요</p>
        <GridItem>
          {category_list.map((category, index) => {
            return (
              <Grid
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(category)}
                      checked={
                        selectedCharacter.indexOf(category) !== -1
                          ? true
                          : false
                      }
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label={category}
                />
              </Grid>
            );
          })}
        </GridItem>
      </Grid>
    );
  };
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
              <h3>원하는 카테고리를 선택해보세요</h3>
            </Grid>
          </Grid>
          <Grid
            container
            xs={8}
            style={{
              display: "flex",
              justifyContent: "",
              alignItems: "center",
            }}
          >
            <Grid item>
              <Grid>
                <Gender />
              </Grid>
              <Grid>
                <Character />
              </Grid>
              <Grid onClick={submitCoronationData}>
                <Button color="primary">선택 완료</Button>
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
