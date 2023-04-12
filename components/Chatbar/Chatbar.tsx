import { useToggle } from "usehooks-ts";

import Sidebar from "../Sidebar/Sidebar";
import { Conversations } from "./Components/Conversations";

export default function Chatbar() {
    const [open, toggleOpen] = useToggle(false);

    return (
        <Sidebar
            side="left"
            // isOpen={open}
            isOpen
            toggleOpen={toggleOpen}
            addItemButtonTitle="새 채팅"
            itemComponents={<Conversations />}
        />
    );
}
