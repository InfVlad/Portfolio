import Image from "next/image";

interface SkillCardProps {
    name: string;
    logo: string;
}
const SkillCard = ({ name, logo }: SkillCardProps) => {
    return (
        <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 p-4">
            {/* <div  w-[115px] h-[115px]"> */}
            {/* <img src={logo} alt={name} className="w-10 h-10" /> */}
            <Image src={logo} width={140} className="rounded-md bg-white" height={140} alt={name} />
            <p className="text-md font-medium text-white">{name}</p>
        </div>
    );
};

export default SkillCard;
