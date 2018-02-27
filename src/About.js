import React from "react";
import bgImage from "./seamless-background-80s-.jpg";

function About(props) {
  const AboutDiv = props.theme;

  return (
    <AboutDiv>
      <div id="about" className="about">
        <h2>About Me</h2>
        <p>
          I am a full stack developer in the Denver area interested in creating
          unique and amazing things using bleeding edge technologies. I have a
          love for problem-solving and working in teams of people with different
          skills to create solutions to interesting and difficult problems. My
          outlook on development is to always be pushing the boundaries of what
          I know and what is possible.
        </p>
      </div>
    </AboutDiv>
  );
}

export default About;

// const eighties = styled.div`
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

//   p {
//     color: #2bd1fc;
//     // font-weight: bold;
//     font-size: 25px;
//     margin-right: 3rem;
//     line-height: 2.5rem;
//   }

//   div {
//     height: 30vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: white;
//   }
// `;
