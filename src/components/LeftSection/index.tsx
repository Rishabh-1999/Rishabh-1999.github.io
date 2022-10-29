import React from "react";

import { motion } from "framer-motion";

/* React Social Icons */
import { SocialIcon } from "react-social-icons";

/* Data */
import { socialData, SocialType } from "data/social";

function LeftSection() {
    return (
        <motion.div
            initial={{
                x: -100,
                opacity: 0.5,
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-0 left-9 flex flex-col items-center"
        >
            {Array.isArray(socialData) &&
                socialData.map((social: SocialType) => (
                    <SocialIcon
                        key={social.label}
                        url={social.url}
                        rel="noreferrer"
                        target="_blank"
                        bgColor="transparent"
                        fgColor={"#dadada"}
                        network={social.iconName ?? social.label}
                        label={social.label}
                    />
                ))}

            <div className="h-[150px] w-[2px] bg-primaryColor"></div>
        </motion.div>
    );
}

export default LeftSection;
