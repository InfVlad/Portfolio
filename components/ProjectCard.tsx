import Image from "next/image"

interface ProjectCardProps {
    title: string
    imageUrl: string
}

const ProjectCard = ({ title, imageUrl }: ProjectCardProps) => {
    return (
        <div>
            <div>{title}</div>
            <div>
                <Image src={imageUrl} alt={`${title} sample`} width={56} height={56} />
            </div>
        </div>
    )
}

export default ProjectCard
