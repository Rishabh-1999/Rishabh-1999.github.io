import React from "react";

/* Styles */
import "./index.scss";

/* Images/SVG */
import MyCollegePhoto from "../Assets/Images/MyCollegePhoto.png";

function AboutMePage() {
  return (
    <section id="aboutmepage" className="m-2 p-2 pt-4">
      <div className="aboutmepage__header container d-flex flex-column justify-content-center">
        <h4 className="text-center text-secondary-color m-0">
          Who I am Really?
        </h4>
        <h1 className="text-center">
          <u>About Me</u>
        </h1>
      </div>
      <div className="aboutmepage__main mt-2">
        <div className="container">
          <div className="row">
            <div className="aboutmepage__main__left d-flex align-items-center col-12 col-md-5 flex-column">
              <img
                className="img-fluid"
                src={MyCollegePhoto}
                alt="My College"
              />
              <div>
                <a
                  role="button"
                  href="https://drive.google.com/u/0/uc?id=1jf__Ma9524uKlmjyoDLTKW53K1NnMDIo"
                  className="custom-btn mt-4 mx-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  View CV
                </a>
                <a
                  role="button"
                  download="RishabhAnand_CV"
                  href="https://drive.google.com/u/0/uc?id=1jf__Ma9524uKlmjyoDLTKW53K1NnMDIo&export=download"
                  className="custom-btn mt-4 mx-2"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="aboutmepage__main__right col-12 col-md-7 d-flex justify-content-center align-items-center">
              <p className="mt-2 p-2">
                Well, I'm <span>Rishabh Anand</span>. Currently working as
                a&nbsp;
                <span>
                  Full Stack Developer (Intern) at PreScience Decision Solutions
                </span>
                &nbsp;and pursuing&nbsp;
                <span>
                  B.E from Chitkara University (Rajpura) in Computer Science
                </span>
                &nbsp;.On the tech side, I like to do&nbsp;
                <span>
                  Front End development and learn new things related to React
                  and Web Development
                </span>
                . My strengths is that I like to take up&nbsp;
                <span>
                  challenges that are unique and mostly it should be my first
                  time
                </span>
                . My short term goal is that I want to be in a &nbsp;
                <span>
                  organisation or platform where I can grow my career along with
                  the organization growth
                </span>
                . My long term goal is that I want to be one of the reasons for
                the success of the a organization. My ethic is &nbsp;
                <span>
                  "Never neglect any opportunity that comes your way".
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(AboutMePage);
