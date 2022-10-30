import React from "react";

/* Animation */
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
            viewport={{
                once: true,
            }}
            className="fixed bottom-0 xl:left-9 lg:left-2 lg:flex hidden flex-col items-center"
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
                        className="hover:scale-110 delay-100"
                        label={social.label}
                    />
                ))}

            <div className="h-[150px] w-[2px] bg-primaryColor"></div>
        </motion.div>
    );
}

export default LeftSection;
