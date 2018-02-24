import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import bgimage from "./Synthwave-Neon-80s-Background-4K.jpg";

function Hero(props) {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  return (
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
        {/* <div className="dropdownContainer">
            <div className="dropdown">
              <button onClick={myFunction}>Choose a theme...</button>
              <div id="myDropdown" class="dropdown-content">
                <a onClick={props.clickHandler}>RainbOverload</a>
                <a onClick={props.clickHandler}>Crayties</a>
              </div>
            </div>
          </div> */}
        <h3>Psst...there's more down here...</h3>
      </div>
    </div>
  );
}

export default Hero;
