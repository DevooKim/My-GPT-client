import SidebarActionButton from "@/components/Buttons/SidebarActionButton";
import {
    IconCheck,
    IconMessage,
    IconPencil,
    IconTrash,
    IconX,
} from "@tabler/icons-react";
import { MouseEventHandler, useState } from "react";
import { useToggle } from "usehooks-ts";

interface Props {
    id: Number | String;
    title: String;
}

export const ConversationComponent = ({ id, title }: Props) => {
    const [renameValue, setRenameValue] = useState("");
    const [isEditing, toggleIsEditing, setIsEditing] = useToggle(false);
    const [isDeleting, toggleIsDeleting, setIsDeleting] = useToggle(false);

    const handleOpenRenameModal: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        setIsEditing(true);
        setRenameValue(title);
    };

    const handleConfirm: MouseEventHandler<HTMLButtonElement> = () => {};
    const handleCancel: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        setIsEditing(false);
        setIsDeleting(false);
    };

    return (
        <div className="relative flex items-center">
            {isEditing ? (
                <div className="flex items-center w-full gap-3 px-3">
                    <IconMessage size={18} />
                    <input
                        className="overflow-hidden overflow-ellipsis flex-1 mr-12 p-0 text-left text-[12.5px] bg-transparent input focus:outline-0 "
                        type="text"
                        value={renameValue}
                        autoFocus
                    />
                </div>
            ) : (
                <button className="flex items-center w-full gap-3 px-3 border-0 btn btn-ghost">
                    <IconMessage size={18} />
                    <div
                        className={`relative max-h-5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap break-all text-left text-[12.5px] leading-3`}
                    >
                        {title}
                    </div>
                </button>
            )}
            {(isEditing || isDeleting) && (
                <div className="absolute right-1">
                    <SidebarActionButton handleClick={toggleIsEditing}>
                        <IconCheck size={18} />
                    </SidebarActionButton>
                    <SidebarActionButton handleClick={handleCancel}>
                        <IconX size={18} />
                    </SidebarActionButton>
                </div>
            )}
            {!isEditing && !isDeleting && (
                <div className="absolute right-1">
                    <SidebarActionButton handleClick={handleOpenRenameModal}>
                        <IconPencil size={18} />
                    </SidebarActionButton>
                    <SidebarActionButton handleClick={toggleIsDeleting}>
                        <IconTrash size={18} />
                    </SidebarActionButton>
                </div>
            )}
        </div>
    );
};
