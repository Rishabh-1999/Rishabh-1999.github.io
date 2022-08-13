import React from "react";

/* Styles */
import "./index.scss";

/* Pages */
import LandingPage from "pages/LandingPage";

/* Global Types */
import "types/globals.d.ts";
import "types/@camwiegert-typical.d.ts";

/* Types */
import { PageLayoutType } from "./routes.type";

/* Utils */
import { QueryClientProvider, reactQueryClient } from "utils";

import { ReactQueryDevtools } from "react-query/devtools";

/* Lazy Pages */
const AboutMePage = React.lazy(() => {
    return import("pages/AboutMePage");
});
const WorkExperiencesPage = React.lazy(() => {
    return import("pages/WorkExperiences");
});
const ProjectsPage = React.lazy(() => {
    return import("pages/ProjectsPage");
});
const CertificatesPage = React.lazy(() => {
    return import("pages/CertificatesPage");
});
const SkillsPage = React.lazy(() => {
    return import("pages/SkillsPage");
});
const EducationsPage = React.lazy(() => {
    return import("pages/EducationsPage");
});

function LazyPageLoad(props: PageLayoutType): React.ReactElement {
    return <React.Suspense fallback={<></>}>{props.children}</React.Suspense>;
}

const ReactQueryDevToolsComponent = (): React.ReactElement => {
    if (process.env.NODE_ENV === "development") return <ReactQueryDevtools />;
    else return <></>;
};

function Main(): React.ReactElement {
    return (
        <main>
            <QueryClientProvider client={reactQueryClient}>
                <LandingPage />
                <LazyPageLoad>
                    <AboutMePage />
                </LazyPageLoad>
                <LazyPageLoad>
                    <WorkExperiencesPage />
                </LazyPageLoad>
                <LazyPageLoad>
                    <ProjectsPage />
                </LazyPageLoad>
                <LazyPageLoad>
                    <CertificatesPage />
                </LazyPageLoad>
                <LazyPageLoad>
                    <SkillsPage />
                </LazyPageLoad>
                <LazyPageLoad>
                    <EducationsPage />
                </LazyPageLoad>
                <ReactQueryDevToolsComponent />
            </QueryClientProvider>
        </main>
    );
}

export default Main;
