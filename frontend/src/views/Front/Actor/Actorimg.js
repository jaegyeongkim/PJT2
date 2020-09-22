import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
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
          <Link to={`actor-detail/${data}`}>
            <img
              src={require(`../../../assets/img/actors/${data}.jpg`)}
              alt="배우 사진"
            />
          </Link>
        );
      })}
    </div>
  );
};
export default Actorimg;
