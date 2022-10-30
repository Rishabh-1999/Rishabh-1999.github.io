import React from "react";

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
import { experienceData, WorkExperiencesDataType } from "data/experience";
import { imagesMapping } from "data/imagesMapping";

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
            {children}
        </DialogBox>
    );
};

const ExperienceCard = React.memo(
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
        const [expandModal, setExpandModal] = React.useState<boolean>(false);

        const handleExpandModal = () => {
            setExpandModal((oldValue) => !oldValue);
        };

        const fromDate = new Date(from);
        const toDate = to ? new Date(to) : null;

        let difference = "";

        const diffEndDate = toDate ?? new Date();

        const diffInYears: number = differenceInYears(diffEndDate, fromDate);
        if (diffInYears) difference = diffInYears + " Years, ";

        const diffInMonths: number = differenceInMonths(diffEndDate, fromDate);

        if (diffInMonths)
            difference = difference + (diffInMonths % 12) + " Months";

        const Output = (isModal = false) => {
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
                        className="scale-125 m-2 flex justify-center rounded-full hover:scale-105"
                    >
                        <img
                            src={logo}
                            alt="img"
                            className={classnames(
                                "rounded-full w-[130px] h-[130px]",
                                {
                                    "bg-gray-400": isModal,
                                }
                            )}
                        />
                    </motion.div>
                    <h3 className="text-[1.3rem]"> {position} </h3>
                    <a
                        href={companyLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm tracking-wider uppercase font-bold group flex"
                    >
                        {companyName}
                        <span className="ml-2 hidden group-hover:block duration-300">
                            <OpenInNewIcon
                                sx={{
                                    fontSize: "16px",
                                }}
                            />
                        </span>
                    </a>

                    <div className="mt-2 mb-3 flex space-x-2 flex-wrap">
                        {Array.isArray(skills) &&
                            skills.map((skill) => {
                                const imageComp: any = imagesMapping[skill];

                                if (imageComp)
                                    return (
                                        <motion.img
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

                    <h6 className="my-2 text-sm uppercase">
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
                                        <p key={desc} className="my-1">
                                            {desc}
                                        </p>
                                    );
                            })}
                    </div>

                    {!isModal && (
                        <div
                            onClick={handleExpandModal}
                            className="absolute bottom-0 left-0 right-6 tracking-wider uppercase h-10 text-right text-sm font-bold pt-2 cursor-pointer bg-gradient-to-t from-[#2a2a2a] via-[#2a2a2ae8] to-[#2a2a2a8c]"
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
                className="lg:m-0 md:mx-16 sm:mx-8 mx-4 mb-4 py-2 px-6 rounded-2xl text-white relative bg-[#2a2a2a] lg:w-[500px] h-[85vh] flex-shrink-0 overflow-hidden shadow-zinc-800 snap-center"
            >
                {Output()}
                {expandModal && (
                    <WorkExperienceModal
                        open={expandModal}
                        toggleModal={handleExpandModal}
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
        <section id="work_experience" className="flex flex-col items-center">
            <Heading
                heading="Work Experience"
                subHeading="Experience I gathered"
            />

            <div className="w-full max-w-5xl pb-4 flex lg:flex-row lg:space-x-4 flex-col overflow-x-auto snap-x snap-mandatory scrollbar scrollbar-track-[#2a2a2a] scrollbar-thumb-highlightColor">
                {Array.isArray(experienceData) &&
                    experienceData.map((experience, index) => (
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
