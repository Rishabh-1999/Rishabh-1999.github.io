/*
 * @Owner: Rishabh Anand
 * @Desc: Section - Landing Page Component
 */

import { memo } from "react";

/* Styles */
import "./landingPage.styles.scss";

/* Animation Libarary */
import { motion } from "framer-motion";

/* Material Icons */
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/* Components */
import NavBar from "./components/NavBar";
import Typical from "./components/Typical";

/* Assets */
import MyPhoto from "assets/images/me/MyPhoto.png";

/* Data */
import { PersonalDetails, WorkExperienceData } from "data";

function LandingPage() {
  const latestJob = WorkExperienceData[0];

  return (
    <section id="landing_page" className="snap-start">
      <NavBar />

      <div className="max-w-7xl mx-auto md:px-6 px-2 md:pt-20 pt-12">
        <div className="flex flex-wrap items-start md:justify-start justify-center">
          <motion.div
            initial={{
              x: -100,
              opacity: 0.5,
              scale: 0.9,
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="left md:pt-28"
          >
            <h3 className="relative -left-3 text-lg text-[var(--layout-color-font-light)] font-ConcertOne">
              Hello, I am
            </h3>
            <h1 className="font-extrabold text-5xl leading-10">
              {PersonalDetails.name}
              <span className="text-[var(--layout-color-highlight)]">.</span>
            </h1>

            <div className="h-[5px] w-[200px] mt-6 mb-4 bg-[var(--layout-color-highlight)]"></div>
            <Typical
              steps={PersonalDetails.youInSteps.flat()}
              loop={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{
              y: -100,
              opacity: 0,
              scale: 0.9,
            }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-grow justify-center sm:items-center items-end"
          >
            <img
              className="max-w-full h-[450px] object-cover"
              src={MyPhoto}
              alt={PersonalDetails.name}
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
            className="right lg:pt-28 xl:block hidden"
          >
            <h3 className="font-bold text-3xl text-left text-[var(--layout-color-highlight)] tracking-wide">
              INTRODUCTION
            </h3>

            <h3 className="font-bold text-[1.1rem]">
              {latestJob.position}&nbsp;
              <a
                href={latestJob.link}
                target="_blank"
                rel="noreferrer noopener"
                className="tracking-wide flex items-center relative w-fit"
              >
                @&nbsp;{latestJob.name}
                <img
                  className="w-[38px] h-[38px] absolute -right-10"
                  src={latestJob.logo}
                  alt={latestJob.name}
                />
              </a>
            </h3>

            <p className="break-normal text-[var(--layout-color-font-light)]">
              {latestJob.skills?.slice(0, 5).join(" | ")}
            </p>

            <a
              href="#about-me"
              className="text-[var(--layout-color-highlight)] tracking-wide flex items-end text-[1.1rem] font-bold"
            >
              Learn more
              <ExpandMoreIcon />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(LandingPage);
