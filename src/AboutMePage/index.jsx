import React from "react";

/* Styles */
import "./index.scss";

/* Images/SVG */
import MyCollegePhoto from "../Assets/Images/MyCollegePhoto.png";

function AboutMePage() {
  return (
    <section id="aboutmepage" className="m-1 p-1 pt-4">
      <div className="aboutmepage__header container d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-center">
          <h4 className="text-center text-secondary-color ">
            Who I am Really?
          </h4>
          <h1>
            <u>About Me</u>
          </h1>
        </div>
      </div>
      <div className="aboutmepage__main mt-4">
        <div className="container">
          <div className="row">
            <div className="aboutmepage__main__left col-12 col-md-5">
              <img
                className="img-fluid"
                src={MyCollegePhoto}
                alt="My College"
              />
            </div>
            <div className="aboutmepage__main__right col-12 col-md-7 d-flex justify-content-center align-items-center">
              <p className="mt-4 pt-4">
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
