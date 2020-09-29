import React from "react";
import { Grid } from "@material-ui/core";
import Wrapper from "../../../assets/jss/material-kit-react/components/GenrePiechart";

import { PieChart } from "react-minimal-pie-chart";
const GenrePiechart = () => {
  return (
    <Wrapper>
      <Grid>
        <PieChart
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" },
          ]}
        />
        {/* https://www.npmjs.com/package/react-minimal-pie-chart */}
      </Grid>
    </Wrapper>
  );
};
export default GenrePiechart;
