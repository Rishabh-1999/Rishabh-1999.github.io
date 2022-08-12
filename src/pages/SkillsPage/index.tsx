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

function SkillCard({ title, image, rating, imageHeight }: SkillDataType) {
    return (
        <div className="my-1 p-1 card">
            <h5 className="content mb-1 text-orange-anzac text-2xl font-bold">
                {title}
            </h5>
            <div className="flex justify-center">
                <img
                    src={image}
                    alt={title}
                    className="skill-logo"
                    {...(imageHeight && { style: { height: imageHeight } })}
                />
            </div>
            <span className="my-1 ratings flex justify-end">
                {new Array(5)
                    .fill(false)
                    .fill(true, 0, rating)
                    .map((filled) =>
                        filled ? (
                            <img src={StarFilledSVG} alt="Star filled" />
                        ) : (
                            <img src={StarEmptySVG} alt="Star empty" />
                        )
                    )}
            </span>
        </div>
    );
}

interface CategoryContainerType {
    title: string;
    data: SkillDataType[];
}

function CategoryContainer({ title, data }: CategoryContainerType) {
    return (
        <div className="md:my-1 my-4 mx-4 p-1 rounded-2xl category_container">
            <div className="pt-3 pb-2 text-center heading font-bold underline text-2xl">
                {title}
            </div>
            <div className="p-1">
                {Array.isArray(data) &&
                    data.map((stack, index) => (
                        <SkillCard key={stack.title + "-" + index} {...stack} />
                    ))}
            </div>
        </div>
    );
}

function SkillsPage() {
    return (
        <section id="skill_i_know" className="px-4 pt-4">
            <Heading title={"Skills"} subtitle={"Skills I’m quite good at"} />

            <div className="section_content lg:mt-6 mx-2 mb-4 md:mx-auto px-2 md:px-6 sm:px-4 pt-4">
                <div className="container mx-auto px-4 flex flex-wrap flex-col md:flex-row">
                    <div className="flex-1">
                        <CategoryContainer
                            title={"Front End"}
                            data={Skills.frontEnd}
                        />
                        <CategoryContainer
                            title={"Front End Design"}
                            data={Skills.frontEndDesign}
                        />
                    </div>
                    <div className="flex-1">
                        <CategoryContainer
                            title={"Back End"}
                            data={Skills.backend}
                        />
                        <CategoryContainer
                            title={"Programming Language"}
                            data={Skills.programmingLanguage}
                        />
                    </div>
                    <div className="flex-1">
                        <CategoryContainer
                            title={"Database"}
                            data={Skills.databases}
                        />
                        <CategoryContainer
                            title={"Dev Ops"}
                            data={Skills.devops}
                        />
                        <CategoryContainer
                            title={"Cloud Services"}
                            data={Skills.cloud_services}
                        />
                        <CategoryContainer
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
