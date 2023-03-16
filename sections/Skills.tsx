"use client";

import skillsList from "@/utils/skillsData";
import { SkillCard } from "@/components";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div className="section-skills scroll-mt-10" id="skills">
            <div className="section-skills container relative z-[3] mx-auto mb-20 pt-10 lg:pt-14">
                <div className="pointer-events-none absolute left-[-10%] top-[4%] z-[1] h-60 w-60 rounded-full bg-secondary-blue opacity-40 blur-3xl md:left-[10%] lg:top-[-26%] lg:left-[-5%] lg:h-96 lg:w-96 xl:top-[-35%] xl:left-[-5%] xl:h-[25rem] xl:w-[25rem]" />
                <motion.div
                    initial={{ opacity: 0, translateY: 45 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="section-heading relative z-[4] overflow-hidden pb-14 text-center"
                >
                    <h2 className="relative z-[3] mb-2 text-2xl uppercase lg:text-3xl">Skills</h2>
                    <span className="pointer-events-none absolute left-1/2 -top-1 z-0 -translate-x-1/2 transform text-6xl font-bold uppercase text-white opacity-5 lg:text-7xl">
                        Skills
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 45 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.55, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="skills-wrapper z-[4] flex flex-wrap items-center justify-center gap-4 p-10 lg:max-w-[1200px]"
                >
                    {skillsList.map((skill) => {
                        return <SkillCard name={skill.name} logo={skill.logo} key={skill.name} />;
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
