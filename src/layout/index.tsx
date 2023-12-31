/**
 * @Owner: Rishabh Anand
 * @Desc: Layout Component
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
import SkillsPage from "sections/SkillsPage";

/* Utils */
import { useThemeMode } from "utils";

function Routes(): JSX.Element {
  const _ = useThemeMode();

  return (
    <main
      id="layout"
      className={classnames(
        "relative h-screen overflow-y-auto lg:snap-y snap-none snap-mandatory scroll-smooth scrollbar scrollbar-track-[#2a2a2a] scrollbar-thumb-highlightColor scrollbar-thumb-rounded-xl scrollbar-[4px]"
      )}
    >
      {/* Overflow Segments */}
      <LeftSection />

      {/* Landing Page */}
      <LandingPage />

      {/* Skills Page */}
      <SkillsPage />
    </main>
  );
}

export default Routes;
