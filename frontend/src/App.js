// react
import React, { useState, useEffect } from "react";

// hook
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// hook
import { CommonContext } from "./context/CommonContext";
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Design from "views/Front/design.js";
import ActorSearch from "views/Front/Actor/ActorSearch.js";
import ActorSearchResult from "views/Front/Actor/ActorSearchResult.js";
import ActorDetail from "views/Front/Actor/ActorDetail.js";
import Category from "views/Front/Category/Category.js";
import Introduce from "views/Front/Introduce/introduce.js";
import Aboutus from "views/Front/AboutUs/aboutus.js";
import License from "views/Front/License/license.js";
import SignupPage from "views/SignupPage/SignupPage.js";
// import Introduce from "views/Front/Introduce/introduce.js";

var hist = createBrowserHistory();

require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);
// app

// const getProductDatas = () => {
//   setProductDatas(1);
// };
// useEffect(() => {
//   getProductDatas();
// }, []);
const App = () => {
  // UseState 등록
  const [eventListener, setEventListener] = useState(1);
  // CommonContext로 사용하고 싶은 데이터 등록하면 됩니다.
  const [productDatas, setProductDatas] = useState(0); // 전체 데이터
  return (
    // CommonCotext로 사용하고 싶은 데이터 등록하면 됩니다.
    <CommonContext.Provider
      value={{
        productDatas,
        setProductDatas,
        eventListener,
        setEventListener,
      }}
    >
      <Router history={hist}>
        <Switch>
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/design" component={Design} />
          <Route path="/actor-search" component={ActorSearch} />
          <Route
            path="/actor-search-result/:name"
            component={ActorSearchResult}
          />
          <Route path="/actor-detail/:name" component={ActorDetail} />
          <Route path="/category" component={Category} />
          <Route path="/introduce" component={Introduce} />
          <Route path="/about-us" component={Aboutus} />
          <Route path="/license" component={License} />
          <Route path="/signup-page" component={SignupPage} />

          {/* !!!! 맨 밑에 있어야 동작합니다. */}
          <Route path="/" component={Components} />
        </Switch>
      </Router>
    </CommonContext.Provider>
  );
};

export default App;
