import { IconFolderPlus, IconPlus } from "@tabler/icons-react";
import { CloseButton, OpenButton } from "./Components/OpenCloseButton";
import { ReactNode } from "react";

interface Props {
    isOpen: boolean;
    addItemButtonTitle: string;
    side: "left" | "right";
    folderComponents: ReactNode;
    itemComponents: ReactNode;

    toggleOpen: () => void;
}

export default function Sidebar({
    isOpen,
    addItemButtonTitle = "새 채팅",
    side,
    folderComponents,
    itemComponents,
    toggleOpen,
}: Props) {
    return isOpen ? (
        <div>
            <div className="text-white top-0 fixed z-50 flex h-full w-[260px] flex-none flex-col space-y-2 p-2 text-[14px] transition-all sm:relative sm:top-0 bg-sidebar">
                <div className="flex items-center">
                    <button className="flex items-center justify-start flex-1 flex-shrink-0 gap-3 text-white select-none w-100 btn btn-outline hover:text-white hover:bg-sidebar/20">
                        <IconPlus size={16} />
                        {addItemButtonTitle}
                    </button>
                    <button className="flex items-center flex-shrink-0 gap-3 ml-2 text-white select-none w-100 btn btn-outline hover:text-white hover:bg-sidebar/20">
                        <IconFolderPlus size={16} />
                    </button>
                </div>

                <input
                    placeholder="search"
                    className="border-white input bg-sidebar focus:outline-offset-0 focus:outline-info"
                />

                <div className="flex-grow overflow-auto">
                    <div className="flex pb-2 border-b border-white">
                       {folderComponents}
                    </div>
                    <div className="pt-2">{itemComponents}</div>
                </div>
                <div id="components" className="border-t border-white">
                    options
                </div>
            </div>
            <CloseButton side={side} onClick={toggleOpen} />
        </div>
    ) : (
        <OpenButton side={side} onClick={toggleOpen} />
    );
}
