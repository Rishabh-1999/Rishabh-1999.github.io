/*
 * @Owner: Rishabh Anand
 * @Desc: Section - Landing Page - NavBar Component
 */

import { memo, useContext } from "react";

/* Animation */
import { motion } from "framer-motion";

/* Constants */
import { DesignBreakpoint } from "constants/designBreakpoints.constants";

/* Material UI */
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";

import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

/* Components */
import AudioPlayer from "./components/AudioPlayer";

/* Context */
import { AppContext } from "context";

/* Utils */
import { useThemeMode, useWindowDimensions } from "utils";

/* Data */
import AppSettings from "data/AppSettings";

/* Types */
import { ThemeModesTypes } from "types";

/* Assets */
import RiLogoSVG_Dark from "assets/svg/RiLogo_dark.svg";
import RiLogoSVG_Light from "assets/svg/RiLogo_light.svg";

const Settings = ({
  leftBorder = true,
  rightBorder = false,
}: {
  leftBorder?: boolean;
  rightBorder?: boolean;
}) => {
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
      className={`pl-2 mx-1 ${
        leftBorder &&
        "border-l border-l-1 border-l-[var(--layout-color-font-light)]"
      }
      ${
        rightBorder &&
        "border-r border-r-1 border-r-[var(--layout-color-font-light)]"
      }
      `}
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

const NavBarMenu = ({
  margin = true,
  href,
  children,
}: {
  margin?: boolean;
  href: string;
  children: string;
}) => {
  return (
    <a
      className={`px-1 animating-underline hover:text-[var(--layout-color-highlight)] hover:scale-110 ${
        margin ? "mx-3" : ""
      }`}
      href={href}
    >
      {children}
    </a>
  );
};

function NavBar() {
  const { state } = useContext(AppContext);

  const {
    windowDimensions: { width },
  } = useWindowDimensions();

  const menuEnabled = width <= DesignBreakpoint.MD;

  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0.5,
        scale: 0.9,
      }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7.5xl mx-auto pt-4 px-4 flex items-center justify-between"
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

      {menuEnabled ? (
        <div className="flex flex-grow justify-end items-center">
          <Settings leftBorder={false} rightBorder={true} />

          <Menu
            menuButton={
              <MenuButton>
                <MenuIcon fontSize={"large"} />
              </MenuButton>
            }
            transition
          >
            <MenuItem>
              <NavBarMenu margin={false} href="#about_me">
                About Me
              </NavBarMenu>
            </MenuItem>

            <MenuItem>
              <NavBarMenu margin={false} href="#work_experiences">
                Work Experience
              </NavBarMenu>
            </MenuItem>

            <MenuItem>
              <NavBarMenu margin={false} href="#skills_page">
                Skills
              </NavBarMenu>
            </MenuItem>

            <MenuItem>
              <NavBarMenu margin={false} href="#certificate_page">
                Certificates
              </NavBarMenu>
            </MenuItem>

            <MenuItem>
              <NavBarMenu margin={false} href="#contact_me">
                Contact Me
              </NavBarMenu>
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <div className="md:flex hidden flex-grow justify-end items-center text-[var(--layout-color-font-light)] font-bold text-[1rem]">
          <NavBarMenu href="#about_me">About Me</NavBarMenu>

          <NavBarMenu href="#work_experiences">Work Experience</NavBarMenu>

          <NavBarMenu href="#skills_page">Skills</NavBarMenu>

          <NavBarMenu href="#certificate_page">Certificates</NavBarMenu>

          <NavBarMenu href="#contact_me">Contact Me</NavBarMenu>

          <Settings />
        </div>
      )}
    </motion.div>
  );
}

export default memo(NavBar);
