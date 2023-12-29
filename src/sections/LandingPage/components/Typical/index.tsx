/*
 * @Owner: Rishabh Anand
 * @Desc: Landing Page - Components - Typical
 */

import React, { useRef, memo, RefObject } from "react";

import { type, type as loopedType } from "@camwiegert/typical";

const Typical = ({
  steps,
  loop,
}: {
  steps: (string | number)[];
  loop: "string" | typeof Infinity | "number";
}) => {
  const typicalRef = useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (loop === Infinity) {
      type(typicalRef.current, ...steps, loopedType);
    } else if (typeof loop === "number") {
      type(typicalRef.current, ...Array(loop).fill(steps).flat());
    } else {
      type(typicalRef.current, ...steps);
    }
  });

  return <p ref={typicalRef as RefObject<HTMLDivElement>} />;
};

export default memo(Typical);
