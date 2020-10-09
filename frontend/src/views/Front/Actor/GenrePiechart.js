import React from "react";
import { Grid } from "@material-ui/core";
import Wrapper from "../../../assets/jss/material-kit-react/components/GenrePiechart";
import Chart from "react-google-charts";

const GenrePiechart = (props) => {
  var { genre_cnt } = props;
  genre_cnt.unshift(["장르", "횟수"]);

  return (
    <Wrapper>
      <Grid>
        <Chart
          width={"35vw"}
          height={"40vh"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={genre_cnt}
          options={{
            title: "출연 영화 장르",
            // Just add this option
            is3D: true,
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </Grid>
    </Wrapper>
  );
};
export default GenrePiechart;
