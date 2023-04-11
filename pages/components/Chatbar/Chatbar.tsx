import { useToggle } from "usehooks-ts";

import Sidebar from "../Sidebar/Sidebar";

export default function Chatbar() {
    const [open, toggleOpen] = useToggle(false);

    return (
        <Sidebar
            side="left"
            isOpen={open}
            toggleOpen={toggleOpen}
            addItemButtonTitle="새 채팅"
        />
    );
}
