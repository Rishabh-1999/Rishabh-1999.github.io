import React from "react";

/* Styles */
import "./index.scss";

/* Global Components */
import Heading from "components/Heading";

/* Assets */
import { ReactComponent as LaunchLink } from "assets/svg/launch-link.svg";

/* Data */
import EducationsArray, { EducationType } from "data/educations";

const EducationCard = React.memo(
    ({ title, year, location, image: Image, link }: EducationType) => (
        <div className="my-2 mx-3 p-1 flex-1 relative rounded-2xl flex flex-col items-center justify-center education_detail_card">
            {link && (
                <a
                    href={link}
                    target={"_blank"}
                    rel="noreferrer"
                    className="absolute top-4 right-4 cursor-pointer"
                >
                    <LaunchLink className="w-8 h-8 hover:w-9 hover:h-9 launch-link" />
                </a>
            )}
            <div className="text-center mx-2 my-1 p-3">
                {<Image className="front-image" />}
            </div>
            <div className="text-center">
                <h3 className="font-bold underline mb-0">{title}</h3>
                <p>
                    <br />
                    {year}
                    <br />
                    {location}
                </p>
            </div>
        </div>
    )
);

function EducationDetailsPage() {
    return (
        <section id="education_details_page" className="px-4 pt-4">
            <Heading title={"EDUCATION"} subtitle={"Education History"} />

            <div className="section_content lg:mt-6 mx-2 mb-4 md:mx-auto px-2 md:px-6 sm:px-4 pt-4">
                <div className="container grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-flow-row">
                    {Array.isArray(EducationsArray) &&
                        EducationsArray.map((educationDetails) => {
                            return (
                                <EducationCard
                                    key={educationDetails.title}
                                    {...educationDetails}
                                />
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

export default React.memo(EducationDetailsPage);
