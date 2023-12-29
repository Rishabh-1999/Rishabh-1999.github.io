/*
 * @Owner: Rishabh Anand
 * @Desc: Section - Landing Page - NavBar Component
 */

import { memo, useContext } from "react";

/* Animation */
import { motion } from "framer-motion";

/* Material UI */
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";

/* Components */
import AudioPlayer from "./components/AudioPlayer";

/* Context */
import { AppContext } from "context";

/* Utils */
import { useThemeMode } from "utils/hooks/themeMode";

/* Data */
import AppSettings from "data/AppSettings";

/* Types */
import { ThemeModesTypes } from "types";

/* Assets */
import RiLogoSVG_Dark from "assets/svg/RiLogo_dark.svg";
import RiLogoSVG_Light from "assets/svg/RiLogo_light.svg";

const Settings = () => {
  const { theme, toggleTheme } = useThemeMode();

  const ThemeIcon =
    theme === ThemeModesTypes.DARK ? DarkModeIcon : Brightness4Icon;

  return (
    <motion.div
      initial={{
        x: 100,
        opacity: 0.5,
      }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="pl-2 border-l border-l-1 border-l-[var(--layout-color-font-light)]"
    >
      {AppSettings.enableAudio && <AudioPlayer />}

      {AppSettings.enableThemes && (
        <span className="mx-1">
          <ThemeIcon
            className="hover:text-[var(--layout-color-highlight)] hover:scale-110"
            onClick={toggleTheme}
          />
        </span>
      )}
    </motion.div>
  );
};

function NavBar() {
  const { state } = useContext(AppContext);

  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0.5,
        scale: 0.9,
      }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-8.5xl mx-auto sm:pt-6 pt-4 px-4 flex items-center justify-between"
    >
      <a className="flex-grow-0 relative" href="/">
        <img
          src={
            state.themeMode === ThemeModesTypes.DARK
              ? RiLogoSVG_Dark
              : RiLogoSVG_Light
          }
          alt={"My Logo"}
          className="w-[65px] h-[65px]"
        />
      </a>

      <div className="md:flex hidden flex-grow justify-end items-center text-[var(--layout-color-font-light)] font-bold text-[1rem]">
        <a
          className="mx-3 px-1 animating-underline hover:text-[var(--layout-color-highlight)] hover:scale-110"
          href="#about_me"
        >
          About Me
        </a>

        <a
          className="mx-3 px-1 animating-underline hover:text-[var(--layout-color-highlight)] hover:scale-110"
          href="#work_experiences"
        >
          Work Experience
        </a>
        <a
          className="mx-3 px-1 animating-underline hover:text-[var(--layout-color-highlight)] hover:scale-110"
          href="#skills_page"
        >
          Skills
        </a>

        <a
          className="mx-3 px-1 animating-underline hover:text-[var(--layout-color-highlight)] hover:scale-110"
          href="#certificate_page"
        >
          Certificates
        </a>

        <a
          className="mx-3 px-1 animating-underline hover:text-[var(--layout-color-highlight)] hover:scale-110"
          href="#contact_me"
        >
          Contact Me
        </a>

        <Settings />
      </div>
    </motion.div>
  );
}

export default memo(NavBar);
