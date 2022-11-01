import React from "react";

/* Styles */
import "./heading.styles.scss";

type Props = {
    heading: string;
    subHeading?: string;
};

function Heading({ heading, subHeading }: Props) {
    return (
        <div className="flex-grow-0 ri-heading">
            <h1>{heading}</h1>
            {subHeading && (
                <h3 className="ri-heading-subHeading">
                    <span>{subHeading}</span>
                </h3>
            )}
        </div>
    );
}

export default React.memo(Heading);
