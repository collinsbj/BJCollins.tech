import React, { Component } from "react";
import "./App.css";
import Hero from "./Hero";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import styled from "styled-components";
import heroBgImage from "./Synthwave-Neon-80s-Background-4K.jpg";
import projectsBgImage from "./seamless-background-80s11-.jpg";
import contactBgImage from "./seamless-background-80s-.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: this.Eighties
    };
    this.themeChangeClickHandler = this.themeChangeClickHandler.bind(this);
  }
  themeChangeClickHandler(event) {
    event.preventDefault();
    this.setState({ theme: this[event.target.textContent] });
  }

  RainbOverload = styled.div`
    * {
      font-family: "Titillium Web", sans-serif;
    }
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
      height: 65px;
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

    .themes a {
      margin: 10px 18px;
      text-decoration: none;
      cursor: pointer;
      font-size: 28px;
    }

    .themeSelector {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: calc(52% + 35px);
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      -webkit-animation: fadeUpH1 4s;
      animation: fadeUpH1 4s;
    }

    .themeSelector p {
      margin-bottom: 5px;
      font-size: 20px;
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

    header a {
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

    .projects {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-direction: column;
      width: 100vw;
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
      margin: 1rem auto;
      -webkit-animation: Gradient 15s ease infinite;
      animation: Gradient 15s ease infinite;
      background-size: 400% 400%;
    }

    .projectsList {
      height: 30vh;
      display: flex;
      justify-content: center;
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

    @media (max-width: 1200px) {
      .projects h2,
      .resume h2 {
        display: none;
      }
      .about p {
        line-height: 2rem;
      }
    }

    @media (max-width: 950px) {
      .about p {
        line-height: 1.5rem;
      }

      .resume {
        height: auto;
      }

      .resume .container {
        height: auto;
      }
    }

    @media (max-width: 450px) {
      .about {
        flex-direction: column;
        height: auto;
      }

      .about h2 {
        text-align: center;
        font-size: 40px;
        margin-top: 2rem;
      }

      .about p {
        margin: 2rem;
        line-height: 1.8rem;
      }

      .contact {
        height: auto;
      }

      .contact div {
        display: flex;
      }

      .contact h2 {
        font-size: 40px;
        margin-top: 2rem;
      }

      .contact img {
        height: 40px;
        width: auto;
      }

      .projects {
        flex-direction: column;
        height: auto;
      }

      .projects a,
      .projects img {
        width: 100%;
      }

      .resume {
        width: 100%;
        height: auto;
      }

      .resume h2 {
        display: none;
      }

      .resume img {
        width: 100%;
        height: auto;
      }
    }
  `;

  Eighties = styled.div`
    h1,
    h2,
    .themes a,
    .themeSelector p,
    header a,
    button {
      font-family: "Permanent Marker", sans-serif;
      font-variant: small-caps;
      background-image: -webkit-linear-gradient(#ff0ff8 0%, #f9f9f7 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      filter: drop-shadow(2px 2px 20px #f008b7);
    }

    button {
      cursor: pointer;
      border: none;
      font-size: 18px;
      background-color: transparent;
    }

    h1 {
      font-size: 75px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    h2 {
      font-size: 65px;
    }

    header {
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
      background: #181818;
    }

    .about h2 {
      margin-right: 3rem;
      margin-left: 3rem;
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
    }

    .about p {
      color: #ff0ff8;
      font-family: "Titillium Web", sans-serif;
      font-size: 25px;
      margin-right: 3rem;
      line-height: 2.5rem;
      max-height: 100%;
      overflow: hidden;
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
      background-image: url(${contactBgImage});
    }

    .contact img {
      margin: 2rem;
      height: 65px;
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

    .themeSelector {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: calc(53% + 35px);
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    .themes a {
      margin: 10px 18px;
      text-decoration: none;
      cursor: pointer;
      font-size: 28px;
    }

    .heroContainer {
      width: 100vw;
      height: 100vh;
      background-image: url(${heroBgImage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      overflow: hidden;
    }

    header a {
      text-decoration: none;
      margin: 1rem;
      cursor: pointer;
      font-size: 22px;
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
      background: #ff0ff8;
    }

    .projects {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-direction: column;
      // height: 30vh;
      width: 100vw;
      background-image: url(${projectsBgImage});
    }

    .projects h2 {
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
      margin: 1rem auto;
    }

    .projectsList {
      height: 30vh;
      display: flex;
      justify-content: center;
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
      background: #181818;
      height: 100vh;
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

    .themeSelector p {
      margin-bottom: 5px;
      font-size: 20px;
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

    @media (max-width: 1200px) {
      .projects h2,
      .resume h2 {
        display: none;
      }
      .about p {
        line-height: 2rem;
      }
    }

    @media (max-width: 950px) {
      .about p {
        line-height: 1.5rem;
      }

      .resume {
        height: auto;
      }

      .resume .container {
        height: auto;
      }
    }

    @media (max-width: 450px) {
      .about {
        flex-direction: column;
        height: auto;
      }

      .about h2 {
        text-align: center;
        font-size: 40px;
        margin-top: 2rem;
      }

      .about p {
        margin: 2rem;
        line-height: 1.8rem;
      }

      .contact {
        height: auto;
      }

      .contact div {
        display: flex;
      }

      .contact h2 {
        font-size: 40px;
        margin-top: 2rem;
      }

      .contact img {
        height: 40px;
        width: auto;
      }

      .projects {
        flex-direction: column;
        height: auto;
      }

      .projects a,
      .projects img {
        width: 100%;
      }

      .resume {
        width: 100%;
        height: auto;
      }

      .resume h2 {
        display: none;
      }

      .resume img {
        width: 100%;
        height: auto;
      }
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
