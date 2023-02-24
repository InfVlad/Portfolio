"use client"

import { renderCanvas } from "@/components"
import { useEffect } from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const Hero = () => {
    useEffect(() => {
        renderCanvas()
    }, [])
    return (
        <div className="hero-section container mx-auto">
            <div className="hero-section flex min-h-[94vh] w-full flex-col items-center justify-center">
                <h1 className="mb-5 text-center text-5xl font-bold">Vladimir Infante</h1>
                <h3 className="mb-4 text-xl font-semibold">FullStack Developer</h3>
                <p className="text-center text-lg">I build great digital experiences using modern technologies</p>
                <div className="z-0 mt-6 text-center">
                    <ul className="mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4">
                        <li className="inline-block align-middle">
                            <a
                                href="https://github.com/InfVlad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-block h-10 w-10 overflow-hidden rounded border border-white border-opacity-10 text-center align-middle text-xl leading-none"
                            >
                                <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-primary-black text-primary-blue transition-all duration-500 group-hover:-translate-y-full">
                                    <FaGithub />
                                </span>
                                <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary-blue text-primary-black transition-all duration-500 group-hover:translate-y-0">
                                    <FaGithub />
                                </span>
                            </a>
                        </li>
                        <li className="inline-block align-middle">
                            <a
                                href="https://www.linkedin.com/in/vladimir-infante-347058263/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-body group relative inline-block h-10 w-10 overflow-hidden rounded border border-white border-opacity-10 text-center align-middle text-xl leading-none"
                            >
                                <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-primary-black text-primary-blue transition-all duration-500 group-hover:-translate-y-full">
                                    <FaLinkedinIn />
                                </span>
                                <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary-blue text-primary-black transition-all duration-500 group-hover:translate-y-0">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas" />
            </div>
        </div>
    )
}

export default Hero
