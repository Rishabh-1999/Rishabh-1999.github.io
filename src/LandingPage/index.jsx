import React from "react";

import { Link } from "react-scroll";

/* Styles */
import "./index.scss";

/* React Type Writer */
import Typical from "react-typical";

import background__music from "../Assets/Audio/background__music.mp3";

/* Images/SVG */
import MyPhoto from "../Assets/Images/MyPhoto.png";
import { ReactComponent as RIFontSVG } from "../Assets/SVG/RIFont.svg";
import { ReactComponent as DownwardsSVG } from "../Assets/SVG/downwards.min.svg";
import { ReactComponent as ToggleSVG } from "../Assets/SVG/toggle.min.svg";
import { ReactComponent as LinkedinSVG } from "../Assets/SVG/linkedin.min.svg";
import { ReactComponent as GithubSVG } from "../Assets/SVG/github.min.svg";
import { ReactComponent as RedditSVG } from "../Assets/SVG/reddit.min.svg";
import { ReactComponent as FacebookSVG } from "../Assets/SVG/facebook.min.svg";
import ReactAudioPlayer from "react-audio-player";

function landing_page() {
  return (
    <section id="landing_page">
      <header className="container p-t-50">
        <nav className="landing_page__header__menu navbar p-0 navbar-expand-lg">
          <a className="display-block" href="/">
            <RIFontSVG className="navbar-brand" />
          </a>

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

          <div className="navbar-collapse collapse" id="responsive-navbar-nav">
            <div className="ml-auto align-items-center navbar-nav">
              <Link className="nav-link" smooth={true} to="landing_page">
                Home
              </Link>
              <Link
                className="nav-link"
                smooth={true}
                to="about_me_page"
                href="#about_me_page"
              >
                About Me
              </Link>
              <Link
                className="nav-link"
                smooth={true}
                to="education_details_page"
                href="#education_details_page"
              >
                Education
              </Link>
              <Link
                className="nav-link"
                smooth={true}
                to="tech_i_know"
                href="#tech_i_know"
              >
                Tech I Know
              </Link>
              <Link
                className="nav-link"
                smooth={true}
                to="certificatepage"
                href="#certificatepage"
              >
                Certificates
              </Link>

              <div className="dropdown show mr-4">
                <a
                  href="#projects"
                  smooth={true}
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-toggle="dropdown"
                  id="basic-nav-dropdown"
                  className="dropdown-toggle"
                >
                  Projects
                  <DownwardsSVG />
                </a>
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
              <ul className="mb-0 landing_page__header__menu__social">
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
      </header>

      <div className="landing_page__main">
        <div className="container p-t-130 px-0">
          <div className="row m-0">
            <div className="landing_page__main__left col-xl-3 col-lg-3 col-md-3 justify-content-sm-center">
              <h1>
                Rishabh
                <br />
                Anand
                <span className="text-secondary-color">.</span>
              </h1>
              <div className="horizontal-dash"></div>
              <div>
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

            <div className="landing_page__main__photo col-xl-5 col-lg-5 col-md-5 px-0">
              <img className="img-fluid" src={MyPhoto} alt="Rishabh Anand" />
            </div>

            <div className="landing_page__main__right d-none d-md-block col-xl-4 col-lg-4 col-md-4">
              <h3 className="text-left text-secondary-color">INTRODUCTION</h3>
              <h3>
                Full Stack Developer <br />@
                <a
                  href="https://www.prescienceds.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PreScience DS
                </a>
              </h3>
              <p>FullStack Developer | React JS | Node JS</p>

              <Link
                to="about_me_page"
                className="text-secondary-color landing_page__main__right__bottom__text"
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

export default landing_page;
