import { IconArrowBarLeft, IconArrowBarRight } from "@tabler/icons-react";

interface Props {
    onClick(): void;
    side: "left" | "right";
}

export const CloseButton = ({ side, onClick }: Props) => {
    return (
        <button
            className="fixed top-4 left-[270px] z-50 text-white"
            onClick={onClick}
        >
            {side === "right" ? <IconArrowBarRight /> : <IconArrowBarLeft />}
        </button>
    );
};
export const OpenButton = ({ side, onClick }: Props) => {
    return (
        <button
            className="fixed z-50 text-white top-4 left-2"
            onClick={onClick}
        >
            {side === "right" ? <IconArrowBarLeft /> : <IconArrowBarRight />}
        </button>
    );
};
