import React from "react";

/* Styles */
import "./index.scss";

const ProjectsArray = [];

function ProjectsPage() {
  return (
    <section id="projectspage" className="m-2 p-2 pt-4">
      <div className="projectspage__header container d-flex flex-column justify-content-center">
        <h4 className="text-center text-secondary-color m-0">
          Knowledge Factor
        </h4>
        <h1 className="text-center">
          <u>Projects</u>
        </h1>
      </div>
      <div className="projectspage__main mt-2">
        <div className="row">
          <div className="col-md-4 col-12">
            <div
              className="nav flex-column nav-pills"
              id="projects-tab"
              role="tablist"
              aria-orientation="horizontal"
            >
              {ProjectsArray.map((temp, index) => {
                return (
                  <a
                    key={temp.name}
                    className={`nav-link ${index === 0 ? "active" : ""}`}
                    id={`projects-${index}-tab`}
                    data-toggle="pill"
                    href={`#projects-${index}-iframe`}
                    role="tab"
                    aria-controls={`projects-${index}-iframe`}
                    aria-selected="true"
                  >
                    <h5> {temp.name}</h5>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="tab-content" id="projects-tabContent">
              {ProjectsArray.map((temp, index) => {
                return (
                  <div
                    key={index}
                    className={`tab-pane fade show ${
                      index === 0 ? "active" : ""
                    }`}
                    id={`projects-${index}-content`}
                    role="tabpanel"
                    aria-labelledby={`projects-${index}-tab`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(ProjectsPage);
