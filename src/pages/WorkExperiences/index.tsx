import React from "react";

/* Global Components */
import Heading from "components/Heading";

/* Data */
import WorkExperiences, { WorkExperiencesDataType } from "data/work_experience";

const JobExperience = React.memo(
    (job: WorkExperiencesDataType): React.ReactElement => {
        return (
            <div className="mb-4 flex md:flex-row flex-col">
                <div className="mr-1 md:flex hidden flex-col justify-start items-center">
                    <img
                        className="mx-2 w-32"
                        src={job.logo}
                        alt={job.companyName}
                    />
                    <a
                        href={job.companyLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-center hover:text-neutral-100 tracking-wider"
                    >
                        {job.companyName}
                    </a>
                </div>
                <div className="mt-3">
                    <div className="flex items-center">
                        <img
                            className="mr-2 md:w-20 md:h-20 w-16 h-16 md:hidden"
                            src={job.logo}
                            alt={job.companyName}
                        />

                        <div className="flex flex-col justify-center flex-wrap">
                            <h3 className="md:text-3xl text-xl font-semibold">
                                {job.position}
                            </h3>

                            <div className="flex flex-wrap md:text-base text-sm">
                                {job.from}&nbsp;to&nbsp;
                                {job.to ?? (
                                    <span className="font-semibold">
                                        Present
                                    </span>
                                )}
                                &nbsp; &nbsp;
                                <div className="flex">
                                    <span className="text-4xl leading-6">
                                        {" • "}
                                    </span>
                                    &nbsp; &nbsp;
                                    <a
                                        href={job.companyLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-normal text-grey-alto"
                                    >
                                        {job.companyName}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-2">
                        <p className="mb-1">
                            As an '{job.position}' , I worked on the following
                            things &nbsp;:&nbsp;
                        </p>
                        {Array.isArray(job.descriptions) &&
                            job.descriptions.map((desc, index) => {
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

                    <div className="mt-4 flex md:flex-row flex-col">
                        <p className="mr-2 text-lg font-semibold">Skills: </p>
                        <div className="flex flex-wrap">
                            {Array.isArray(job.skills) &&
                                job.skills?.map((skill) => (
                                    <div
                                        key={skill}
                                        className="mr-2 mb-2 px-2 py-0.5 rounded-xl bg-grey-scorpion"
                                    >
                                        {skill}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

function JobExperiencesPage(): React.ReactElement {
    return (
        <section id="work-experience_page">
            <Heading title={"Jobs Experience"} subtitle={"Experience Gained"} />

            <div className="mt-4 xl:mx-20 lg:mx-14 md:px-6 sm:px-4 section_content">
                {Array.isArray(WorkExperiences) &&
                    WorkExperiences.map(
                        (
                            job: WorkExperiencesDataType,
                            index: number
                        ): React.ReactElement => {
                            return (
                                <React.Fragment
                                    key={job.companyName + "-" + job.position}
                                >
                                    <JobExperience {...job} />

                                    {index < WorkExperiences.length - 1 && (
                                        <hr className="mb-4 border border-grey-scorpion" />
                                    )}
                                </React.Fragment>
                            );
                        }
                    )}
            </div>
        </section>
    );
}

export default React.memo(JobExperiencesPage);
