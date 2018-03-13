import React from "react";
import resumePng from "./Resume.png";

function Resume(props) {
  const ResumeDiv = props.theme;
  return (
    <ResumeDiv>
      <div id="resume" className="resume">
        <h2>Resume</h2>
        <img src={resumePng} alt="resume" />
      </div>
    </ResumeDiv>
  );
}

export default Resume;
