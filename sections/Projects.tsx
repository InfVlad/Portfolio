"use client";

import { useState } from "react";
import { projectsList } from "@/utils/projectsData";
import { ProjectCard } from "@/components";
import dynamic from "next/dynamic";

const ProjectModal = dynamic(() => import("@/components/ProjectModal"));

const Projects = () => {
    const [projectIndex, setProjectIndex] = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleOpenProject = (newIndex: number) => {
        setProjectIndex(newIndex);
        setShowModal((prev) => !prev);
    };

    return (
        <div className="section-projects scroll-mt-10" id="projects">
            <div className="hero-section container mx-auto pt-10 lg:pt-14">
                <div className="section-heading relative mb-14 overflow-hidden pb-14 text-center">
                    <h2 className="relative z-[3] mb-2 text-2xl uppercase lg:text-3xl">Projects</h2>
                    <span className="pointer-events-none absolute left-1/2 -top-1 z-0 -translate-x-1/2 transform text-6xl font-bold uppercase text-white opacity-5 lg:text-7xl">
                        Projects
                    </span>
                </div>
                <div className="projects-wrapper flex flex-wrap items-center justify-center sm:justify-evenly">
                    {projectsList.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                imagesUrl={project.imagesUrl}
                                id={project.id}
                                description={project.description}
                                handleOpenProject={handleOpenProject}
                            />
                        );
                    })}
                </div>
                {showModal && (
                    <ProjectModal
                        title={projectsList[projectIndex].title}
                        about={projectsList[projectIndex].about}
                        deploymentUrl={projectsList[projectIndex].deploymentUrl}
                        features={projectsList[projectIndex].features}
                        disclaimer={projectsList[projectIndex].disclaimer}
                        githubUrl={projectsList[projectIndex].githubUrl}
                        imagesUrl={projectsList[projectIndex].imagesUrl}
                        technologies={projectsList[projectIndex].technologies}
                        setShowModal={setShowModal}
                    />
                )}
            </div>
        </div>
    );
};

export default Projects;
