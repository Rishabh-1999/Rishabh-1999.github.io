import React from "react";

import { format, differenceInYears, differenceInMonths } from "date-fns";

/* Animation */
import { motion } from "framer-motion";

/* Material UI Icons */
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

/* Components */
import Heading from "components/Heading";

/* Data */
import { experienceData, WorkExperiencesDataType } from "data/experience";
import { imagesMapping } from "data/imagesMapping";

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
        const fromDate = new Date(from);
        const toDate = to ? new Date(to) : null;

        let difference = "";

        const diffEndDate = toDate ?? new Date();

        const diffInYears: number = differenceInYears(diffEndDate, fromDate);
        if (diffInYears) difference = diffInYears + " Years, ";

        const diffInMonths: number = differenceInMonths(diffEndDate, fromDate);

        if (diffInMonths)
            difference = difference + (diffInMonths % 12) + " Months";

        return (
            <motion.div
                initial={{
                    x: -100,
                    opacity: 0.5,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="py-2 px-6 rounded-2xl text-white relative bg-[#2a2a2a] w-[500px] h-[75vh] flex-shrink-0 overflow-hidden shadow-zinc-800 snap-center"
            >
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
                    className="m-2 flex justify-center rounded-full"
                >
                    <img
                        src={logo}
                        alt="img"
                        className="rounded-full w-[120px] h-[120px]"
                    />
                </motion.div>
                <h3 className="text-2xl"> {position} </h3>
                <a
                    href={companyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm tracking-wider uppercase font-bold group flex delay-700"
                >
                    {companyName}
                    <span className="ml-2 hidden group-hover:block">
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

                <div className="text-[0.95rem]">
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
                <div className="absolute bottom-0 left-0 right-6 h-10 text-right font-bold pt-2 cursor-pointer bg-gradient-to-t from-[#2a2a2a] via-[#2a2a2ae8] to-[#2a2a2a8c]">
                    Read more ....
                </div>
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

            <div className="snap-x snap-mandatory max-w-5xl pb-4 flex space-x-6 overflow-x-auto w-full scrollbar scrollbar-track-[#2a2a2a] scrollbar-thumb-highlightColor">
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
