import React from "react";
import styled from "styled-components";
import resumepng from "./Resume.png";

function Resume() {
  return (
    <ResumeDiv>
      <div id="resume">
        <h2>Resume</h2>
        <img src={resumepng} alt="resume" />
      </div>
    </ResumeDiv>
  );
}

export default Resume;

const eighties = styled.div`
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    height: 100vh;
  }

  img {
    height: 100%;
    width: auto;
  }

  h2 {
    transform: rotate(-15deg);
    font-size: 65px;
    margin-left: 3rem;
    align-self: center;
    font-family: "Permanent Marker", cursive;
    font-variant: small-caps;
    background-image: -webkit-linear-gradient(#ff0ff8 0%, #f9f9f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const rainbow = styled.div`
  div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: white;
    height: 100vh;
  }

  img {
    height: 100%;
    width: auto;
  }

  h2 {
    font-size: 65px;
    background: -webkit-linear-gradient(
      135deg,
      #23d5ab,
      #ee7752,
      #e73c7e,
      #23a6d5
    );
    background: -o-linear-gradient(135deg, #23d5ab, #ee7752, #e73c7e, #23a6d5);
    background: linear-gradient(-45deg, #23d5ab, #ee7752, #e73c7e, #23a6d5);
    background-size: 400% 400%;
    -webkit-animation: Gradient 15s ease infinite;
    animation: Gradient 15s ease infinite;
    background-clip: text;
    text-fill-color: transparent;
  }

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const ResumeDiv = rainbow;
