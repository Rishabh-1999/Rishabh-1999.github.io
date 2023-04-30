/**
 * Owner: Rishabh Anand
 * Desc: Layout Component
 **/

import React from "react";

/* Styling Utils */
import classnames from "classnames";

/* Styles */
import "scss/global.scss";
import "scss/theme.scss";

/* Components */
import LeftSection from "components/LeftSection";

/* Sections */
import LandingPage from "sections/LandingPage";
import EducationPage from "sections/EducationPage";

/* Context */
import { AppContext } from "context";

/* Types */
import { ThemeModeTypes } from "types";
import { useDarkTheme } from "utils/darkLightMode";

function Routes() {
  const { theme } = useDarkTheme();

  return (
    <main
      id="layout"
      className={classnames(
        "h-screen overflow-y-auto relative lg:snap-y snap-none snap-mandatory scroll-smooth scrollbar scrollbar-track-[#2a2a2a] scrollbar-thumb-highlightColor scrollbar-thumb-rounded-xl scrollbar-[8px]"
      )}
    >
      {/* Overflow Segements */}
      <LeftSection />

      {/* Landing Page */}
      <LandingPage />

      {/* Landing Page */}
      <EducationPage />
    </main>
  );
}

export default Routes;
