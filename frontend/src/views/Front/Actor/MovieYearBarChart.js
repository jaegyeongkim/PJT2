import React from "react";
import { Grid } from "@material-ui/core";
import Wrapper from "../../../assets/jss/material-kit-react/components/GenrePiechart";
import Chart from "react-google-charts";

const MovieYearBarChart = (props) => {
  var { movie_year } = props;
  var years = [];
  for (var yy = 0; yy < movie_year.length; yy++) {
    years.push(Number(movie_year[yy].slice(0, 4)));
  }

  const last = Math.max.apply(null, years);
  const first = Math.min.apply(null, years);
  const array = [];

  for (var j = first; j < last + 1; j++) {
    array.push([j, 0]);
  }
  for (var x = 0; x < years.length; x++) {
    for (var k = 0; k < array.length; k++) {
      if (years[x] === array[k][0]) {
        array[k][1]++;
        break;
      }
    }
  }
  for (var y = 0; y < array.length; y++) {
    array[y][0] = array[y][0].toString();
  }
  array.unshift(["연도", "횟수"]);

  return (
    <Wrapper>
      <Grid>
        <Chart
          width={"100%"}
          height={"50vh"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={array}
          options={{
            // Material design options
            chart: {
              title: "연도별 출연 영화 수",
              // subtitle: "",
            },
          }}
          // For tests
          rootProps={{ "data-testid": "4" }}
        />
        {/* <Chart
          width={"45vw"}
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
        /> */}
      </Grid>
    </Wrapper>
  );
};
export default MovieYearBarChart;
