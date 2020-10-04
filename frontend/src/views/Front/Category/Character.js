import React from "react";

import classNames from "classnames";
import { Checkbox, Grid, FormControlLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import GridItem from "components/Grid/GridItem.js";
import { Check } from "@material-ui/icons";
const useStyles = makeStyles(styles);
const Character = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checked, setChecked] = React.useState([24, 22]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <Grid>
      <h4 className={classes.subtitle}>성격</h4>
      <p>최대 3개 선택</p>
      <GridItem>
        <div
          className={
            classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
          }
        >
          <FormControlLabel
            control={
              <Checkbox
                tabIndex={-1}
                onClick={() => handleToggle(21)}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot,
                }}
              />
            }
            classes={{ label: classes.label, root: classes.labelRoot }}
            label="Unchecked"
          />
        </div>
        <div
          className={
            classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
          }
        >
          <FormControlLabel
            control={
              <Checkbox
                tabIndex={-1}
                onClick={() => handleToggle(22)}
                checked={checked.indexOf(22) !== -1 ? true : false}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot,
                }}
              />
            }
            classes={{ label: classes.label, root: classes.labelRoot }}
            label="Checked"
          />
        </div>
        <div
          className={
            classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
          }
        ></div>
        <div
          className={
            classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
          }
        ></div>
      </GridItem>
      <Grid>
        <div>
          <span className={classes.subtitle}>우직한</span>
          <Checkbox
            value="checkedA"
            inputProps={{ "aria-label": "Checkbox A" }}
          />
          <span className={classes.subtitle}>비열</span>
          <Checkbox
            value="checkedA"
            inputProps={{ "aria-label": "Checkbox A" }}
          />
          <span className={classes.subtitle}>비열</span>
          <Checkbox
            value="checkedA"
            inputProps={{ "aria-label": "Checkbox A" }}
          />
          <span className={classes.subtitle}>왕</span>
          <Checkbox
            value="checkedA"
            inputProps={{ "aria-label": "Checkbox A" }}
          />
          <span className={classes.subtitle}>거지</span>
          <Checkbox
            value="checkedA"
            inputProps={{ "aria-label": "Checkbox A" }}
          />
        </div>
      </Grid>
    </Grid>
  );
};
export default Character;
