import React, { Component } from "react";
import "./App.css";
import Hero from "./Hero";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import styled from "styled-components";
import bgimage from "./Synthwave-Neon-80s-Background-4K.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: this.RainbOverload
    };
    this.themeChangeClickHandler = this.themeChangeClickHandler.bind(this);
  }
  themeChangeClickHandler(event) {
    event.preventDefault();
    this.setState({ theme: this[event.target.textContent] });
  }

  RainbOverload = styled.div`
    .heroContainer {
      width: 100wh;
      height: 100vh;
      color: #fff;
      background: -webkit-linear-gradient(
        135deg,
        #ee7752,
        #e73c7e,
        #23a6d5,
        #23d5ab
      );
      background: -o-linear-gradient(
        135deg,
        #ee7752,
        #e73c7e,
        #23a6d5,
        #23d5ab
      );
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
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

    header {
      height: 36px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }

    a {
      text-decoration: none;
      margin: 1rem;
      color: white;
      cursor: pointer;
    }

    .headerLink {
      -webkit-animation: fadeUpA 3s;
      animation: fadeUpA 3s;
    }

    .dropdownContainer {
      position: absolute;
      top: calc(50% + 35px);
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      -webkit-animation: fadeUpH1 4s;
      animation: fadeUpH1 4s;
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

    @-webkit-keyframes fadeUpA {
      0% {
        opacity: 0;
        -webkit-transform: translateY(10px);
        transform: translateY(10px);
      }
      33% {
        opacity: 0;
        -webkit-transform: translateY(10px);
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes fadeUpA {
      0% {
        opacity: 0;
        -webkit-transform: translateY(10px);
        transform: translateY(10px);
      }
      33% {
        opacity: 0;
        -webkit-transform: translateY(10px);
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
      }
    }

    .heroName {
      height: calc(100vh - 36px);
    }

    h1 {
      font-size: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      -webkit-animation: fadeUpH1 4s;
      animation: fadeUpH1 4s;
    }

    h2 {
      position: absolute;
      bottom: 2%;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      -webkit-animation: fadeUpH2 5s;
      animation: fadeUpH2 5s;
    }

    @-webkit-keyframes fadeUpH1 {
      0% {
        -webkit-transform: translate(-50%, calc(-50% + 20px));
        transform: translate(-50%, calc(-50% + 20px));
        opacity: 0;
      }
      50% {
        -webkit-transform: translate(-50%, calc(-50% + 20px));
        transform: translate(-50%, calc(-50% + 20px));
        opacity: 0;
      }
      100% {
        opacity: 1;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    }

    @keyframes fadeUpH1 {
      0% {
        -webkit-transform: translate(-50%, calc(-50% + 20px));
        transform: translate(-50%, calc(-50% + 20px));
        opacity: 0;
      }
      50% {
        -webkit-transform: translate(-50%, calc(-50% + 20px));
        transform: translate(-50%, calc(-50% + 20px));
        opacity: 0;
      }
      100% {
        opacity: 1;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    }

    @-webkit-keyframes fadeUpH2 {
      0% {
        opacity: 0;
        -webkit-transform: translate(-50%, 10px);
        transform: translate(-50%, 10px);
      }
      60% {
        opacity: 0;
        -webkit-transform: translate(-50%, 10px);
        transform: translate(-50%, 10px);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }
    }

    @keyframes fadeUpH2 {
      0% {
        opacity: 0;
        -webkit-transform: translate(-50%, 10px);
        transform: translate(-50%, 10px);
      }
      60% {
        opacity: 0;
        -webkit-transform: translate(-50%, 10px);
        transform: translate(-50%, 10px);
      }
      100% {
        opacity: 1;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }
    }
  `;

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
        <Hero
          theme={this.state.theme}
          clickHandler={this.themeChangeClickHandler}
        />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    );
  }
}

export default App;
