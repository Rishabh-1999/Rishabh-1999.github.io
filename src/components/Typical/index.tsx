import React from "react";

import { type, type as loopedType } from "@camwiegert/typical";

const Typical = ({
    steps,
    loop,
}: {
    steps: (string | number)[];
    loop: "string" | typeof Infinity | "number";
}) => {
    const typicalRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        if (loop === Infinity) {
            type(typicalRef.current, ...steps, loopedType);
        } else if (typeof loop === "number") {
            type(typicalRef.current, ...Array(loop).fill(steps).flat());
        } else {
            type(typicalRef.current, ...steps);
        }
    });

    return <p ref={typicalRef as React.RefObject<HTMLDivElement>} />;
};

export default React.memo(Typical);
