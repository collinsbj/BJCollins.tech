import React from "react";
import resumepng from "./Resume.png";

function Resume(props) {
  const ResumeDiv = props.theme;
  return (
    <ResumeDiv>
      <div id="resume" className="resume">
        <h2>Resume</h2>
        <img src={resumepng} alt="resume" />
      </div>
    </ResumeDiv>
  );
}

export default Resume;

// const eighties = styled.div`
//   div {
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     background: white;
//     height: 100vh;
//   }

//   img {
//     height: 100%;
//     width: auto;
//   }

//   h2 {
//     transform: rotate(-15deg);
//     font-size: 65px;
//     margin-left: 3rem;
//     align-self: center;
//     font-family: "Permanent Marker", cursive;
//     font-variant: small-caps;
//     background-image: -webkit-linear-gradient(#ff0ff8 0%, #f9f9f7 100%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
// `;
