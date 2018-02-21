import React from "react";
import styled from "styled-components";
import bgimage from "../seamless-background-80s11-.jpg";
import githubimg from "./github-logo(2).png";
import linkedinimg from "./linkedin.png";
import emailimg from "./opened-email-envelope.png";

function Contact() {
  return (
    <ContactDiv>
      <div id="contact">
        <h2>Contact Me</h2>
        <div>
          <a href="https://github.com/collinsbj">
            <img src={githubimg} />
          </a>
          <a href="https://www.linkedin.com/in/bjcollinswebdev/">
            <img src={linkedinimg} />
          </a>
          <a href="mailto:collinsbj@me.com">
            <img src={emailimg} />
          </a>
        </div>
      </div>
    </ContactDiv>
  );
}

export default Contact;

const eighties = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    background-image: url(${bgimage});
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
  #contact {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 30vh;
    background: -webkit-linear-gradient(
      135deg,
      #e73c7e,
      #23a6d5,
      #23d5ab,
      #ee7752
    );
    background: -o-linear-gradient(135deg, #e73c7e, #23a6d5, #23d5ab, #ee7752);
    background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab, #ee7752);
    background-size: 400% 400%;
    -webkit-animation: Gradient 15s ease infinite;
    animation: Gradient 15s ease infinite;
  }

  h2 {
    color: white;
    font-size: 65px;
  }

  img {
    margin: 2rem;
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

const ContactDiv = rainbow;
