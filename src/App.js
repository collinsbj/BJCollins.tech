import React, { Component } from "react";
import "./App.css";
import Hero from "./Hero";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import styled from "styled-components";
import bgimage from "./Synthwave-Neon-80s-Background-4K.jpg";
import Crayties from "./Themes/Crayties.css";
import RainbOverload from "./Themes/RainbOverload.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "./Themes/Crayties.css"
    };
    this.themeChangeClickHandler = this.themeChangeClickHandler.bind(this);
  }
  themeChangeClickHandler(event) {
    event.preventDefault();
    this.setState({ theme: this[event.target.textContent] });
  }

  Crayties = styled.div`
    .heroContainer {
      width: 100vw;
      height: 100vh;
      background-image: url(${bgimage});
      background-size: cover;
      overflow: hidden;
    }

    header {
      display: flex;
      justify-content: center;
    }

    a {
      font-size: 25px;
      text-decoration: none;
      margin-top: 1rem;
      margin-left: 1rem;
      margin-right: 1rem;
      height: auto;
      cursor: pointer;
    }

    .dropdownContainer {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      min-width: 160px;
      z-index: 1;
    }

    .dropdown-content a {
      padding: 12px 16px;
      display: block;
    }

    .show {
      display: block;
    }

    button {
      cursor: pointer;
      color: white;
      border: none;
      font-size: 18px;
      background-color: transparent;
    }

    .heroName {
      height: calc(100vh - 36px);
    }

    h1,
    h2,
    a,
    button {
      font-family: "Permanent Marker", cursive;
      font-variant: small-caps;
      background-image: -webkit-linear-gradient(#ff0ff8 0%, #f9f9f7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-filter: drop-shadow(2px 2px 20px #f008b7);
    }

    h1 {
      position: absolute;
      font-size: 180px;
      transform: translate(-50%, -50%) rotate(-15deg);
      // padding-left: 80px;
      margin: 0;
      top: 50%;
      left: 50%;
    }

    h2 {
      font-size: 30px;
      position: absolute;
      bottom: 2%;
      left: 50%;
      transform: translateX(-50%);
    }
  `;

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href={this.state.theme} />
        <Hero clickHandler={this.themeChangeClickHandler} />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    );
  }
}

export default App;
