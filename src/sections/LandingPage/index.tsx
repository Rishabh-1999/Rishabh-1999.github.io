/*
 * @Owner: Rishabh Anand
 * @Desc: Section - Landing Page Component
 */

import { memo } from "react";

/* Styles */
import "./landingPage.styles.scss";

/* Animation Library */
import { motion } from "framer-motion";

/* Material Icons */
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/* Components */
import NavBar from "./components/NavBar";
import Typical from "./components/Typical";
import Tag from "components/Tag";

/* Assets */
import MyPhoto from "assets/images/me/MyPhoto.png";

/* Data */
import { ImageMappings, PersonalDetails, WorkExperienceData } from "data";

function TagList({ list }: { list: string[] }) {
  return (
    <>
      {list.map((skill, index) => {
        return (
          <>
            <Tag imgSrc={ImageMappings[skill]} title={skill} />
            {list.length - 1 != index && <>&nbsp;|&nbsp;</>}
          </>
        );
      })}
    </>
  );
}

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
            <h1 className="font-extrabold text-6xl leading-[3.25rem]">
              Rishabh
              <br />
              Anand
              <span className="text-[var(--layout-color-highlight)]">.</span>
            </h1>

            <div className="h-[4px] w-[200px] mt-6 mb-4 bg-[var(--layout-color-highlight)]"></div>

            <Typical
              steps={PersonalDetails.typicalSteps.flat()}
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
              className="max-w-full ml-[4%]  h-[475px] object-cover"
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
            <h3 className="font-extrabold text-4xl text-[var(--layout-color-highlight)] tracking-wide">
              INTRODUCTION
            </h3>

            <h3 className="font-bold text-[1.3rem]">
              {latestJob.position}&nbsp;
              <a
                href={latestJob.link}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[0.9rem] text-[var(--layout-color-font-light)] tracking-wide hover:opacity-75 font-bold relative w-fit uppercase"
              >
                @{latestJob.name}
                <img
                  className="w-[28px] h-[16px] absolute -right-8 top-0.5"
                  src={latestJob.logo}
                  alt={latestJob.name}
                />
              </a>
            </h3>

            {latestJob.skills && (
              <p className="flex break-normal text-[var(--layout-color-font-light)]">
                <TagList list={latestJob.skills.slice(0, 4)} />
              </p>
            )}

            <a
              href="#about-me"
              className="mt-2 bg-[var(--layout-color-highlight)] text-[var(--layout-color-bg)]  w-fit px-3 rounded-xl flex items-end text-[0.8rem] uppercase font-extrabold"
            >
              Learn More
              <ExpandMoreIcon fontSize={"small"} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(LandingPage);
