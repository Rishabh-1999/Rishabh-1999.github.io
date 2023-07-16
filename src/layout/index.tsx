/**
 * Owner: Rishabh Anand
 * Desc: Layout Component
 **/

/* Styling Utils */
import classnames from "classnames";

/* Styles */
import "scss/global.scss";
import "scss/theme.scss";

/* Components */
import LeftSection from "components/LeftSection";
/* Sections */
import LandingPage from "sections/LandingPage";
import AboutPage from "sections/AboutPage";
import SkillsPage from "sections/SkillsPage";
import WorkExperiencesPage from "sections/WorkExperiencesPage";
// import ContactPage from "sections/ContactPage";

/* Utils */
import { useThemeMode } from "utils/hooks/themeMode";

function Routes(): JSX.Element {
  const _ = useThemeMode();

  return (
    <main
      id="layout"
      className={classnames(
        "relative h-screen overflow-y-auto lg:snap-y snap-none snap-mandatory scroll-smooth scrollbar scrollbar-track-[#2a2a2a] scrollbar-thumb-highlightColor scrollbar-thumb-rounded-xl scrollbar-[6px]"
      )}
    >
      {/* Overflow Segements */}
      <LeftSection />

      {/* Landing Page */}
      <LandingPage />

      {/* About Page */}
      <AboutPage />

      {/* Work Experience Page */}
      <WorkExperiencesPage />

      {/* Skills Page */}
      <SkillsPage />

      {/* Contact Page */}
      {/* <ContactPage /> */}
    </main>
  );
}

export default Routes;
