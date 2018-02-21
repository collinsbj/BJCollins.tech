import React from "react";
import styled from "styled-components";
import bgImage from "./seamless-background-80s-.jpg";

function About() {
  return (
    <AboutElem>
      <div id="about">
        <h2>About Me</h2>
        <p>
          I am a full stack developer in the Denver area interested in creating
          unique and amazing things using bleeding edge technologies. I have a
          love for problem-solving and working in teams of people with different
          skills to create solutions to interesting and difficult problems. I
          love being a developer as much as I love helping people become the
          developer they want to be.
        </p>
      </div>
    </AboutElem>
  );
}

export default About;

const eighties = styled.div`
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

  p {
    color: #2bd1fc;
    // font-weight: bold;
    font-size: 25px;
    margin-right: 3rem;
    line-height: 2.5rem;
  }

  div {
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
  }
`;

const rainbow = styled.div`
  div {
    height: 30vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: white;
  }

  h2 {
    font-size: 65px;
    margin-left: 3rem;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
  }

  p {
    font-size: 25px;
    margin-right: 3rem;
    line-height: 2.5rem;
  }

  p,
  h2 {
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

const AboutElem = rainbow;
