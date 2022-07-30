import React from "react";

/* Styles */
import "./index.scss";

/* Global Components */
import Heading from "components/Heading";

/* Images/SVG */
import StarFilledSVG from "assets/svg/star_filled.svg";
import StarEmptySVG from "assets/svg/star_empty.svg";

/* Data */
import TechIUse, { TechIUseType } from "data/techIUse";

function TechCard({ title, image, rating, imageHeight }: TechIUseType) {
    return (
        <div className="my-1 p-1 card">
            <h5 className="content mb-1 text-orange-anzac text-2xl font-bold">
                {title}
            </h5>
            <div className="flex justify-center">
                <img
                    src={image}
                    alt={title}
                    className={"h-20"}
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
    data: TechIUseType[];
}

function CategoryContainer({ title, data }: CategoryContainerType) {
    return (
        <div className="md:my-1 my-4 mx-4 p-1 rounded-2xl category_container">
            <div className="py-2 text-center heading font-bold underline text-3xl">
                {title}
            </div>
            <div className="p-1">
                {Array.isArray(data) &&
                    data.map((stack) => (
                        <TechCard key={stack.title} {...stack} />
                    ))}
            </div>
        </div>
    );
}

function TechIUsePage() {
    return (
        <section id="tech_i_know" className="px-4 pt-4">
            <Heading title={"Tech I Know"} subtitle={"Knowledge I Learned"} />

            <div className="section_content lg:mt-6 mx-2 mb-4 md:mx-auto px-2 md:px-6 sm:px-4 pt-4">
                <div className="container mx-auto px-4 flex flex-wrap flex-col md:flex-row">
                    <div className="flex-1">
                        <CategoryContainer
                            title={"Front End"}
                            data={TechIUse.frontEnd}
                        />
                        <CategoryContainer
                            title={"Front End Design"}
                            data={TechIUse.frontEndDesign}
                        />
                    </div>
                    <div className="flex-1">
                        <CategoryContainer
                            title={"Back End"}
                            data={TechIUse.backend}
                        />
                        <CategoryContainer
                            title={"Programming Language"}
                            data={TechIUse.programmingLanguage}
                        />
                    </div>
                    <div className="flex-1">
                        <CategoryContainer
                            title={"Database"}
                            data={TechIUse.databases}
                        />
                        <CategoryContainer
                            title={"Dev Ops"}
                            data={TechIUse.devops}
                        />
                        <CategoryContainer
                            title={"Cloud Services"}
                            data={TechIUse.cloud_services}
                        />
                        <CategoryContainer
                            title={"Version Control"}
                            data={TechIUse.versionControl}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(TechIUsePage);
