/**
 * Owner: Rishabh Anand
 * Desc: Global Components - Heading
 **/

import { memo } from "react";

type HeadingProps = {
  heading: string;
  subHeading?: string;
};

function Heading({ heading, subHeading }: HeadingProps): JSX.Element {
  return (
    <div className="my-5 mx-4 flex flex-col flex-shrink-0 flex-grow-0 justify-center items-center text-heading">
      <h1 className="text-5xl uppercase tracking-[4px] font-[600] font-ConcertOne">
        {heading}
      </h1>
      {subHeading && (
        <h3 className="relative before:content-[''] before:absolute before:block before:top-1/2 before:w-full before:h-1 before:border-t-2 before:border-solid before:border-[var(--layout-color-highlight)] before:z-[1] text-subHeading">
          <span className="relative mx-8 px-2 text-lg z-[5]">{subHeading}</span>
        </h3>
      )}
    </div>
  );
}

export default memo(Heading);
