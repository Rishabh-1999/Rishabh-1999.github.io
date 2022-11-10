import { memo, useState } from "react";

/* Styling Utils */
import classnames from "classnames";

import { format, differenceInYears, differenceInMonths } from "date-fns";

/* Animation */
import { motion } from "framer-motion";

/* Material UI Icons */
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

/* Components */
import Heading from "components/Heading";
import { DialogBox } from "components/ModalBox";

/* Data */
import ExperienceData, { WorkExperiencesDataType } from "data/experience";
import imagesMapping from "data/imagesMapping";

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
        companyName,
        companyLink,
        position,
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

        const Output = (isModal = false) => {
            const fromDate = new Date(from);
            const toDate = to ? new Date(to) : null;

            let difference = "";

            const diffEndDate = toDate ?? new Date();

            const diffInYears: number = differenceInYears(
                diffEndDate,
                fromDate
            );
            if (diffInYears) difference = diffInYears + " Years, ";

            const diffInMonths: number = differenceInMonths(
                diffEndDate,
                fromDate
            );

            if (diffInMonths)
                difference = difference + (diffInMonths % 12) + " Months";

            return (
                <>
                    <motion.div
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
                        className="py-2 px-4 rounded-full flex justify-center group-hover:scale-110"
                    >
                        <img
                            src={logo}
                            alt="img"
                            className={classnames("rounded-full", {
                                "p-2 bg-gray-500 shadow-xl w-[140px] h-[140px]":
                                    isModal,
                                "w-[130px] h-[130px]": !isModal,
                            })}
                        />
                    </motion.div>
                    <h3 className="text-[1.3rem] group-hover:underline">
                        {position}
                    </h3>
                    <a
                        href={companyLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm tracking-wider uppercase font-bold flex"
                    >
                        {companyName}
                        <span className="ml-2 hidden group-hover:block duration-300">
                            <OpenInNewIcon
                                sx={{
                                    fontSize: "14px",
                                }}
                            />
                        </span>
                    </a>

                    <div className="my-2 flex space-x-2 flex-wrap">
                        {Array.isArray(skills) &&
                            skills.map((skill) => {
                                const imageComp: any = imagesMapping[skill];

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
                                            className="h-[20px]"
                                            src={imageComp}
                                            alt={skill}
                                        />
                                    );
                                else return <></>;
                            })}
                    </div>

                    <h6 className="my-1 text-sm uppercase">
                        {format(fromDate, "dd LLL y")} -&nbsp;
                        {toDate ? (
                            <>{format(toDate, "dd LLL y")}</>
                        ) : (
                            <span className="italic font-bold">PRESENT</span>
                        )}
                        &nbsp; &nbsp;({difference})
                    </h6>

                    <div className="text-[0.9rem]">
                        {Array.isArray(descriptions) &&
                            descriptions.map((desc, index) => {
                                if (Array.isArray(desc)) {
                                    return (
                                        <div key={index}>
                                            {desc.map((subDesc: string) => (
                                                <p key={subDesc}>{subDesc}</p>
                                            ))}
                                        </div>
                                    );
                                } else
                                    return (
                                        <p key={index} className="my-1">
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

        return (
            <motion.div
                initial={{
                    x: -100,
                    opacity: 0.5,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="xl:w-[500px] lg:w-[450px] h-[80vh] py-2 px-6 relative rounded-2xl group shadow-zinc-800 dark:bg-[#2a2a2a] bg-[var(--layout-primary-color-even)] dark:text-white text-black flex-shrink-0 overflow-hidden"
            >
                {Output()}
                {expandModal && (
                    <WorkExperienceModal
                        open={expandModal}
                        toggleModal={toggleExpandModal}
                        companyName={companyName}
                        companyLink={companyLink}
                        logo={logo}
                        position={position}
                        from={from}
                        to={to}
                    >
                        {Output(true)}
                    </WorkExperienceModal>
                )}
            </motion.div>
        );
    }
);

function WorkExperiencePage() {
    return (
        <section
            id="work_experience"
            className="flex flex-col items-center justify-center snap-start"
        >
            <Heading
                heading="Work Experience"
                subHeading="Experience I gathered"
            />

            <div className="max-w-5xl mx-6 my-4 pb-4 flex lg:flex-row lg:space-x-6 md:space-x-4 md:space-y-0 space-y-4 flex-col justify-center overflow-x-auto snap-x snap-mandatory scrollbar scrollbar-track-[#2a2a2a] scrollbar-thumb-highlightColor">
                {Array.isArray(ExperienceData) &&
                    ExperienceData.map((experience, index) => (
                        <ExperienceCard
                            key={experience.companyName + index}
                            {...experience}
                        />
                    ))}
            </div>
        </section>
    );
}

export default WorkExperiencePage;
