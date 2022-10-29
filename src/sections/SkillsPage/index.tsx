import React from "react";

/* Animation */
import { motion } from "framer-motion";

/* Components */
import Heading from "components/Heading";

/* Data */
import { skills, SkillsType } from "data/skills";
import { imagesMapping } from "data/imagesMapping";

function SkillsPage() {
    const SkillsComponents = React.useMemo(() => {
        return skills.map((skill: SkillsType) => {
            const imageComponent = imagesMapping[skill.name];
            if (imageComponent) {
                return (
                    <div
                        key={skill.name}
                        className="p-2 w-[90px] h-[90px] delay-1000 bg-slate-600 rounded-full flex justify-center items-center group"
                    >
                        <div className="group-hover:hidden flex justify-center items-center">
                            <img
                                src={imageComponent}
                                alt={skill.name}
                                className="w-[60%] h-[60%] object-cover"
                            />
                        </div>
                        <div className="hidden cursor-none group-hover:flex justify-end flex-col items-center">
                            <span className="text-[0.95rem] font-bold text-zinc-200">
                                {skill.name}
                            </span>
                            <span className="text-sm">{skill.rating}%</span>
                        </div>
                    </div>
                );
            } else return undefined;
        });
    }, [skills]);

    const totalSkillsComponent = SkillsComponents.length;

    console.log(totalSkillsComponent);

    return (
        <section id="skills_page" className="flex flex-col items-center">
            <Heading heading="Skills" subHeading="Tech I work On" />

            <div className="max-w-4xl">
                <motion.div
                    initial={{
                        x: -800,
                        opacity: 0.5,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{ duration: 0.75 }}
                    className="mb-5 grid grid-cols-5 gap-4"
                >
                    {SkillsComponents.slice(0, totalSkillsComponent / 2)}
                </motion.div>
                <motion.div
                    initial={{
                        x: 800,
                        opacity: 0.5,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{ duration: 0.75 }}
                    className="grid grid-cols-5 gap-4"
                >
                    {SkillsComponents.slice(
                        totalSkillsComponent / 2,
                        totalSkillsComponent
                    )}
                </motion.div>
            </div>
        </section>
    );
}

export default SkillsPage;
