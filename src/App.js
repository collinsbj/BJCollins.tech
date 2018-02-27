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
    button {
      cursor: pointer;
      color: #fff;
      border: none;
      font-size: 18px;
      background-color: transparent;
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
      color: #fff;
      font-size: 65px;
    }

    h3 {
      position: absolute;
      bottom: 2%;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      -webkit-animation: fadeUpH2 5s;
      animation: fadeUpH2 5s;
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

    .about {
      height: 30vh;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background: #fff;
    }

    .about h2 {
      margin-right: 3rem;
      margin-left: 3rem;
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
    }

    .about p {
      font-size: 25px;
      margin-right: 3rem;
      line-height: 2.5rem;
      max-height: 100%;
      overflow: hidden;
    }

    .about h2,
    .about p {
      background: -webkit-linear-gradient(
        135deg,
        #23d5ab,
        #ee7752,
        #e73c7e,
        #23a6d5
      );
      background: -o-linear-gradient(
        135deg,
        #23d5ab,
        #ee7752,
        #e73c7e,
        #23a6d5
      );
      background: linear-gradient(-45deg, #23d5ab, #ee7752, #e73c7e, #23a6d5);
      -webkit-background-clip: text;
      background-clip: text;
      background-size: 400% 400%;
      color: transparent;
      -webkit-animation: Gradient 15s ease infinite;
      animation: Gradient 15s ease infinite;
    }

    .contact {
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
      background: -o-linear-gradient(
        135deg,
        #e73c7e,
        #23a6d5,
        #23d5ab,
        #ee7752
      );
      background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab, #ee7752);
      -webkit-animation: Gradient 15s ease infinite;
      animation: Gradient 15s ease infinite;
      background-size: 400% 400%;
    }

    .contact img {
      margin: 2rem;
    }

    .container {
      position: relative;
    }

    .container,
    .container img {
      height: 100%;
      width: auto;
    }

    .container:hover .overlay {
      opacity: 1;
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

    .headerLink {
      -webkit-animation: fadeUpA 3s;
      animation: fadeUpA 3s;
    }

    .heroContainer {
      width: 100vw;
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
      -webkit-animation: Gradient 15s ease infinite;
      animation: Gradient 15s ease infinite;
      background-size: 400% 400%;
    }

    .heroContainer a {
      text-decoration: none;
      margin: 1rem;
      color: #fff;
      cursor: pointer;
    }

    .heroName {
      height: calc(100vh - 36px);
    }

    .overlay {
      z-index: 100;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      -webkit-transition: 0.5s ease;
      -o-transition: 0.5s ease;
      transition: 0.5s ease;
      background-color: #008cba;
    }

    .projects {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      height: 30vh;
      background: -webkit-linear-gradient(
        135deg,
        #23a6d5,
        #23d5ab,
        #ee7752,
        #e73c7e
      );
      background: -o-linear-gradient(
        135deg,
        #23a6d5,
        #23d5ab,
        #ee7752,
        #e73c7e
      );
      background: linear-gradient(-45deg, #23a6d5, #23d5ab, #ee7752, #e73c7e);
      -webkit-animation: Gradient 15s ease infinite;
      animation: Gradient 15s ease infinite;
      background-size: 400% 400%;
    }

    .projects h2 {
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
      margin: 0 auto;
      -webkit-animation: Gradient 15s ease infinite;
      animation: Gradient 15s ease infinite;
      background-size: 400% 400%;
    }

    .resume {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background: #fff;
      height: 100vh;
    }

    .resume h2 {
      background: -webkit-linear-gradient(
        135deg,
        #23d5ab,
        #ee7752,
        #e73c7e,
        #23a6d5
      );
      background: -o-linear-gradient(
        135deg,
        #23d5ab,
        #ee7752,
        #e73c7e,
        #23a6d5
      );
      background: linear-gradient(-45deg, #23d5ab, #ee7752, #e73c7e, #23a6d5);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      -webkit-animation: Gradient 15s ease infinite;
      animation: Gradient 15s ease infinite;
      background-size: 400% 400%;
    }

    .resume img {
      height: 100%;
      width: auto;
    }

    .show {
      display: block;
    }

    .text {
      color: #fff;
      font-size: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
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
          clickHandler={this.themeChangeClickHandler}
          theme={this.state.theme}
        />
        <About theme={this.state.theme} />
        <Projects theme={this.state.theme} />
        <Resume theme={this.state.theme} />
        <Contact theme={this.state.theme} />
      </div>
    );
  }
}

export default App;
