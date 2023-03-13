"use client";

import { ProjectsInterface } from "@/utils/projectsData";
import { Dispatch, SetStateAction, useState } from "react";

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
    return (
        <div className="fixed top-0 left-0 z-[10] flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5">
            <div className="max-h-screen w-full max-w-[85vw] overflow-y-scroll rounded-[20px] bg-dark-blue py-12 px-8 text-center text-primary-blue md:py-[60px] md:px-[70px]">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="mt-4 flex h-full w-full flex-col items-center">
                        <div className="mb-6 h-96 w-[95%] overflow-hidden">
                            <img
                                src={imagesUrl[imageIndex]}
                                alt="something"
                                className="h-96 w-[95%] rounded-xl object-contain"
                            />
                        </div>
                        <div className="flex gap-4">
                            {imagesUrl.map((image, index) => {
                                return (
                                    <img
                                        key={index}
                                        src={image}
                                        className="h-14 w-14 cursor-pointer rounded-md"
                                        onMouseEnter={() => setImageIndex(index)}
                                        alt="miniature of the web app"
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="max-h-[80vh] overflow-y-scroll px-5">
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
                                className="cursor-pointer rounded-3xl border-2 border-primary-blue bg-primary-blue px-2 py-1 font-bold text-dark-blue transition-colors duration-300 hover:bg-dark-blue hover:text-primary-blue"
                            >
                                Code
                            </a>
                            <a
                                href={deploymentUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer rounded-3xl border-2 border-primary-blue bg-primary-blue px-2 py-1 font-bold text-dark-blue transition-colors duration-300 hover:bg-dark-blue hover:text-primary-blue"
                            >
                                Demo
                            </a>
                        </div>
                        <div className="text-red-400">{disclaimer}</div>
                        <button
                            type="button"
                            className="rounded-xl bg-primary-blue font-bold text-dark-blue"
                            onClick={() => setShowModal((prev) => !prev)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;

/*

const { image, name, details, price } = product;
	const [index, setIndex] = useState(0);
	const { decQty, incQty, qty, onAdd, setQty, setShowCart } = useStateContext();



	return (
		<div>
			<div className="product-detail-container">
				<div>
					<div className="image-container">
						<img
							src={urlFor(image && image[index])}
							alt=""
							className="product-detail-image"
						/>
					</div>
					<div className="small-images-container">
						{image?.map((item, i) => (
							<img
								key={i}
								src={urlFor(item)}
								className={
									i === index ? "small-image selected-image" : "small-image"
								}
								onMouseEnter={() => setIndex(i)}
							/>
						))}
					</div>
				</div>


*/
