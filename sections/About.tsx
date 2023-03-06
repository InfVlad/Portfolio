import Image from "next/image";

const About = () => {
    return (
        <div className="section-about scroll-mt-10" id="about">
            <div className="section-about container mx-auto mb-20 pt-10 lg:pt-14">
                <div className="section-heading relative overflow-hidden pb-14 text-center">
                    <h2 className="relative z-[3] mb-2 text-2xl uppercase lg:text-3xl">About</h2>
                    <span className="pointer-events-none absolute left-1/2 -top-1 z-0 -translate-x-1/2 transform text-6xl font-bold uppercase text-white opacity-5 lg:text-7xl">
                        About
                    </span>
                </div>
                <div className="mx-auto grid max-w-[90vw] grid-cols-2 items-center gap-7">
                    <div className="col-span-2 items-center lg:col-span-1">
                        <div className="flex h-full w-full items-center justify-center">
                            <Image src="/assets/about-image.svg" width={400} height={400} alt="man in desk" />
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex max-w-[90vw] flex-col items-start justify-center">
                            <h4 className="mb-6 text-xl font-semibold lg:text-2xl">Hi there!</h4>
                            <p className="text-md select-text pt-3 lg:text-xl">
                                My name is Vladimir Infante. I am a self-taught full-stack developer from Venezuela. I
                                am passionate about technology, facing challenges, and learning new things. I deliver
                                applications with good performance and engaging UI that make your experience an
                                unforgettable memory.
                            </p>
                            <p className="pt-3 text-xl">
                                If you have a project idea or are interested in working with me,
                            </p>
                            <a href="#contact" className="text-xl text-primary-blue">
                                {" "}
                                contact me!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
