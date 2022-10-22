import React from "react";

/* Styles */
import "scss/global.scss";
import "scss/theme.scss";

/* Components */
import LeftSection from "components/LeftSection";

/* Sections */
import LandingPage from "sections/LandingPage";
import AboutMePage from "sections/AboutMePage";
import WorkExperiencePage from "sections/WorkExperiencePage";
import SkillsPage from "sections/SkillsPage";
import ContactMePage from "sections/ContactMePage";

function Routes() {
    return (
        <main
            flex-col
            className="h-screen overflow-y-auto relative snap-y snap-mandatory scroll-smooth"
        >
            <LeftSection />

            {/* Landing Page */}
            <LandingPage />

            {/* About Me Page */}
            <AboutMePage />

            {/* Work Experience Page */}
            <WorkExperiencePage />

            {/* Skills Page */}
            <SkillsPage />

            {/* Contact Me Page */}
            <ContactMePage />
        </main>
    );
}

export default Routes;
