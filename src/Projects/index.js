import React from "react";
import Readativity from "./Readativity.png";
import UBIIT from "./UBIIT.jpg";
import FitCount from "./FitCount.jpg";
import TheTippingPoint from "./TheTippingPoint.jpg";

function Projects(props) {
  const ProjectsDiv = props.theme;

  return (
    <ProjectsDiv>
      <div id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projectsList">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://readativity-app.herokuapp.com"
            className="container"
          >
            <img src={Readativity} alt="Readativity" />
            <div className="overlay">
              <div className="text">Readativity</div>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://bindingofisaactracker.firebaseapp.com/"
            className="container"
          >
            <img src={UBIIT} alt="Ultimate Binding of Isaac Item Tracker" />
            <div className="overlay">
              <div className="text">UBIIT</div>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/collinsbj/D3-Gun-Data"
            className="container"
          >
            <img src={TheTippingPoint} alt="The Tipping Point" />
            <div className="overlay">
              <div className="text">The Tipping Point</div>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/collinsbj/FitCount"
            className="container"
          >
            <img src={FitCount} alt="FitCount" />
            <div className="overlay">
              <div className="text">
                FitCount<br />in progress...
              </div>
            </div>
          </a>
        </div>
      </div>
    </ProjectsDiv>
  );
}

export default Projects;
