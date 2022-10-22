import React from "react";

type Props = {
    heading: string;
    subHeading?: string;
};

function Heading({ heading, subHeading }: Props) {
    return (
        <div className="m-4 flex justify-center flex-col items-center">
            <h1 className="text-4xl tracking-wider">{heading}</h1>
            {subHeading && (
                <h3 className="custom-sub-heading">
                    <span>{subHeading}</span>
                </h3>
            )}
        </div>
    );
}

export default Heading;
