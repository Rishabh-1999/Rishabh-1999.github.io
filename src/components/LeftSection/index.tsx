/**
 * @Owner: Rishabh Anand
 * @Desc: Global Components - Left Section
 **/

import { memo, useState } from "react";

/* Styling Utils */
import styled from "@emotion/styled";

/* Animation Library */
import { motion } from "framer-motion";

/* React Social Icons */
import { SocialIcon } from "react-social-icons";

/* Utils */
import { capitalizeFirstLetter } from "utils";

/* Data */
import { SocialMediaData } from "data";

/* Types */
import type { SocialMediaDataType } from "data";

const VerticalBar = styled.div<{ itemHovered?: string }>`
  background-color: ${(props: any) =>
    props.itemHovered
      ? "var(--layout-color-font-light)"
      : "var(--layout-color-util-1)"};
`;

function LeftSection(): JSX.Element {
  const [hoveredItem, setHoveredItem] = useState<string | undefined>();

  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0.5,
        scale: 0.8,
      }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.75 }}
      viewport={{
        once: true,
      }}
      className="fixed hidden xl:left-3 lg:left-1 bottom-0 lg:flex flex-col items-center"
    >
      {Array.isArray(SocialMediaData) &&
        SocialMediaData.map(
          (social: SocialMediaDataType): JSX.Element => (
            <SocialIcon
              key={social.label}
              url={social.url}
              rel="noreferrer"
              target="_blank"
              bgColor="transparent"
              fgColor={"var(--layout-color-util-1)"}
              network={social.label}
              className="hover:scale-125 delay-150"
              title={capitalizeFirstLetter(social.label)}
              style={{
                height: "55px",
                width: "55px",
                opacity: `${
                  hoveredItem && social.label !== hoveredItem ? 0.3 : 1
                }`,
              }}
              onMouseEnter={() => setHoveredItem(social.label)}
              onMouseLeave={() => setHoveredItem(undefined)}
            />
          )
        )}

      <VerticalBar itemHovered={hoveredItem} className="w-[3px] h-[150px]" />
    </motion.div>
  );
}

export default memo(LeftSection);
