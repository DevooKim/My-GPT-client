import { IconArrowBarLeft, IconArrowBarRight } from "@tabler/icons-react";

interface Props {
    onClick(): void;
    side: "left" | "right";
}

const closeButtonXPosition = {
    right: "right-[270px]",
    left: "left-[270px]",
};

const openButtonXPosition = {
    right: "right-2",
    left: "left-2",
};
export const CloseButton = ({ side, onClick }: Props) => {
    return (
        <button
            className={`fixed top-4 ${closeButtonXPosition[side]} z-50 text-white`}
            onClick={onClick}
        >
            {side === "right" ? <IconArrowBarRight /> : <IconArrowBarLeft />}
        </button>
    );
};
export const OpenButton = ({ side, onClick }: Props) => {
    return (
        <button
            className={`fixed z-50 text-white top-4 ${openButtonXPosition[side]}`}
            onClick={onClick}
        >
            {side === "right" ? <IconArrowBarLeft /> : <IconArrowBarRight />}
        </button>
    );
};
