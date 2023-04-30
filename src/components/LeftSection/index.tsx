/**
 * Owner: Rishabh Anand
 * Desc: Left hovering section - Social media icons
 **/

import React from "react";

/* Animations */
import { motion } from "framer-motion";

/* React Social Icons */
import { SocialIcon } from "react-social-icons";

/* Data */
import { socialMediaData } from "data";

/* Types */
import { SocialMediaType } from "types";

function LeftSection() {
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
      className="fixed bottom-0 xl:left-4 lg:left-2 lg:flex hidden flex-col items-center"
    >
      {Array.isArray(socialMediaData) &&
        socialMediaData.map((social: SocialMediaType) => (
          <SocialIcon
            key={social.iconLabel}
            url={social.url}
            rel="noreferrer"
            target="_blank"
            bgColor="transparent"
            fgColor={"var(--layout-color-util-1)"}
            network={social.iconLabel}
            className="hover:scale-110 delay-100"
            title={social.iconLabel}
            style={{
              height: "55px",
              width: "55px",
            }}
          />
        ))}

      <div className="h-[150px] w-[3px] bg-[var(--layout-color-util-1)]"></div>
    </motion.div>
  );
}

export default React.memo(LeftSection);
