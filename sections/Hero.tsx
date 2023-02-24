"use client"

import Image from "next/image"

const Hero = () => {
    return (
        <div className="hero-section container mx-auto">
            <div className="hero-section flex min-h-[90vh] w-full flex-col items-center justify-center">
                <h1 className="mb-5">Vladimir Infante</h1>
                <p>FullStack Developer</p>
                <p>I do stuff for stuff</p>
                <div className="h-4 w-4">
                    <Image src="/assets/react.svg" width={16} height={16} alt="react" />
                </div>
            </div>
        </div>
    )
}

export default Hero
