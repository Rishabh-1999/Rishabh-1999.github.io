import React from "react";

/* Styles */
import "./index.scss";

/* Pages */
import LandingPage from "../LandingPage";
import AboutMePage from "../AboutMePage";
import EducationPage from "../EducationPage";
import ProjectPages from "../ProjectsPage";
import TechIUsePage from "../TechIUsePage";
import CertificatePage from "../CertificatePage";

function Main() {
  return (
    <>
      <LandingPage />
      <AboutMePage />
      <EducationPage />
      <ProjectPages />
      <TechIUsePage />
      <CertificatePage />
    </>
  );
}

export default Main;
