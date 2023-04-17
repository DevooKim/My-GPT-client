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
        <div>
            <button
                className={`fixed top-1.5 h-7 w-7 ${closeButtonXPosition[side]} z-50 text-white max-sm:hidden`}
                onClick={onClick}
            >
                {side === "right" ? (
                    <IconArrowBarRight />
                ) : (
                    <IconArrowBarLeft />
                )}
            </button>
            <div
                className="fixed top-0 left-0 z-10 w-full h-full bg-black opacity-70 sm:hidden"
                onClick={onClick}
            ></div>
        </div>
    );
};
export const OpenButton = ({ side, onClick }: Props) => {
    return (
        <button
            className={`fixed z-50 text-white top-1.5 h-7 w-7 ${openButtonXPosition[side]} sm:top-4 sm:h-6 sm:w-6`}
            onClick={onClick}
        >
            {side === "right" ? <IconArrowBarLeft /> : <IconArrowBarRight />}
        </button>
    );
};
