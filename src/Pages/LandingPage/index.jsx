import React from "react";

import { Link } from "react-scroll";

import ReactAudioPlayer from "react-audio-player";

/* Styles */
import "./index.scss";

/* React Type Writer */
import Typical from "react-typical";

/* Images/SVG */
import MyPhoto from "../../Assets/Images/MyPhoto.png";
import { ReactComponent as RIFontSVG } from "../../Assets/SVG/RIFont.svg";
import { ReactComponent as DownwardsSVG } from "../../Assets/SVG/downwards.min.svg";
// import { ReactComponent as ToggleSVG } from "../../Assets/SVG/toggle.min.svg";
import { ReactComponent as LinkedInSVG } from "../../Assets/SVG/linkedin.min.svg";
import { ReactComponent as GithubSVG } from "../../Assets/SVG/github.min.svg";
import { ReactComponent as RedditSVG } from "../../Assets/SVG/reddit.min.svg";
import { ReactComponent as FacebookSVG } from "../../Assets/SVG/facebook.min.svg";

/* Music */
import background__music from "../../Assets/Audio/background__music.mp3";

function LandingPage() {
  return (
    <section id="landing_page">
      <nav className="container relative flex items-center md:mx-auto pt-4 sm:pt-12 px-4 lg:px-4 xl:px-16">
        <a className="block flex-grow-0 relative" href="/">
          <RIFontSVG className="logo inline-block whitespace-nowrap" />
        </a>

        {/* <button
          type="button"
          data-toggle="collapse"
          data-target="#responsive-navbar-nav"
          className="block sm:hidden "
          aria-controls="responsive-navbar-nav"
          aria-label="Toggle navigation"
        >
          <i className="text-white">
            <ToggleSVG />
          </i>
        </button> */}

        <div className="menu hidden md:flex flex-grow justify-end">
          <Link smooth={true} to="landing_page">
            Home
          </Link>
          <Link smooth={true} to="about_me_page" href="#about_me_page">
            About Me
          </Link>
          <Link
            smooth={true}
            to="education_details_page"
            href="#education_details_page"
          >
            Education
          </Link>
          <Link smooth={true} to="tech_i_know" href="#tech_i_know">
            Tech I Know
          </Link>
          <Link smooth={true} to="certificatepage" href="#certificatepage">
            Certificates
          </Link>

          {/* <div className="dropdown show mr-4">
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
              </div> */}
          <ul className="social hidden lg:flex items-center">
            <li>
              <a
                href="https://www.linkedin.com/in/rishabh-anand-b76711161/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInSVG title="Linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Rishabh-1999"
                rel="noreferrer"
                target="_blank"
              >
                <GithubSVG title="GitHub" />
              </a>
            </li>
            <li>
              <a
                href="https://www.reddit.com/user/IndianReactGuy"
                rel="noreferrer"
                target="_blank"
              >
                <RedditSVG title="Reddit" />
              </a>
            </li>
            <li>
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
      </nav>

      <div className="landing_page__main container mx-2 md:mx-4 lg:mx-6 xl:mx-auto px-2 md:px-4 xl:px-16 pt-12 md:pt-32">
        <div className="flex flex-wrap justify-center md:justify-items-start">
          <div className="left justify-center">
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
                  3000,
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

          <div className="main__photo flex flex-grow justify-center">
            <img
              className="max-w-full h-full"
              src={MyPhoto}
              alt="Rishabh Anand"
            />
          </div>

          <div className="right hidden md:block">
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
              className="text-secondary-color flex items-center text-base"
              smooth={true}
            >
              Learn more
              <DownwardsSVG />
            </Link>
          </div>
        </div>

        <ReactAudioPlayer src={background__music} autoPlay volume={0.3} muted />
      </div>
    </section>
  );
}

export default LandingPage;
