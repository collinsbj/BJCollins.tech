import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero(props) {
  const HeroDiv = props.theme;

  return (
    <HeroDiv>
      <div className="heroContainer">
        <header>
          <AnchorLink class="headerLink" href="#about">
            About
          </AnchorLink>
          <AnchorLink class="headerLink" href="#projects">
            Projects
          </AnchorLink>
          <AnchorLink class="headerLink" href="#resume">
            Resume
          </AnchorLink>
          <AnchorLink class="headerLink" href="#contact">
            Contact
          </AnchorLink>
        </header>
        <div className="heroName">
          <h1>BJ Collins</h1>
          <div className="themeSelector">
            <p>Try a different theme...</p>
            <div className="themes">
              <a onClick={props.clickHandler}>RainbOverload</a>
              <a onClick={props.clickHandler}>Eighties</a>
            </div>
          </div>
        </div>
      </div>
    </HeroDiv>
  );
}

export default Hero;
