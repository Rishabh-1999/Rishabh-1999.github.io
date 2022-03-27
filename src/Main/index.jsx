import React from "react";

/* Styles */
import "./index.scss";

/* Pages */
import LandingPage from "../Pages/LandingPage";

/* Lazy Pages */
const AboutMePage = React.lazy(() => {
  return import("../Pages/AboutMePage");
});
const EducationPage = React.lazy(() => {
  return import("../Pages/EducationPage");
});
const ProjectPages = React.lazy(() => {
  return import("../Pages/ProjectsPage");
});
const TechIKnowPage = React.lazy(() => {
  return import("../Pages/TechIKnowPage");
});
const CertificatePage = React.lazy(() => {
  return import("../Pages/CertificatePage");
});

function LazyPageLoad(props) {
  return <React.Suspense fallback={<></>}>{props.children}</React.Suspense>;
}

function Main() {
  return (
    <main>
      <LandingPage />
      <LazyPageLoad>
        <AboutMePage />
      </LazyPageLoad>
      <LazyPageLoad>
        <EducationPage />
      </LazyPageLoad>
      <LazyPageLoad>
        <TechIKnowPage />
      </LazyPageLoad>
      <LazyPageLoad>
        <ProjectPages />
      </LazyPageLoad>
      <LazyPageLoad>
        <CertificatePage />
      </LazyPageLoad>
    </main>
  );
}

export default Main;
