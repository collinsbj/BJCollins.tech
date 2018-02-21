import React from "react";
import styled from "styled-components";
import project1pic from "./rawpixel-com-395556.jpg";
import project2pic from "./pim-chu-261032.jpg";
import project3pic from "./michael-mroczek-199392.jpg";
import bgimage from "../seamless-background-80s-.jpg";
import readativity from "./Readativity.png";

function Projects() {
  return (
    <ProjectsDiv>
      <div id="projects">
        <a
          target="_blank"
          href="https://readativity-app.herokuapp.com"
          className="container"
        >
          <img src={readativity} alt="Readativity" />
          <div className="overlay">
            <div className="text">Readativity</div>
          </div>
        </a>
        <a className="container">
          <img src={project2pic} alt="project 2" />
          <div className="overlay">
            <div className="text">Coming Soon</div>
          </div>
        </a>
        <a className="container">
          <img src={project3pic} alt="project 3" />
          <div className="overlay">
            <div className="text">Coming Soon</div>
          </div>
        </a>
        <h2>Projects</h2>
      </div>
    </ProjectsDiv>
  );
}

export default Projects;

const eighties = styled.div`
  #projects {
    background-image: url(${bgimage});
    display: flex;
    height: 30vh;
  }

  .container {
    position: relative;
  }

  .container,
  img {
    height: 100%;
    width: auto;
  }

  .overlay {
    z-index: 100;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #008cba;
  }

  .container:hover .overlay {
    opacity: 1;
  }

  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  h2 {
    transform: rotate(-15deg);
    align-self: center;
    font-size: 65px;
    margin-left: 3rem;
    font-family: "Permanent Marker", cursive;
    font-variant: small-caps;
    background-image: -webkit-linear-gradient(#ff0ff8 0%, #f9f9f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-filter: drop-shadow(2px 2px 20px #f008b7);
  }
`;

const rainbow = styled.div`
  .container {
    position: relative;
  }

  .container,
  img {
    height: 100%;
    width: auto;
  }

  .overlay {
    z-index: 100;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;
    background-color: #008cba;
  }

  .container:hover .overlay {
    opacity: 1;
  }

  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  h2 {
    color: white;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    font-size: 65px;
    margin: 0 auto;
  }

  #projects {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 30vh;
    background: -webkit-linear-gradient(
      135deg,
      #23a6d5,
      #23d5ab,
      #ee7752,
      #e73c7e
    );
    background: -o-linear-gradient(135deg, #23a6d5, #23d5ab, #ee7752, #e73c7e);
    background: linear-gradient(-45deg, #23a6d5, #23d5ab, #ee7752, #e73c7e);
    background-size: 400% 400%;
    -webkit-animation: Gradient 15s ease infinite;
    animation: Gradient 15s ease infinite;
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

const ProjectsDiv = rainbow;
