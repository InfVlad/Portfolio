"use client";

import { renderCanvas } from "@/components";
import { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// all this just to run renderCanvas on the second render, no the first (hydratation conflict)
const useDidMountEffect = (func: any, deps: any) => {
    const didMount = useRef(false);
    useEffect(() => {
        if (didMount.current) {
            func();
        } else {
            didMount.current = true;
        }
    }, deps);
};

const Hero = () => {
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        setLoaded(true);
    }, []);

    useDidMountEffect(renderCanvas, [loaded]);

    return (
        <div className="section-hero" id="Home">
            <div className="section-hero container mx-auto mb-20">
                <div className="section-hero relative z-[3] flex min-h-screen w-full flex-col items-center justify-center">
                    <div className="relative">
                        <div className="lg:h-6w-60 pointer-events-none absolute right-0 top-[-7rem] z-[1] h-56 w-56 bg-secondary-purple opacity-50 blur-3xl lg:top-[-13rem] lg:right-[13rem] lg:w-60" />
                    </div>
                    <h1 className="z-[2] mb-5 text-center text-5xl font-bold lg:text-7xl">Vladimir Infante</h1>
                    <h3 className="z-[2] mb-4 text-xl font-semibold lg:text-2xl">FullStack Developer</h3>
                    <p className="z-[2] text-center text-lg">
                        I build great digital experiences using modern technologies
                    </p>
                    <div className="relative">
                        <div className="lg:h-6w-60 pointer-events-none absolute left-0 top-[-1rem] z-[1] h-56 w-56 bg-secondary-blue opacity-50 blur-3xl lg:top-[1rem] lg:left-[12rem] lg:w-60" />
                    </div>
                    <div className="z-[2] mt-6 text-center">
                        <ul className="mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4">
                            <li className="inline-block align-middle">
                                <a
                                    href="https://github.com/InfVlad"
                                    target="_blank"
                                    aria-label="checkout the github page for more information"
                                    rel="noopener noreferrer"
                                    className="group flex h-10 w-10 flex-wrap overflow-hidden rounded border border-white border-opacity-10 text-center text-xl"
                                >
                                    <span className="flex h-full w-full items-center justify-center rounded bg-dark-blue text-primary-blue transition-all duration-500 group-hover:-translate-y-full">
                                        <FaGithub />
                                    </span>
                                    <span className="flex h-full w-full items-center justify-center rounded bg-primary-blue text-dark-blue transition-all duration-500 group-hover:-translate-y-full">
                                        <FaGithub />
                                    </span>
                                </a>
                            </li>
                            <li className="inline-block align-middle">
                                <a
                                    href="https://www.linkedin.com/in/vladimir-infante-347058263/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="checkout the linkedin profile for more information"
                                    className="group flex h-10 w-10 flex-wrap overflow-hidden rounded border border-white border-opacity-10 text-center text-xl"
                                >
                                    <span className="flex h-full w-full items-center justify-center rounded bg-dark-blue text-primary-blue transition-all duration-500 group-hover:-translate-y-full">
                                        <FaLinkedinIn />
                                    </span>
                                    <span className="flex h-full w-full items-center justify-center rounded bg-primary-blue text-dark-blue transition-all duration-500 group-hover:-translate-y-full">
                                        <FaLinkedinIn />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {loaded && <canvas className="pointer-events-none absolute inset-1" id="canvas" />}
            </div>
        </div>
    );
};

export default Hero;
