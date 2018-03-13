import React from "react";

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
