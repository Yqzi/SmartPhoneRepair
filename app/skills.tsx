import { Stars } from "@/assets/icons";

export function Skill({
    title,
    desc,
    icon,
}: {
    title: string;
    desc: string;
    icon: JSX.Element;
}) {
    return (
        <div className="flex gap-7">
            {icon}
            <div className="flex flex-col gap-4">
                <p className="text-xl font-bold">{title}</p>
                <p className="text-lg max-w-[308px]">{desc}</p>
            </div>
        </div>
    );
}
