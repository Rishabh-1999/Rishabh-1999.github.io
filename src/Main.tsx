import React from "react";

/* Styles */
import "scss/global.scss";
import "scss/theme.scss";

/* Components */
import LeftSection from "components/LeftSection";
import TopUpButton from "components/TopUpButton";

/* Sections */
import LandingPage from "sections/LandingPage";
import AboutMePage from "sections/AboutMePage";
import WorkExperiencePage from "sections/WorkExperiencePage";
import WorkCompanyProjects from "sections/WorkCompanyProjects";
import SkillsPage from "sections/SkillsPage";
import CertificatesPage from "sections/CertificatesPage";
import ContactMePage from "sections/ContactMePage";

function Routes() {
    return (
        <main className="h-screen overflow-y-auto relative lg:snap-y snap-none snap-mandatory scroll-smooth">
            <LeftSection />
            <TopUpButton />

            {/* Landing Page */}
            <LandingPage />

            {/* About Me Page */}
            <AboutMePage />

            {/* Work Experience Page */}
            <WorkExperiencePage />
            <WorkCompanyProjects />

            {/* Skills Page */}
            <SkillsPage />

            {/* Certificates Page */}
            <CertificatesPage />

            {/* Contact Me Page */}
            <ContactMePage />
        </main>
    );
}

export default Routes;
