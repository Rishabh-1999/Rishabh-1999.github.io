/**
 * Owner: Rishabh Anand
 * Desc: Sections - Work Experiences Page
 **/

import { memo, useState } from "react";

/* Styling Utils */
import classnames from "classnames";

import { format, differenceInYears, differenceInMonths } from "date-fns";

/* Animations */
import { motion } from "framer-motion";

/* MUI */

/* Components */
import Heading from "components/Heading";
import { DialogBox } from "components/ModalBox";

/* Data */
import WorkExperienceData, {
  WorkExperiencesDataType,
} from "data/WorkExperiences";
import ImageMappings from "data/ImageMappings";

interface WorkExperienceModalType extends WorkExperiencesDataType {
  open: boolean;
  toggleModal: () => void;
  children: JSX.Element | JSX.Element[];
}

const WorkExperienceModal = ({
  open,
  toggleModal,
  children,
}: WorkExperienceModalType) => {
  return (
    <DialogBox
      open={open}
      showTitle={false}
      submitText={"Ok, Cool"}
      showCancelButton={false}
      onSubmitClose={true}
      handleClose={toggleModal}
    >
      <div className="px-6 py-4">{children}</div>
    </DialogBox>
  );
};

const ExperienceCard = memo(
  ({
    name: nameOfCompany,
    link,
    position: positionInCompany,
    logo,
    from,
    to,
    skills,
    descriptions,
  }: WorkExperiencesDataType) => {
    const [expandModal, setExpandModal] = useState<boolean>(false);

    const toggleExpandModal = (): void => {
      setExpandModal((oldValue) => !oldValue);
    };

    const CardContainer = (isModal = false) => {
      const fromDate = new Date(from);
      const toDate = to ? new Date(to) : null;

      let differenceInWords = "";

      const diffEndDate = toDate ?? new Date();

      const diffOfYears: number = differenceInYears(diffEndDate, fromDate);
      if (diffOfYears) differenceInWords = diffOfYears + " Years, ";

      const diffOfMonths: number = differenceInMonths(diffEndDate, fromDate);
      if (diffOfMonths)
        differenceInWords = differenceInWords + (diffOfMonths % 12) + " Months";

      return (
        <>
          <div className="h-fit mb-0.5 flex flex-col justify-between items-center">
            <h4 className="mt-10 mb-4 flex text-4xl uppercase tracking-wider font-bold font-ConcertOne text-center">
              {nameOfCompany}
            </h4>
            <div className="relative w-full h-[150px] flex justify-center items-center before:content-[''] before:absolute before:block before:top-1/2 before:w-[110%] before:h-3 before:border-t-4 before:border-solid before:border-[var(--layout-color-highlight)] before:z-[1]">
              <motion.a
                initial={{
                  y: -100,
                  opacity: 0.5,
                  scale: 0.5,
                }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                viewport={{
                  once: true,
                }}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="absolute dark:bg-[#2a2a2a] group-hover:scale-110 p-2 rounded-full border-solid border-4 border-[var(--layout-color-highlight)] z-10 flex justify-center"
              >
                <img
                  src={logo}
                  alt="img"
                  className={classnames("rounded-full", {
                    "p-2 bg-gray-500 shadow-xl w-[140px] h-[140px]": isModal,
                    "h-[110px]": !isModal,
                  })}
                />
              </motion.a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="group-hover:font-bold text-2xl">
              {positionInCompany}
            </h3>
            <h6 className="text-sm uppercase">
              {format(fromDate, "dd LLL y")} -&nbsp;
              {toDate ? (
                <>{format(toDate, "dd LLL y")}</>
              ) : (
                <span className="font-bold italic">PRESENT</span>
              )}
              &nbsp; &nbsp;({differenceInWords})
            </h6>
          </div>

          <div className="overflow-clip my-2 flex space-x-3">
            {Array.isArray(skills) &&
              skills.map((skill) => {
                const imageComp: any = ImageMappings[skill];

                if (imageComp)
                  return (
                    <motion.img
                      key={skill}
                      initial={{
                        opacity: 0.5,
                        scale: 0,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.25,
                      }}
                      className="h-[25px]"
                      src={imageComp}
                      alt={skill}
                    />
                  );
                else return <></>;
              })}
          </div>

          <div
            className={classnames("text-[0.9rem]", {
              "text-[var(--layout-color-font)]": !isModal,
              "text-black": isModal,
            })}
          >
            {Array.isArray(descriptions) &&
              descriptions.map((desc, index) => {
                if (Array.isArray(desc)) {
                  return (
                    <div key={index}>
                      {desc.map((subDesc: string) => (
                        <p key={subDesc} className="hover:text-white">
                          {subDesc}
                        </p>
                      ))}
                    </div>
                  );
                } else
                  return (
                    <p key={index} className="my-1 hover:text-white">
                      {desc}
                    </p>
                  );
              })}
          </div>

          {!isModal && (
            <div
              onClick={toggleExpandModal}
              className="absolute h-10 pr-6 bottom-0 left-0 right-0 pt-2 tracking-wider uppercase text-white text-right text-sm font-bold cursor-pointer bg-gradient-to-t from-[#2a2a2a] via-[#2a2a2ae8] to-[#2a2a2a8c]"
            >
              Read more ....
            </div>
          )}
        </>
      );
    };

    const experienceCardForVisual = CardContainer();
    const experienceCardForModal = CardContainer(true);

    return (
      <motion.div
        initial={{
          x: -100,
          opacity: 0.5,
        }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="relative xl:w-[500px] sm:w-[600px] w-full h-[80vh] overflow-hidden group px-6 rounded-2xl bg-[var(--layout-color-bg)] dark:text-white light:text-black flex-shrink-0 flex-grow-0"
      >
        {experienceCardForVisual}
        {expandModal && (
          <WorkExperienceModal
            open={expandModal}
            toggleModal={toggleExpandModal}
            name={nameOfCompany}
            link={link}
            logo={logo}
            position={positionInCompany}
            from={from}
            to={to}
          >
            {experienceCardForModal}
          </WorkExperienceModal>
        )}
      </motion.div>
    );
  }
);

function WorkExperiencesPage() {
  return (
    <section
      id="work_experiences"
      className="snap-start flex flex-col items-center justify-center"
    >
      <Heading heading="Work Experiences" subHeading="Experience I gathered" />

      <div className="max-w-5.5xl w-full overflow-x-auto snap-x snap-mandatory pb-2 flex lg:flex-row flex-col lg:space-x-6 justify-start scrollbar scrollbar-track-[#2a2a2a] scrollbar-thumb-highlightColor">
        {Array.isArray(WorkExperienceData) &&
          WorkExperienceData.map((experience, index) => (
            <ExperienceCard key={experience.name + index} {...experience} />
          ))}
      </div>
    </section>
  );
}

export default WorkExperiencesPage;
