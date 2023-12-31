/**
 * @Owner: Rishabh Anand
 * @Desc: Sections - Skills Page
 **/

import { memo, useMemo } from "react";

/* Animation Library */
import { motion } from "framer-motion";

/* Constants */
import { DesignBreakpoint } from "constants/index";

/* Components */
import Heading from "components/Heading";

/* Utils */
import { useWindowDimensions } from "utils/index";

/* Data */
import { SkillsData, ImageMappings } from "data";

/* Types */
import type { SkillsDataType } from "data";

function SkillsPage() {
  const { breakpoint } = useWindowDimensions();

  const mobileViewEnabled = breakpoint <= DesignBreakpoint.MD;

  const SkillsComponents = useMemo(() => {
    return SkillsData.map((skill: SkillsDataType) => {
      const imageComponent = ImageMappings[skill.label];

      if (imageComponent) {
        return (
          <div
            key={skill.label}
            className="p-2 md:w-[90px] w-[80px] md:h-[90px] h-[80px] relative hover:scale-105 bg-slate-600 rounded-full flex justify-center items-center group"
          >
            <div className="absolute group-hover:opacity-10 flex justify-center items-center">
              <img
                src={imageComponent}
                alt={skill.label}
                className="w-[60%] h-[60%] object-cover"
              />
            </div>
            <div className="absolute hidden text-center group-hover:flex flex-col justify-end items-center">
              <span className="md:block hidden text-[0.95rem] font-bold text-zinc-200">
                {skill.label}
              </span>
              <span className="text-sm">{skill.rating}%</span>
            </div>
          </div>
        );
      } else {
        console.error(new Error("Image not found for :" + skill.label));
        return undefined;
      }
    });
  }, []);

  const totalSkills = SkillsComponents.length;

  return (
    <section id="skills_page" className="flex flex-col items-center">
      <Heading heading="Skills" subHeading="Tech I Work on" />

      <div className="max-w-4xl mt-4 md:mx-0 mx-6 overflow-x-visible">
        {}
        <motion.div
          initial={{
            x: -400,
            opacity: 0.5,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.75 }}
          className="mb-5 grid grid-cols-3 sm:grid-cols-5 sm:gap-4 gap-6"
        >
          {SkillsComponents.slice(
            0,
            totalSkills +
              (mobileViewEnabled
                ? (totalSkills % 3 ? 1 : 0) / 3
                : (totalSkills % 2 ? 1 : 0) / 2)
          )}
        </motion.div>

        <motion.div
          initial={{
            x: 400,
            opacity: 0.5,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.75 }}
          className="mb-5 grid grid-cols-3 sm:grid-cols-5 sm:gap-4 gap-6"
        >
          {SkillsComponents.slice(
            totalSkills +
              (mobileViewEnabled
                ? (totalSkills % 3 ? 1 : 0) / 3
                : (totalSkills % 2 ? 1 : 0) / 2),
            totalSkills
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(SkillsPage);
