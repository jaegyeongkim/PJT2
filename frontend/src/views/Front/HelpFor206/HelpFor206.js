import React from "react";
import { Link } from "react-router-dom";
export default function HelpFo206(props) {
  return (
    <div>
      <h3>206팀을 위한 페이지 소개</h3>
      <h4>원하는 페이지를 눌러보세요 해당 페이지로 넘어갈 거에요!</h4>
      <ul>
        <li>
          <Link to="/landing-page">랜딩 페이지</Link>
        </li>
        <li>
          <Link to="/profile-page">프로필 페이지</Link>
        </li>
        <li>
          <Link to="/login-page">로그인 페이지</Link>
        </li>
        <li>
          <Link to="/design">디자인 페이지</Link>
        </li>
      </ul>
    </div>
  );
}
