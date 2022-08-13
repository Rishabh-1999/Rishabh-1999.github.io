import React from "react";

/* Styles */
import "./index.scss";

/* Global Components */
import Heading from "components/Heading";

/* Images/SVG */
import StarFilledSVG from "assets/svg/star_filled.svg";
import StarEmptySVG from "assets/svg/star_empty.svg";

/* Data */
import Skills, { SkillDataType } from "data/skills";

const SkillCard = React.memo(
    ({
        title,
        image,
        rating,
        imageHeight,
    }: SkillDataType): React.ReactElement => {
        return (
            <div className="group m-1 flex flex-col justify-evenly min-h-[150px] card">
                <h5 className="mb-1 text-orange-anzac text-2xl font-bold opacity-0 group-hover:opacity-100 ease-out duration-500 content">
                    {title}
                </h5>
                <div className="flex justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="skill-logo h-[85px]"
                        {...(imageHeight && { style: { height: imageHeight } })}
                    />
                </div>
                <span className="my-1 flex justify-end opacity-0 group-hover:opacity-100 ease-out duration-500 ratings">
                    {new Array(5)
                        .fill(false)
                        .fill(true, 0, rating)
                        .map((filled, index: number) =>
                            filled ? (
                                <img
                                    key={index}
                                    className="pl-1 h-[20px]"
                                    src={StarFilledSVG}
                                    alt="Star filled"
                                />
                            ) : (
                                <img
                                    key={index}
                                    className="pl-1 h-[20px]"
                                    src={StarEmptySVG}
                                    alt="Star empty"
                                />
                            )
                        )}
                </span>
            </div>
        );
    }
);

type SkillCategoryContainerType = {
    title: string;
    data: SkillDataType[];
};

const SkillCategoryContainer = React.memo(
    ({ title, data }: SkillCategoryContainerType): React.ReactElement => {
        return (
            <div className="md:my-2 mb-4 md:mx-6 mx-4 p-1 bg-blue-tuna rounded-2xl category_container">
                <div className="py-3 text-center font-bold underline text-2xl heading">
                    {title}
                </div>
                <div className="p-1">
                    {Array.isArray(data) &&
                        data.map((stack: SkillDataType, index: number) => (
                            <SkillCard
                                key={stack.title + "-" + index}
                                {...stack}
                            />
                        ))}
                </div>
            </div>
        );
    }
);

function SkillsPage(): React.ReactElement {
    return (
        <section id="skills-page">
            <Heading title={"Skills"} subtitle={"Skills I'm quite good at"} />

            <div className="mt-4 mx-2 md:px-6 sm:px-4 px-2 pt-2 section_content">
                <div className="container px-2 flex md:flex-row flex-col flex-wrap">
                    <div className="flex-1">
                        <SkillCategoryContainer
                            title={"Front End"}
                            data={Skills.frontEnd}
                        />
                        <SkillCategoryContainer
                            title={"Front End Design"}
                            data={Skills.frontEndDesign}
                        />
                    </div>
                    <div className="flex-1">
                        <SkillCategoryContainer
                            title={"Back End"}
                            data={Skills.backend}
                        />
                        <SkillCategoryContainer
                            title={"Programming Language"}
                            data={Skills.programmingLanguage}
                        />
                    </div>
                    <div className="flex-1">
                        <SkillCategoryContainer
                            title={"Database"}
                            data={Skills.databases}
                        />
                        <SkillCategoryContainer
                            title={"Dev Ops"}
                            data={Skills.devops}
                        />
                        <SkillCategoryContainer
                            title={"Cloud Services"}
                            data={Skills.cloud_services}
                        />
                        <SkillCategoryContainer
                            title={"Version Control"}
                            data={Skills.versionControl}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(SkillsPage);
