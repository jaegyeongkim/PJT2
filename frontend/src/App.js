// react
import React, { useState, useEffect } from "react";
import Axios from "axios";
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
import ApplyPage from "views/ApplyPage/ApplyPage.js";
import Contactus from "views/Front/ContactUs/contactus";
import CategoryResult1 from "views/Front/Category/CategoryResult1";
import CategoryResult2 from "views/Front/Category/CategoryResult2";
import CategoryResult3 from "views/Front/Category/CategoryResult3";

var hist = createBrowserHistory();

require("react-dom");
window.React2 = require("react");

const App = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")) || []);
  }, []);

  // UseState 등록
  const [actorsData, setActorsData] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [genreData, setGenreData] = useState([]);
  const [characterData, setCharacterData] = useState([]);
  // CommonContext로 사용하고 싶은 데이터 등록하면 됩니다.

  // 배우 데이터

  async function getActorDatas() {
    // Axios.get("https://j3b206.p.ssafy.io/api/actor2/").then(function (res) {
    Axios.get("https://j3b206.p.ssafy.io/api/actor/").then(function (res) {
      setActorsData(res.data);
    });
  }
  async function getMovieDatas() {
    Axios.get("https://j3b206.p.ssafy.io/api/movie/").then(function (res) {
      setMovieData(res.data);
    });
  }
  async function getGenreDatas() {
    Axios.get("https://j3b206.p.ssafy.io/api/genre/").then(function (res) {
      setGenreData(res.data);
    });
  }

  async function getCharacterDatas() {
    Axios.get("https://j3b206.p.ssafy.io/api/character/").then(function (res) {
      setCharacterData(res.data);
    });
  }

  useEffect(() => {
    getActorDatas();
    getMovieDatas();
    getGenreDatas();
    getCharacterDatas();
  }, []);

  return (
    // CommonCotext로 사용하고 싶은 데이터 등록하면 됩니다.
    <CommonContext.Provider
      value={{
        actorsData,
        setActorsData,
        movieData,
        setMovieData,
        genreData,
        setGenreData,
        characterData,
        setCharacterData,
      }}
    >
      <Router history={hist}>
        <Switch>
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/apply-page" component={ApplyPage} />
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
          <Route path="/contact-us" component={Contactus} />
          <Route path="/category-result1/:cat1/" component={CategoryResult1} />
          <Route
            path="/category-result2/:cat1/:cat2/"
            component={CategoryResult2}
          />
          <Route
            path="/category-result3/:cat1/:cat2/:cat3/"
            component={CategoryResult3}
          />

          {/* !!!! 맨 밑에 있어야 동작합니다. */}
          <Route path="/" component={Components} />
        </Switch>
      </Router>
    </CommonContext.Provider>
  );
};

export default App;
