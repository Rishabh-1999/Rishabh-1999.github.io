/**
 * Owner: Rishabh Anand
 * Desc: Global Components - Left hovering - Social media icons
 **/

import { memo } from "react";

/* Animation Libaray */
import { motion } from "framer-motion";

/* React Social Icons */
import { SocialIcon } from "react-social-icons";

/* Data */
import { SocialMediaData, SocialMediaDataType } from "data";

function LeftSection(): JSX.Element {
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0.5,
        scale: 0.9,
      }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{
        once: true,
      }}
      className="fixed hidden xl:left-4 lg:left-2 bottom-0 lg:flex flex-col items-center"
    >
      {Array.isArray(SocialMediaData) &&
        SocialMediaData.map((social: SocialMediaDataType) => (
          <SocialIcon
            key={social.label}
            url={social.url}
            rel="noreferrer"
            target="_blank"
            bgColor="transparent"
            fgColor={"var(--layout-color-util-1)"}
            network={social.label}
            className="hover:scale-110 delay-200"
            title={social.label}
            style={{
              height: "55px",
              width: "55px",
            }}
          />
        ))}

      <div className="w-[3px] h-[150px] bg-[var(--layout-color-util-1)]"></div>
    </motion.div>
  );
}

export default memo(LeftSection);
