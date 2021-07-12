import React from "react";

/* Styles */
import "./index.scss";

/* Pages */
import LandingPage from "../LandingPage";

/* Lazy Pages */
const AboutMePage = React.lazy(() => {
  return import("../AboutMePage");
});
const EducationPage = React.lazy(() => {
  return import("../EducationPage");
});
const ProjectPages = React.lazy(() => {
  return import("../ProjectsPage");
});
const TechIKnowPage = React.lazy(() => {
  return import("../TechIKnowPage");
});
const CertificatePage = React.lazy(() => {
  return import("../CertificatePage");
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
        <ProjectPages />
      </LazyPageLoad>
      <LazyPageLoad>
        <TechIKnowPage />
      </LazyPageLoad>
      <LazyPageLoad>
        <CertificatePage />
      </LazyPageLoad>
    </main>
  );
}

export default Main;
