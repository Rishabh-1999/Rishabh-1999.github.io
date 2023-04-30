/*
 * Owner: Rishabh Anand
 * Desc: Landing Page Component
 */

/* Styles */
import "./landingPage.styles.scss";

import { motion } from "framer-motion";

/* Components */
import NavBar from "./components/NavBar";
import Typical from "./components/Typical";

/* Material Icons */
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/* Assets */
import MyPhoto from "assets/images/me/MyPhoto.png";

const typewriterSteps = [
  ["Full Stack Developer  ⚛️", 2500],
  ["Software Engineer🧑🏻‍💻", 2500],
  ["Defense Expert 🪖⚔️", 2500],
  ["Anime Lover", 1000],
  ["Indian 🕉️ 🇮🇳", 2500],
];

function LandingPage() {
  return (
    <section id="landing_page" className="snap-start">
      <NavBar />

      <div className="max-w-6xl mx-auto xl:px-16 md:px-8 px-2 md:pt-20 pt-12">
        <div className="flex flex-wrap items-start md:justify-start justify-center">
          <motion.div
            initial={{
              x: -100,
              opacity: 0.5,
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="left md:pt-10"
          >
            <h1 className="font-extrabold text-5xl leading-10">
              Rishabh
              <br />
              Anand
              <span className="text-highlightColor">.</span>
            </h1>
            <div className="h-[3px] w-[110px] mt-6 mb-4 bg-highlightColor"></div>

            <Typical steps={typewriterSteps.flat()} loop={Infinity} />
          </motion.div>

          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-grow justify-center items-end"
          >
            <img
              className="max-w-full h-[500px] object-cover"
              src={MyPhoto}
              alt="Rishabh Anand"
              loading="eager"
            />
          </motion.div>

          <motion.div
            initial={{
              x: +100,
              opacity: 0.5,
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="right md:pt-10 md:block hidden"
          >
            <h3 className="font-bold text-[1.75rem] text-left text-highlightColor tracking-wide">
              INTRODUCTION
            </h3>
            <h3 className="font-bold text-[1.1rem]">
              Software Enginner&nbsp;
              <br />
              <a
                href="https://www.prescienceds.com/"
                target="_blank"
                rel="noreferrer"
                className="tracking-wide"
              >
                @&nbsp;Autodesk
              </a>
            </h3>
            <p className=" break-normal">React JS | Node JS | Flask | Docker</p>

            <a
              href="#about-me"
              className="text-highlightColor tracking-wide flex items-end text-[1.1rem] font-bold"
            >
              Learn more
              <ExpandMoreIcon />
            </a>
          </motion.div>
        </div>

        {/* <ReactAudioPlayer
                    src={background__music}
                    autoPlay
                    volume={0.3}
                    muted
                /> */}
      </div>
    </section>
  );
}

export default LandingPage;
