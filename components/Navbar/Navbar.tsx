import { IconPlus } from "@tabler/icons-react";

export default function Navbar() {
    return (
        <nav className="flex w-full justify-between bg-[#202123] py-2 px-4">
            <div className="mr-4"></div>

            <div className="max-w-[240px] overflow-hidden text-ellipsis whitespace-nowrap">
                {/* {selectedConversation.name} */}
                적당한 제목 - 적당한 제목
            </div>

            <IconPlus
                className="mr-8 cursor-pointer hover:text-neutral-400"
                // onClick={onNewConversation}
            />
        </nav>
    );
}
