import React from "react";

/* Styles */
import "./index.scss";

/* Pages */
import LandingPage from "pages/LandingPage";

/* Types */
import { PageLayoutType } from "./routes.types";
import "types/globals.d.ts";
import "types/@camwiegert-typical.d.ts";

/* Lazy Pages */
const AboutMePage = React.lazy(() => {
    return import("pages/AboutMePage");
});
const EducationPage = React.lazy(() => {
    return import("pages/EducationPage");
});
const WorkExperiences = React.lazy(() => {
    return import("pages/WorkExperiences");
});
const SkillsPage = React.lazy(() => {
    return import("pages/SkillsPage");
});
const ProjectsPage = React.lazy(() => {
    return import("pages/ProjectsPage");
});
const CertificatePage = React.lazy(() => {
    return import("pages/CertificatePage");
});

function LazyPageLoad(props: PageLayoutType) {
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
                <WorkExperiences />
            </LazyPageLoad>
            <LazyPageLoad>
                <ProjectsPage />
            </LazyPageLoad>
            <LazyPageLoad>
                <CertificatePage />
            </LazyPageLoad>
            <LazyPageLoad>
                <SkillsPage />
            </LazyPageLoad>
            <LazyPageLoad>
                <EducationPage />
            </LazyPageLoad>
        </main>
    );
}

export default Main;
