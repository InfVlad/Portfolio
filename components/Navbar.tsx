"use client";

import { useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
// import Image from "next/image"

const Navbar = () => {
    const [open, cycleOpen] = useCycle(false, true);
    const [selected, setSelected] = useState("home");

    const navButtonsStyles = {
        active: "active text-dark-blue ",
        inactive: "text-primary-blue ",
    };

    const handleMouseOver = (section: string) => {
        setSelected(section);
    };
    const isActive = (section: string) => {
        return selected === section ? navButtonsStyles.active : navButtonsStyles.inactive;
    };

    const mobileMenuItemVariants = {
        closed: {
            opacity: 0,
        },
        open: {
            opacity: 1,
        },
    };
    const mobileMenuSideVariants = {
        closed: {
            transition: {
                staggerChildren: 0.15,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                staggerChildren: 0.25,
                staggerDirection: 1,
            },
        },
    };

    return (
        <header className="relative z-[5]">
            <nav className="fixed mx-auto h-16 w-full bg-dark-blue bg-opacity-80 text-white backdrop-blur backdrop-filter">
                <div className="mx-auto flex w-5/6 items-center justify-between py-6 lg:max-w-[1250px] ">
                    <motion.a
                        initial={{ translateY: -15, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{ duration: 0.15 }}
                        href="#Home"
                    >
                        <img src="/icon.svg" alt="site's icon" />
                    </motion.a>
                    <div className="mobile-hamburger flex items-center md:hidden">
                        <motion.div
                            className={`z-10 flex h-5 w-6 cursor-pointer flex-col items-center justify-between${
                                open ? " active" : ""
                            }`}
                            onTap={() => cycleOpen()}
                        >
                            <span
                                className={`block h-1 w-full origin-[0%_0%] rounded-lg bg-primary-blue transition-transform duration-[0.4s] ease-in-out${
                                    open ? " rotate-45" : ""
                                }`}
                            />
                            <span
                                className={`block h-1 w-full rounded-lg bg-primary-blue transition-transform duration-[0.2s] ease-in-out${
                                    open ? " scale-y-0" : ""
                                }`}
                            />
                            <span
                                className={`block  h-1 w-full origin-[0%_100%] rounded-lg bg-primary-blue transition-transform duration-[0.4s] ease-in-out${
                                    open ? " -rotate-45" : ""
                                }`}
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ translateY: -15, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{ duration: 0.15, delay: 0.15, ease: "easeInOut" }}
                        className="desktop-navigation relative hidden w-[450px] md:block"
                    >
                        <ul className="flex">
                            <li
                                onMouseOver={() => handleMouseOver("home")}
                                onFocus={() => handleMouseOver("home")}
                                className={`${isActive(
                                    "home"
                                )}list relative z-[3] h-[30px] w-[90px] list-none transition-all duration-500`}
                            >
                                <a href="#Home" className="relative flex items-center justify-center text-center">
                                    <span className="text text-xl font-medium">Home</span>
                                </a>
                            </li>

                            <li
                                onMouseOver={() => handleMouseOver("projects")}
                                onFocus={() => handleMouseOver("projects")}
                                className={`${isActive(
                                    "projects"
                                )}list relative z-[3] h-[30px] w-[90px] list-none transition-all duration-500`}
                            >
                                <a href="#projects" className="relative flex items-center justify-center text-center">
                                    <span className="text text-xl font-medium">Projects</span>
                                </a>
                            </li>
                            <li
                                onMouseOver={() => handleMouseOver("about")}
                                onFocus={() => handleMouseOver("about")}
                                className={`${isActive(
                                    "about"
                                )}list relative z-[3] h-[30px] w-[90px] list-none transition-all duration-500`}
                            >
                                <a href="#about" className="relative flex items-center justify-center text-center">
                                    <span className="text text-xl font-medium">About</span>
                                </a>
                            </li>
                            <li
                                onMouseOver={() => handleMouseOver("skills")}
                                onFocus={() => handleMouseOver("skills")}
                                className={`${isActive(
                                    "skills"
                                )}list relative z-[3] h-[30px] w-[90px] list-none transition-all duration-500`}
                            >
                                <a href="#skills" className="relative flex items-center justify-center text-center">
                                    <span className="text text-xl font-medium">Skills</span>
                                </a>
                            </li>
                            <li
                                onMouseOver={() => handleMouseOver("contact")}
                                onFocus={() => handleMouseOver("contact")}
                                className={`${isActive(
                                    "contact"
                                )}list relative z-[3] h-[30px] w-[90px] list-none transition-all duration-500`}
                            >
                                <a href="#contact" className="relative flex items-center justify-center text-center">
                                    <span className="text text-xl font-medium">Contact</span>
                                </a>
                            </li>
                            <li
                                aria-label="this element for background animation"
                                className="indicator absolute left-0 z-[2] h-[30px] w-[90px] rounded-lg transition-all duration-500"
                            />
                        </ul>
                    </motion.div>
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{
                                width: "100vw",
                            }}
                            transition={{ duration: 0.35 }}
                            exit={{
                                width: 0,
                                transition: { delay: 0.7, duration: 0.3 },
                            }}
                            className="fixed top-0 left-0 z-[6] flex h-screen w-screen flex-col items-center justify-center bg-slate-800"
                        >
                            <motion.ul
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={mobileMenuSideVariants}
                                className="text-center text-xl"
                            >
                                <motion.li
                                    key={1}
                                    variants={mobileMenuItemVariants}
                                    className="cursor-pointer py-3"
                                    onTap={() => cycleOpen()}
                                >
                                    <a
                                        href="#Home"
                                        className="relative no-underline after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-primary-blue after:duration-[0.35s] after:ease-in-out after:content-[''] hover:after:w-full"
                                    >
                                        Home
                                    </a>
                                </motion.li>
                                <motion.li
                                    key={2}
                                    variants={mobileMenuItemVariants}
                                    className="cursor-pointer py-3"
                                    onTap={() => cycleOpen()}
                                >
                                    <a
                                        href="#projects"
                                        className="relative no-underline after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-primary-blue after:duration-[0.35s] after:ease-in-out after:content-[''] hover:after:w-full"
                                    >
                                        Projects
                                    </a>
                                </motion.li>
                                <motion.li
                                    key={3}
                                    variants={mobileMenuItemVariants}
                                    className="cursor-pointer py-3"
                                    onTap={() => cycleOpen()}
                                >
                                    <a
                                        href="#about"
                                        className="relative no-underline after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-primary-blue after:duration-[0.35s] after:ease-in-out after:content-[''] hover:after:w-full"
                                    >
                                        About
                                    </a>
                                </motion.li>
                                <motion.li
                                    key={4}
                                    variants={mobileMenuItemVariants}
                                    className="cursor-pointer py-3"
                                    onTap={() => cycleOpen()}
                                >
                                    <a
                                        href="#skills"
                                        className="relative no-underline after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-primary-blue after:duration-[0.35s] after:ease-in-out after:content-[''] hover:after:w-full"
                                    >
                                        Skills
                                    </a>
                                </motion.li>
                                <motion.li
                                    key={5}
                                    variants={mobileMenuItemVariants}
                                    className="cursor-pointer py-3"
                                    onTap={() => cycleOpen()}
                                >
                                    <a
                                        href="#contact"
                                        className="relative no-underline after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-primary-blue after:duration-[0.35s] after:ease-in-out after:content-[''] hover:after:w-full"
                                    >
                                        Contact
                                    </a>
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;
