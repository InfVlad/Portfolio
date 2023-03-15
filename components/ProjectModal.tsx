"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { ProjectsInterface } from "@/utils/projectsData";
import { AiFillCloseCircle } from "react-icons/ai";

interface ModalProps extends Omit<ProjectsInterface, "id" | "description"> {
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const ProjectModal = ({
    title,
    imagesUrl,
    technologies,
    features,
    about,
    githubUrl,
    deploymentUrl,
    disclaimer,
    setShowModal,
}: ModalProps) => {
    const [imageIndex, setImageIndex] = useState<number>(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 z-[10] flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5">
            <div className="relative max-h-screen w-full max-w-[85vw] overflow-y-scroll rounded-[20px] bg-dark-blue py-12 px-2 text-center text-primary-blue md:px-8 md:py-[60px] md:px-[70px] lg:overflow-y-auto">
                <button
                    type="button"
                    className="absolute top-7 right-7 text-4xl text-red-400"
                    onClick={() => setShowModal((prev) => !prev)}
                >
                    <AiFillCloseCircle />
                </button>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="mt-4 flex h-full w-full flex-col items-center">
                        <div className="relative mb-6 h-96 w-[95%] overflow-hidden">
                            <Image
                                src={imagesUrl[imageIndex]}
                                alt="website miniature"
                                fill
                                className="h-96 w-[95%] rounded-xl"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {imagesUrl.map((image, index) => {
                                return (
                                    <Image
                                        key={index}
                                        src={image}
                                        width={60}
                                        height={60}
                                        style={{
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            borderRadius: "6px",
                                            minWidth: "60px",
                                            minHeight: "60px",
                                        }}
                                        onMouseEnter={() => setImageIndex(index)}
                                        alt="miniature of the web app"
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="max-h-[80vh] overflow-y-scroll px-1 sm:px-5">
                        <div className="mb-6 text-2xl font-bold">Project: {title}</div>
                        <div className="my-4 text-xl">Technologies</div>
                        <ul>
                            {technologies?.map((technology, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="m-1 inline-block rounded-2xl border-2 border-primary-blue px-2 py-1 text-white"
                                    >
                                        {technology}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="my-4 text-xl">Features</div>
                        <ul className="list-disc text-left">
                            {features?.map((feature, index) => {
                                return (
                                    <li key={index} className="py-1">
                                        {feature}
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="my-4 text-xl">About</div>
                        <div className="text-left">
                            {about?.map((text, index) => {
                                return (
                                    <p key={index} className="py-1">
                                        {text}
                                    </p>
                                );
                            })}
                        </div>
                        <div className="my-5 flex items-center justify-around">
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="w-1/3 cursor-pointer rounded-3xl border-2 border-primary-blue bg-primary-blue px-2 py-2 font-bold text-dark-blue transition-colors duration-300 hover:bg-dark-blue hover:text-primary-blue"
                            >
                                Code
                            </a>
                            <a
                                href={deploymentUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="w-1/3 cursor-pointer rounded-3xl border-2 border-primary-blue bg-primary-blue px-2 py-2 font-bold text-dark-blue transition-colors duration-300 hover:bg-dark-blue hover:text-primary-blue"
                            >
                                Demo
                            </a>
                        </div>
                        <div className="text-red-400">{disclaimer}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
