// import { useContext } from "react";

/* Animation */
import { motion } from "framer-motion";

/* Context */
// import { ThemeContext } from "context";

/* Material UI */
// import MusicOffIcon from "@mui/icons-material/MusicOff";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import Brightness4Icon from "@mui/icons-material/Brightness4";

/* Assets */
import { ReactComponent as RiLogoSVG } from "assets/svg/RiLogo.svg";

/* Data */
// import ThemeTypes from "data/theme";

// const Settings = () => {
//     const { theme, setTheme } = useContext(ThemeContext);

//     return (
//         <motion.div
//             initial={{
//                 x: 100,
//                 opacity: 0.5,
//             }}
//             animate={{ x: 0, opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="ml-2 pl-2 border-l solid border-l-1 border-l-primaryColor"
//         >
//             <span className="mx-1">
//                 <MusicOffIcon className="hover:text-highlightColor hover:scale-110" />
//             </span>
//             <span className="mx-1">
//                 {theme === ThemeTypes.Dark ? (
//                     <DarkModeIcon
//                         className="hover:text-highlightColor hover:scale-110"
//                         onClick={() => setTheme(ThemeTypes.Light)}
//                     />
//                 ) : (
//                     <Brightness4Icon
//                         className="hover:text-highlightColor hover:scale-110"
//                         onClick={() => setTheme(ThemeTypes.Dark)}
//                     />
//                 )}
//             </span>
//         </motion.div>
//     );
// };

function NavBar() {
    return (
        <motion.div
            initial={{
                y: -100,
                opacity: 0.5,
            }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto sm:pt-6 pt-4 xl:px-16 lg:px-12 md:px-6 px-4 flex items-center justify-between"
        >
            <a className="flex-grow-0 relative" href="/">
                <RiLogoSVG className="w-[65px] h-[65px]" />
            </a>

            <div className="md:flex hidden flex-grow justify-end items-center text-primaryColor font-bold text-[1rem]">
                <a className="mx-3 px-1 animating-underline" href="#about-me">
                    About Me
                </a>

                <a
                    className="mx-3 px-1 animating-underline"
                    href="#work_experience"
                >
                    Work Experience
                </a>
                <a
                    className="mx-3 px-1 animating-underline"
                    href="#skills_page"
                >
                    Skills
                </a>

                <a
                    className="mx-3 px-1 animating-underline"
                    href="#certificate_page"
                >
                    Certificates
                </a>

                <a className="animating-underline" href="#contact-me">
                    Contact Me
                </a>
            </div>
            {/* <Settings /> */}
        </motion.div>
    );
}

export default NavBar;