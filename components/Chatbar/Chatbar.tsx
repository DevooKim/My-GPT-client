import { useToggle } from "usehooks-ts";

import Sidebar from "../Sidebar/Sidebar";
import { Conversations } from "./Components/Conversations";

const DummyFolderComponents = () => (
    <div id="components" className="flex flex-col w-full pt-2">
        <div>folder1</div>
        <div>folder2</div>
        <div>folder3</div>
    </div>
);

export default function Chatbar() {
    const [open, toggleOpen] = useToggle(false);

    return (
        <Sidebar
            side="left"
            isOpen={open}
            toggleOpen={toggleOpen}
            addItemButtonTitle="새 채팅"
            folderComponents={<DummyFolderComponents />}
            itemComponents={<Conversations />}
        />
    );
}
