/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

/* Styles */
import "./index.scss";

/* React Type Writer */
import Typical from "react-typical";

import { Link } from "react-scroll";

import background__music from "../Assets/Audio/background__music.mp3";

/* Imgaes/SVG */
import MyPhoto from "../Assets/Images/MyPhoto.png";
import { ReactComponent as RISVG } from "../Assets/SVG/RI.svg";
import { ReactComponent as DownwardsSVG } from "../Assets/SVG/downwards.min.svg";
import { ReactComponent as ToggleSVG } from "../Assets/SVG/toggle.min.svg";
import { ReactComponent as LinkedinSVG } from "../Assets/SVG/linkedin.min.svg";
import { ReactComponent as GithubSVG } from "../Assets/SVG/github.min.svg";
import { ReactComponent as RedditSVG } from "../Assets/SVG/reddit.min.svg";
import { ReactComponent as FacebookSVG } from "../Assets/SVG/facebook.min.svg";
import ReactAudioPlayer from "react-audio-player";

function LandingPage() {
  return (
    <section id="landingpage">
      <div className="landingpage__header">
        <div className="container pt-50">
          <div className="col-lg-12 px-0 justify-content-lg-between">
            <div className="landingpage__header__menu">
              <nav className="p-0 navbar navbar-expand-lg navbar-light">
                <div className="navbar-brand">
                  <a className="nav-link" href="/">
                    <RISVG className="navbar-brand" />
                  </a>
                </div>

                <button
                  type="button"
                  data-toggle="collapse"
                  data-target="#responsive-navbar-nav"
                  className="navbar-toggler collapsed"
                  aria-controls="responsive-navbar-nav"
                  aria-label="Toggle navigation"
                >
                  <i className="text-white">
                    <ToggleSVG />
                  </i>
                </button>
                <div
                  className="navbar-collapse collapse"
                  id="responsive-navbar-nav"
                >
                  <div className="ml-auto align-items-center navbar-nav">
                    <Link className="nav-link" smooth={true} to="landingpage">
                      Home
                    </Link>
                    <Link className="nav-link" smooth={true} to="aboutmepage">
                      About Me
                    </Link>
                    <Link className="nav-link" smooth={true} to="educationpage">
                      Education
                    </Link>
                    <Link className="nav-link" smooth={true} to="tech_i_know">
                      Tech I Know
                    </Link>
                    <Link
                      className="nav-link"
                      smooth={true}
                      to="certificatepage"
                    >
                      Certificates
                    </Link>
                    <div className="nav-item show dropdown">
                      <Link
                        to="projects"
                        smooth={true}
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-toggle="dropdown"
                        id="basic-nav-dropdown"
                        className="dropdown-toggle nav-link"
                      >
                        Projects
                        <DownwardsSVG />
                      </Link>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="basic-nav-dropdown"
                      >
                        <Link
                          to="projects_in_react"
                          smooth={true}
                          className="dropdown-item"
                        >
                          React
                        </Link>
                        <Link
                          to="projects_in_nodejs"
                          smooth={true}
                          className="dropdown-item"
                        >
                          Node JS
                        </Link>
                      </div>
                    </div>
                    <ul className="mb-0 landingpage__header__menu__social pl-15">
                      <li
                        className="list-inline-item menu-border"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Facebook"
                      >
                        <a
                          href="https://www.linkedin.com/in/rishabh-anand-b76711161/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <LinkedinSVG title="Linkedin" />
                        </a>
                      </li>
                      <li
                        className="list-inline-item menu-border"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="GitHub"
                      >
                        <a
                          href="https://github.com/Rishabh-1999"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <GithubSVG title="GitHub" />
                        </a>
                      </li>
                      <li
                        className="list-inline-item menu-border"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Reddit"
                      >
                        <a
                          href="https://www.reddit.com/user/IndianReactGuy"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <RedditSVG title="Reddit" />
                        </a>
                      </li>
                      <li
                        className="list-inline-item menu-border"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Facebook"
                      >
                        <a
                          href="https://www.facebook.com/rishabh.anand.902/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <FacebookSVG title="Facebook" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="landingpage__main">
        <div className="container pt-130 pl-xl-0 px-0">
          <div className="row m-0">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
              <div className="landingpage__main__left">
                <div className="name">
                  <h1>
                    Rishabh
                    <br />
                    Anand
                    <span className="text-secondary-color">.</span>
                  </h1>
                </div>
                <div className="horizontal-dash"></div>
                <div className="">
                  <Typical
                    steps={[
                      "Full Stack Developer",
                      2000,
                      "Intern",
                      1500,
                      "Tech Geek",
                      1500,
                      "Student",
                      1000,
                      "Defence Expert",
                      1000,
                      "Indian",
                      2000,
                    ]}
                    loop={Infinity}
                  />
                </div>
              </div>
            </div>
            <div className="landingpage__main__photo col-xl-5 col-lg-5 col-md-5 col-sm-8 col-7 pl-0">
              <img className="img-fluid" src={MyPhoto} alt="Rishabh Anand" />
            </div>

            <div className="landingpage__main__right d-none d-md-block col-xl-4 col-lg-4 col-md-4 col-sm-8 col-8">
              <h3 className="text-left text-secondary-color">INTRODUCTION</h3>
              <h3>
                Full Stack Developer <br />@ PreScience
              </h3>
              <p>
                FullStack Developer( Intern ) at PreScience Decision Solutions
              </p>

              <Link
                to="aboutmepage"
                className="text-secondary-color landingpage__main__right__bottom__text"
                smooth={true}
              >
                Learn more
                <DownwardsSVG />
              </Link>
            </div>
          </div>
        </div>
        <ReactAudioPlayer src={background__music} autoPlay volume={0.3} muted />
      </div>
    </section>
  );
}

export default LandingPage;