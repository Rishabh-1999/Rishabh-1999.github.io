import React from "react";

/* Styling Utils */
import classNames from "classnames";

/* Styles */
import "scss/global.scss";
import "scss/theme.scss";

/* Components */
import LeftSection from "components/LeftSection";
import TopUpButton from "components/TopUpButton";

/* Context */
import { ThemeContext } from "context";

/* Sections */
import LandingPage from "sections/LandingPage";
import AboutMePage from "sections/AboutMePage";
import WorkExperiencePage from "sections/WorkExperiencePage";
import WorkCompanyProjects from "sections/WorkCompanyProjects";
import SkillsPage from "sections/SkillsPage";
import CertificatesPage from "sections/CertificatesPage";
// import TestimonialsPage from "sections/TestimonialsPage";
// import ContactMePage from "sections/ContactMePage";

/* Data */
import ThemeTypes from "data/theme";

function Routes() {
    const { theme } = React.useContext(ThemeContext);

    return (
        <main
            id="layout"
            className={classNames(
                "h-screen overflow-y-auto relative lg:snap-y snap-none snap-mandatory scroll-smooth",
                {
                    light: theme === ThemeTypes.Light,
                    dark: theme === ThemeTypes.Dark,
                }
            )}
        >
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

            {/* <TestimonialsPage /> */}

            {/* Contact Me Page */}
            {/* <ContactMePage /> */}
        </main>
    );
}

export default Routes;
