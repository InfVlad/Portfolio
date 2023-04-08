"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Loader } from "@/components";
import { motion } from "framer-motion";

interface FormValues {
    name: string;
    email: string;
    message: string;
}
interface ResponseMessage {
    message: string;
}

const Contact = () => {
    const [focused, setFocused] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const {
        handleSubmit,
        register,
        getValues,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const labelStyle = {
        active: "focus ",
        inactive: "",
    };

    const handleFocus = (inputField: string) => {
        setFocused(inputField);
    };
    const handleBlur = () => {
        setFocused("");
    };

    const isFocused = (inputField: "message" | "email" | "name") => {
        if (focused !== null) {
            return inputField === focused || getValues()[inputField] !== "" ? labelStyle.active : labelStyle.inactive;
        }
        return labelStyle.inactive;
    };

    const handleSendMessage: SubmitHandler<FormValues> = async (formData) => {
        try {
            setLoading(true);
            const response = await axios.post<ResponseMessage>("/message", formData);
            if (response.status !== 200) {
                setLoading(false);
                toast.error("Something went wrong, don't worry we already sent pandas to fix it");
            }
            setLoading(false);
            reset();
            toast.success("Email sent successfully!");
            setTimeout(() => toast.success(response.data.message), 1500);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <section className="contact-section scroll-mt-10" id="contact">
            <Toaster />
            <div className="contact-section container relative z-[3] mx-auto mb-20 pt-10 lg:pt-14">
                <div className="pointer-events-none absolute right-[-10%] top-[-10%] z-[0] h-60 w-60 rounded-full bg-secondary-purple opacity-40 blur-3xl md:right-[5%] lg:top-[-18%] lg:right-[-5%] lg:h-96 lg:w-96 xl:top-[-20%] xl:right-[-5%] xl:h-[30rem] xl:w-[30rem]" />
                <motion.div
                    initial={{ opacity: 0, translateY: 45 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="section-heading relative overflow-hidden pb-14 text-center"
                >
                    <h2 className="relative z-[3] mb-2 text-2xl uppercase lg:text-3xl">Contact</h2>
                    <span className="pointer-events-none absolute left-1/2 -top-1 z-[2] -translate-x-1/2 transform text-6xl font-bold uppercase text-white opacity-5 lg:text-7xl">
                        Contact
                    </span>
                </motion.div>
                <div className="form-container relative flex w-full items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, translateY: 45 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.55, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="form z-[3] grid h-fit w-full max-w-[410px] grid-cols-1 overflow-hidden rounded-lg border border-solid border-primary-blue mdl:h-[500px] mdl:max-w-[820px] mdl:grid-cols-2"
                    >
                        <div className="contact-info relative bg-primary-blue px-[2.2rem] py-[2.3rem] text-dark-blue">
                            <h3 className="title mb-3 text-xl font-semibold">Let&apos;s get in touch</h3>
                            <p className="text mt-6 font-medium">
                                I would love to hear from you. Whether It&apos;s a project, job opportunity or just a
                                chat. Feel free to contact me.
                            </p>
                            <p className="mt-6 text-lg font-semibold">Connect with me:</p>
                            <div className="z-[2] mt-6 text-left">
                                <ul className="mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4">
                                    <li className="inline-block align-middle">
                                        <a
                                            href="https://github.com/InfVlad"
                                            target="_blank"
                                            aria-label="checkout the github page for more information"
                                            rel="noopener noreferrer"
                                            className="group flex h-10 w-10 flex-wrap overflow-hidden rounded border border-dark-blue border-opacity-10 text-center text-xl"
                                        >
                                            <span className="flex h-full w-full items-center justify-center rounded bg-dark-blue text-primary-blue transition-all duration-500 group-hover:-translate-y-full">
                                                <FaGithub />
                                            </span>
                                            <span className="flex h-full w-full items-center justify-center rounded border-2 border-dark-blue bg-primary-blue text-dark-blue transition-all duration-500 group-hover:-translate-y-full">
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
                                            className="group flex h-10 w-10 flex-wrap overflow-hidden rounded border border-dark-blue border-opacity-10 text-center text-xl"
                                        >
                                            <span className="flex h-full w-full items-center justify-center rounded bg-dark-blue text-primary-blue transition-all duration-500 group-hover:-translate-y-full">
                                                <FaLinkedinIn />
                                            </span>
                                            <span className="flex h-full w-full items-center justify-center rounded border-2 border-dark-blue bg-primary-blue text-dark-blue transition-all duration-500 group-hover:-translate-y-full">
                                                <FaLinkedinIn />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <span className="z-32 absolute bottom-[-13px] right-[65px] h-[26px] w-[26px] rotate-45 bg-primary-blue mdl:top-[50px] mdl:right-[-13px] mdl:block" />
                        </div>
                        <div className="contact-form relative text-primary-blue">
                            <form
                                className="relative z-[4] overflow-hidden py-[2.3rem] px-[2.2rem]"
                                onSubmit={handleSubmit(handleSendMessage)}
                            >
                                <h3 className="title mb-5 text-xl font-semibold">Contact me</h3>
                                <div className={`${isFocused("name")}input-container relative mx-0 my-4`}>
                                    <input
                                        type="text"
                                        id="name"
                                        className="input w-full rounded-[25px] border-2 border-solid border-primary-blue bg-dark-blue px-[1.2rem] py-[0.6rem] text-base font-medium text-primary-blue outline-none transition-all duration-300"
                                        {...register("name", {
                                            required: "Please enter your Name",
                                        })}
                                        onFocus={() => handleFocus("name")}
                                        onBlur={handleBlur}
                                    />
                                    <label
                                        className="pointer-events-none absolute top-1/2 left-[15px] z-[8] -translate-y-1/2 py-0 px-[0.4rem] text-[0.9rem] font-normal text-primary-blue transition-all duration-500"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <span className="pointer-events-none absolute top-0 left-[25px] z-[6] -translate-y-1/2 px-[0.4rem] py-0 text-[0.8rem] text-transparent">
                                        Name
                                    </span>
                                    {errors?.name && <div className="text-red">{errors.name.message}</div>}
                                </div>
                                <div className={`${isFocused("email")}input-container relative mx-0 my-4`}>
                                    <input
                                        type="email"
                                        id="email"
                                        className="input w-full rounded-[25px] border-2 border-solid border-primary-blue bg-dark-blue px-[1.2rem] py-[0.6rem] text-base font-medium text-primary-blue outline-none transition-all duration-300"
                                        {...register("email", {
                                            required: "Please enter your Email",
                                            pattern: {
                                                value: /^[\w_.+-]+@([\w-]+\.)+[\w-]{2,4}$/,
                                                message: "Please enter a valid Email",
                                            },
                                        })}
                                        onFocus={() => handleFocus("email")}
                                        onBlur={handleBlur}
                                    />
                                    <label
                                        className="pointer-events-none absolute top-1/2 left-[15px] z-[8] -translate-y-1/2 py-0 px-[0.4rem] text-[0.9rem] font-normal text-primary-blue transition-all duration-500"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <span className="pointer-events-none absolute top-0 left-[25px] z-[6] -translate-y-1/2 px-[0.4rem] py-0 text-[0.8rem] text-transparent">
                                        Email
                                    </span>
                                    {errors?.email && <div className="text-red">{errors.email.message}</div>}
                                </div>
                                <div className={`${isFocused("message")}input-container textarea relative mx-0 my-4`}>
                                    <textarea
                                        id="message"
                                        className="input min-h-[150px] w-full resize-none overflow-y-auto rounded-[22px] border-2 border-solid border-primary-blue bg-dark-blue px-[1.2rem] py-[0.8rem] text-base font-medium text-primary-blue outline-none transition-all duration-300"
                                        {...register("message", {
                                            required: "Please enter a Message",
                                            minLength: { value: 4, message: "Write at least 4 characterss" },
                                        })}
                                        onFocus={() => handleFocus("message")}
                                        onBlur={handleBlur}
                                    />
                                    <label
                                        className="pointer-events-none absolute top-4 left-[15px] z-[8] translate-y-0 py-0 px-[0.4rem] text-[0.9rem] font-normal text-primary-blue transition-all duration-500"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                    <span className="pointer-events-none absolute top-0 left-[25px] z-[6] -translate-y-1/2 px-[0.4rem] py-0 text-[0.8rem] text-transparent">
                                        Message
                                    </span>
                                    {errors?.message && <div className="text-red">{errors.message.message}</div>}
                                </div>
                                <button
                                    type="submit"
                                    className="btn m-0 w-full cursor-pointer rounded-[25px] border-2 border-solid border-primary-blue bg-primary-blue px-[1.3rem] py-[0.6rem] text-base font-bold text-dark-blue outline-none transition-all duration-300 hover:bg-transparent hover:text-primary-blue"
                                >
                                    {loading ? <Loader /> : "Send"}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
