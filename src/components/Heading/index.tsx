import React from "react";

/* Type */
import { HeadingType } from "./index.type";

function Heading({ subtitle, title }: HeadingType) {
    return (
        <div className="text-center">
            <h4
                data-testid="subtitle"
                className="text-xl font-bold  leading-10 text-orange-anzac"
            >
                {subtitle}
            </h4>
            <h1
                data-testid="title"
                className="text-5xl leading-10 font-bold underline"
            >
                {title}
            </h1>
        </div>
    );
}

export default React.memo(Heading);
