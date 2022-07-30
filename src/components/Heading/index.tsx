import React from "react";

/* Type */
import { HeadingType } from "./index.type";

function Heading({ subtitle, title }: HeadingType) {
    return (
        <div className="text-center">
            <h4 className="text-orange-anzac mb-0">{subtitle}</h4>
            <h1 className="font-bold underline">{title}</h1>
        </div>
    );
}

export default React.memo(Heading);