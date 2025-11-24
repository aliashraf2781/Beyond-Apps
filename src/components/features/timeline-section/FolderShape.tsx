import { IconType } from "react-icons";

export default function FolderShape({
    header,
    description,
    Icon,
}: {
    header: string;
    description: string;
    Icon?: IconType;
}) {
    return (
        <div className="folder  bg-blue-500 text-white hover:scale-105 p-6 shadow flex flex-col justify-between">
            {Icon && <Icon className="text-5xl mb-4" />}
            <h4 className="text-3xl font-semibold mb-5">{header}</h4>
            <p className="opacity-90 leading-relaxed">{description}</p>
        </div>
    );
}
