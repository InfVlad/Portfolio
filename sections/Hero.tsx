"use client";

import { renderCanvas } from "@/components";
import { useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
    useEffect(() => {
        renderCanvas();
    }, []);
    return (
        <div className="section-hero" id="Home">
            <div className="hero-section container mx-auto mb-20">
                <div className="hero-section relative z-[3] flex min-h-screen w-full flex-col items-center justify-center">
                    <div className="relative">
                        <div className="pointer-events-none absolute right-0 top-[-7rem] z-[1] h-56 w-56 bg-primary-purple opacity-50 blur-3xl"></div>
                    </div>
                    <h1 className="z-[2] mb-5 text-center text-5xl font-bold">Vladimir Infante</h1>
                    <h3 className="z-[2] mb-4 text-xl font-semibold">FullStack Developer</h3>
                    <p className="z-[2] text-center text-lg">
                        I build great digital experiences using modern technologies
                    </p>
                    <div className="relative">
                        <div className="pointer-events-none absolute left-0 top-[-1rem] z-[1] h-56 w-56 bg-secondary-blue opacity-50 blur-3xl"></div>
                    </div>
                    <div className="z-[2] mt-6 text-center">
                        <ul className="mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4">
                            <li className="inline-block align-middle">
                                <a
                                    href="https://github.com/InfVlad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex h-10 w-10 flex-wrap overflow-hidden rounded border border-white border-opacity-10 text-center text-xl"
                                >
                                    <span className="flex h-full w-full items-center justify-center rounded bg-primary-black text-primary-blue transition-all duration-500 group-hover:-translate-y-full">
                                        <FaGithub />
                                    </span>
                                    <span className="flex h-full w-full items-center justify-center rounded bg-primary-blue text-primary-black transition-all duration-500 group-hover:-translate-y-full">
                                        <FaGithub />
                                    </span>
                                </a>
                            </li>
                            <li className="inline-block align-middle">
                                <a
                                    href="https://www.linkedin.com/in/vladimir-infante-347058263/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex h-10 w-10 flex-wrap overflow-hidden rounded border border-white border-opacity-10 text-center text-xl"
                                >
                                    <span className="flex h-full w-full items-center justify-center rounded bg-primary-black text-primary-blue transition-all duration-500 group-hover:-translate-y-full">
                                        <FaLinkedinIn />
                                    </span>
                                    <span className="flex h-full w-full items-center justify-center rounded bg-primary-blue text-primary-black transition-all duration-500 group-hover:-translate-y-full">
                                        <FaLinkedinIn />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <canvas className="pointer-events-none absolute inset-1" id="canvas" />
            </div>
        </div>
    );
};

export default Hero;
