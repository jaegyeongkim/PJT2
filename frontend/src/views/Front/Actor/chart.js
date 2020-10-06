import React from "react";
import { Grid } from "@material-ui/core";
import Wrapper from "../../../assets/jss/material-kit-react/components/GenrePiechart";
import { HistoGram } from "react-minimal-pie-chart";
import Chart from "react-google-charts";

const HistoGram = (props) => {
  var { birth } = props;
  birth.unshift(["출연 영화", "횟수"]);
  return (
    <Wrapper>
      <Chart
        width={"45vw"}
        height={"40vh"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={genre_cnt}
      ></Chart>
    </Wrapper>
  );
};

export default HistoGram;
