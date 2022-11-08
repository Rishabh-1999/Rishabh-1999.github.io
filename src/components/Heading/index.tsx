import { memo } from "react";

/* Styles */
import "./heading.styles.scss";

type HeadingProps = {
    heading: string;
    subHeading?: string;
};

function Heading({ heading, subHeading }: HeadingProps) {
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

export default memo(Heading);
