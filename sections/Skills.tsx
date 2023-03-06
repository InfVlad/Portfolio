import skillsList from "@/utils/skillsData";
import { SkillCard } from "@/components";

const Skills = () => {
    return (
        <div className="section-skills scroll-mt-10" id="skills">
            <div className="hero-section container mx-auto mb-20 pt-10 lg:pt-14">
                <div className="section-heading relative overflow-hidden pb-14 text-center">
                    <h2 className="relative z-[3] mb-2 text-2xl uppercase lg:text-3xl">Skills</h2>
                    <span className="pointer-events-none absolute left-1/2 -top-1 z-0 -translate-x-1/2 transform text-6xl font-bold uppercase text-white opacity-5 lg:text-7xl">
                        Skills
                    </span>
                </div>
                <div className="skills-wraper flex flex-wrap items-center justify-center gap-4 p-10 lg:max-w-[1200px]">
                    {skillsList.map((skill) => {
                        return <SkillCard name={skill.name} logo={skill.logo} key={skill.name} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
