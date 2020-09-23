import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import datas from "./ActorName";

const Actorimg = () => {
  const abc = () => {
    // console.log(data);
    console.log(123);
  };
  return (
    <div>
      {datas.map((data, index) => {
        return (
          <div>
            <Link to={`actor-detail/${data}`}>
              <img
                src={require(`../../../assets/img/actors/${data}.jpg`)}
                alt="배우 사진"
              />
            </Link>
            <p>{data}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Actorimg;
