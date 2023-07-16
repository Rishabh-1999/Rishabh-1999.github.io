/*
 * Owner: Rishabh Anand
 * Desc: Sections - About Page
 */

import { memo } from "react";

/* Components */
import Heading from "components/Heading";

/* Assets */
import MemoJi from "assets/images/animated/memoji-alt.png";
import HiEmoji from "assets/images/animated/emoji.png";
import WorkExperienceData from "data/WorkExperiences";

function AboutPage(): JSX.Element {
  const latestJob = WorkExperienceData[0];

  return (
    <section
      id="about_me"
      className="flex flex-col justify-center items-center"
    >
      <Heading heading="About Me" subHeading="Who I am ?" />

      <div className="max-w-6xl m-6 px-6 min-h-[450px] h-full flex-1 dark:bg-white bg-[var(--layout-primary-color-odd)] rounded-3xl flex flex-col md:flex-row items-center justify-between">
        <div className="mx-2">
          <img
            src={MemoJi}
            alt="My College Pic"
            className="rounded-lg h-[325px] hover:scale-105 duration-500"
          />
        </div>

        <div className="lg:max-w-[60%] flex-1 text-black text-justify">
          <h1 className="font-bold mb-3 text-[1.3rem]">
            <img
              src={HiEmoji}
              alt="Hi"
              className="w-11 hover:scale-105 hover:-skew-x-12 hover:skew-y-6 duration-500 mb-2 -ml-1"
            />
            Hi, I am Rishabh Anand, a full-stack developer from India
          </h1>
          <h2 className="text-lg">
            Currently working as a&nbsp; {latestJob.position} @
            <a href={latestJob.link}>{latestJob.name}</a>
            <img
              src={latestJob.logo}
              alt={latestJob.name}
              className="relative inline w-12 h-10"
            />
            .
            <br />I love to create web application tools and services from
            scratch, with focus on user experience and with a blend on solving
            problem in an optimal way.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutPage);
