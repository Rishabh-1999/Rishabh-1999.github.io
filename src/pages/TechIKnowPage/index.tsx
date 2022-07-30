import React from "react";

/* Styles */
import "./index.scss";

/* Images/SVG */
import StarFilledSVG from "assets/svg/star_filled.svg";
import StarEmptySVG from "assets/svg/star_empty.svg";

/* Data */
import TechIUse, { TechIUseType } from "data/techIUse";

interface CardHolderType {
    heading: string;
    data: TechIUseType[];
}

function Card({ title, src, rating }: TechIUseType) {
    return (
        <div className="card flex flex-col p-1 my-2">
            <h5 className="content pb-1 mb-0 text-orange-anzac text-lg font-bold">
                {title}
            </h5>
            <div className="flex justify-center pt-1">
                <img src={src} alt={title} />
            </div>
            <span className="p-1 ratings flex justify-end">
                {new Array(4).fill(true, 0, rating).map((filled) => {
                    if (filled)
                        return <img src={StarFilledSVG} alt="star filled" />;
                    else return <img src={StarEmptySVG} alt="star empty" />;
                })}
            </span>
        </div>
    );
}

function CardHolder({ heading, data }: CardHolderType) {
    return (
        <div className="card__holder m-2 p-2">
            <div className="card__holder__heading text-center p-2">
                <h3 className="font-bold underline">{heading}</h3>
            </div>
            <div className="card__holder__main p-1">
                {data.map((temp) => (
                    <Card key={temp.title} {...temp} />
                ))}
            </div>
        </div>
    );
}

function TechIUsePage() {
    return (
        <section id="tech_i_know" className="px-4 pt-4">
            <div className="text-center">
                <h4 className="text-center text-orange-anzac m-0">
                    Knowledge I Gathered
                </h4>
                <h1 className="font-extrabold">
                    <u>Tech I Know</u>
                </h1>
            </div>
            <div className="mx-2 md:mx-auto px-2 md:px-4 md:pr-8 pt-4 md:pt-10">
                <div className="container mx-auto px-4 flex flex-wrap flex-col md:flex-row">
                    <div className="flex-1">
                        <CardHolder
                            heading={"Front End (React)"}
                            data={TechIUse.react}
                        />
                    </div>
                    <div className="flex-1">
                        <CardHolder
                            heading={"Front End"}
                            data={TechIUse.frontend}
                        />
                        <CardHolder
                            heading={"Back End"}
                            data={TechIUse.backend}
                        />
                    </div>
                    <div className="flex-1">
                        <CardHolder
                            heading={"Database"}
                            data={TechIUse.databases}
                        />
                        <CardHolder
                            heading={"Dev Ops"}
                            data={TechIUse.devops}
                        />
                        <CardHolder
                            heading={"Cloud Services"}
                            data={TechIUse.cloud_services}
                        />
                        <CardHolder
                            heading={"Version Control"}
                            data={TechIUse.versionControl}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(TechIUsePage);
