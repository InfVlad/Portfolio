"use client";

import Image from "next/image";
import { ProjectsInterface } from "@/utils/projectsData";
import { FaEye } from "react-icons/fa";

type ProjectCardProps = Pick<ProjectsInterface, "title" | "description" | "imagesUrl" | "id">;

const backgroundDecoration = {
    purple: "pointer-events-none absolute right-0 top-[-7rem] z-[1] h-56 w-56 bg-secondary-purple opacity-50 blur-3xl",
    blue: "pointer-events-none absolute left-0 top-[-7rem] z-[1] h-56 w-56 bg-secondary-blue opacity-50 blur-3xl",
};

const ProjectCard = ({ title, imagesUrl, description, id }: ProjectCardProps) => {
    return (
        <div className="relative my-6 min-h-[500px]">
            <div className="relative">
                <div className={id % 2 === 0 ? backgroundDecoration.purple : backgroundDecoration.blue} />
            </div>
            <div className="card group relative z-[3] my-10 h-36 w-80 rounded-xl bg-white bg-opacity-10 shadow-2xl backdrop-blur backdrop-filter transition-all duration-500 hover:h-[400px] active:h-[400px]">
                <div className="imagebox absolute left-1/2 top-[-5rem] z-[2] h-40 w-40 -translate-x-1/2 overflow-hidden rounded-xl bg-dark-blue shadow-2xl transition-all duration-500 group-hover:h-60 group-hover:w-60 group-active:h-60 group-active:w-60">
                    <Image
                        src={imagesUrl[0]}
                        alt={`${title}`}
                        fill
                        // className="absolute top-0 left-0 object-cover w-full h-full"
                        style={{ objectFit: "cover", position: "absolute", top: "0", left: "0" }}
                    />
                </div>
                <div className="content absolute flex h-full w-full items-end justify-center overflow-hidden">
                    <div className="details flex translate-y-36 flex-col items-center justify-center p-4 transition-all duration-500 group-hover:translate-y-0 group-active:translate-y-0">
                        <h3 className="mb-4 text-center text-2xl font-bold text-primary-blue">{title}</h3>
                        <p className="max-w-[85%] text-center text-white">{description}</p>
                        <button
                            type="button"
                            className="my-4 flex items-center justify-center gap-1 rounded-xl bg-primary-blue p-4 py-2 text-xl font-semibold text-dark-blue transition-all duration-500 hover:shadow-md hover:shadow-primary-blue"
                            onClick={() => console.log(id)}
                        >
                            <FaEye />
                            View Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
//
