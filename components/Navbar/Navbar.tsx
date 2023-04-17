import { IconPlus } from "@tabler/icons-react";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full px-4 py-2 border-b bg-mygpt">
            <div className="mr-6"></div>

            <div className="text-center max-w-[240px] overflow-hidden text-ellipsis whitespace-nowrap">
                {/* {selectedConversation.name} */}
                적당한 제목 - 적당한 제목
            </div>

            <IconPlus
                className="cursor-pointer hover:text-neutral-400"
                // onClick={onNewConversation}
            />
        </nav>
    );
}
