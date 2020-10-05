import React from "react";
import { Grid } from "@material-ui/core";
import Wrapper from "../../../assets/jss/material-kit-react/components/GenrePiechart";
import { PieChart } from "react-minimal-pie-chart";
import Chart from "react-google-charts";
//   0: {id: 1, genre_name: "공포(호러)"}
// 1: {id: 2, genre_name: "드라마"}
// 2: {id: 3, genre_name: "가족"}
// 3: {id: 4, genre_name: "애니메이션"}
// 4: {id: 5, genre_name: "액션"}
// 5: {id: 6, genre_name: "코미디"}
// 6: {id: 7, genre_name: "다큐멘터리"}
// 7: {id: 8, genre_name: "멜로/로맨스"}
// 8: {id: 9, genre_name: "스릴러"}
// 9: {id: 10, genre_name: "기타"}
// 10: {id: 11, genre_name: "범죄"}
// 11: {id: 12, genre_name: "뮤지컬"}
// 12: {id: 13, genre_name: "사극"}
// 13: {id: 14, genre_name: "어드벤처"}
// 14: {id: 15, genre_name: "공연"}
// 15: {id: 16, genre_name: "SF"}
// 16: {id: 17, genre_name: "미스터리"}
// 17: {id: 18, genre_name: "판타지"}
// 18: {id: 19, genre_name: "전쟁"}
// 19: {id: 20, genre_name: "성인물(에로)"}
// 20: {id: 21, genre_name: "서부극(웨스턴)"}
// 21: {id: 22, genre_name: ""}
const GenrePiechart = (props) => {
  var { genre_cnt } = props;
  genre_cnt.unshift(["장르", "횟수"]);

  return (
    <Wrapper>
      <Grid>
        <Chart
          width={"50vw"}
          height={"45vh"}
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

        {/* {genre_cnt.map((genre, index) => {
          return (
            <p>
              {genre[0]}: {genre[1]}
            </p>
          );
        })} */}
      </Grid>
    </Wrapper>
  );
};
export default GenrePiechart;
