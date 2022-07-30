import React from "react";

/* Styles */
import "./index.scss";

/* Pages */
import LandingPage from "pages/LandingPage";

/* Types */
import { PageLayoutType } from "./routes.types";
import "types/globals.d.ts";
import "types/react-typical.d.ts";

/* Lazy Pages */
const AboutMePage = React.lazy(() => {
    return import("pages/AboutMePage");
});
const EducationPage = React.lazy(() => {
    return import("pages/EducationPage");
});
// const ProjectPages = React.lazy(() => {
//     return import("pages/ProjectsPage");
// });
const TechIKnowPage = React.lazy(() => {
    return import("pages/TechIKnowPage");
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
                <EducationPage />
            </LazyPageLoad>
            <LazyPageLoad>
                <TechIKnowPage />
            </LazyPageLoad>
            {/* <LazyPageLoad>
                <ProjectPages />
            </LazyPageLoad> */}
            <LazyPageLoad>
                <CertificatePage />
            </LazyPageLoad>
        </main>
    );
}

export default Main;
