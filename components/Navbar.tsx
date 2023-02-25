"use client"

import { AnimatePresence, motion, useCycle } from "framer-motion"
// import Image from "next/image"

const Navbar = () => {
    const [open, cycleOpen] = useCycle(false, true)
    const menuItemVariants = {
        closed: {
            opacity: 0,
        },
        open: {
            opacity: 1,
        },
    }
    const menuSideVariants = {
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
    }

    return (
        <header className="relative z-[5]">
            <nav className="fixed w-full h-16 mx-auto text-white bg-primary-black bg-opacity-80 backdrop-blur backdrop-filter">
                <div className="flex items-center justify-between w-5/6 py-6 mx-auto ">
                    <a href="#Home" className="text-primary-blue">
                        VI
                    </a>
                    <div className="flex items-center">
                        <motion.div
                            className={`z-10 flex h-5 w-6 cursor-pointer flex-col items-center justify-between md:hidden${
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
                                variants={menuSideVariants}
                                className="text-xl text-center"
                            >
                                <motion.li key={1} variants={menuItemVariants} className="py-3 cursor-pointer">
                                    <a
                                        href="#Home"
                                        className="relative no-underline after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-primary-blue after:duration-[0.35s] after:ease-in-out after:content-[''] hover:after:w-full"
                                    >
                                        Home
                                    </a>
                                </motion.li>
                                <motion.li key={2} variants={menuItemVariants} className="py-3 cursor-pointer">
                                    <a
                                        href="#Projects"
                                        className="relative no-underline after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-primary-blue after:duration-[0.35s] after:ease-in-out after:content-[''] hover:after:w-full"
                                    >
                                        Projects
                                    </a>
                                </motion.li>
                                <motion.li key={3} variants={menuItemVariants} className="py-3 cursor-pointer">
                                    <a
                                        href="#About"
                                        className="relative no-underline after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-primary-blue after:duration-[0.35s] after:ease-in-out after:content-[''] hover:after:w-full"
                                    >
                                        About
                                    </a>
                                </motion.li>
                                <motion.li key={4} variants={menuItemVariants} className="py-3 cursor-pointer">
                                    <a
                                        href="#Contact"
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
    )
}

export default Navbar
