import { useToggle } from "usehooks-ts";

import Sidebar from "../Sidebar/Sidebar";
import { Conversations } from "./Components/Conversations";
import { useRouter } from "next/router";

const DummyFolderComponents = () => (
    <div id="components" className="flex flex-col w-full pt-2">
        {/* <div>folder1</div>
        <div>folder2</div>
        <div>folder3</div> */}
    </div>
);

const dummy = [
    {
        id: "def5f848-818c-4dd3-9b9c-6044d7b7a193",
        name: "nextjs의 장점을 알려줘",
    },
    {
        id: "a59fa488-6866-45fd-a2cb-75707b5b48fb",
        name: "nextjs에서 라우팅을 사용하려고 하는데 '/' 와 ...",
    },
    {
        id: "aeb2bc30-cab0-4901-8ba2-e1bb62764928",
        name: "nextjs에서 라우팅을 사용하려고 하는데 '/' 와 ...",
    },
    {
        id: "ba5c369d-ce36-416f-a6a6-0bd929524e4e",
        name: "다음 문맥을 요약해서 제목으로 만들어줘.\n\n만약에 Ne...",
    },
    {
        id: "b83736c6-1b9b-4432-831a-944f6bb7796f",
        name: "아무런 두 문장을 만들어줘",
    },
    {
        id: "454e9986-f59d-419d-bc3d-6579474032da",
        name: "버튼의 색상이 #22232D 인데 hover했을 때 색...",
    },
    {
        id: "a6175306-940a-4b65-8f5c-6b3f475e2c76",
        name: "nestjs의 장점을 알려줘",
    },
    {
        id: "43d45c38-ac8b-4774-bdfe-11c361403146",
        name: '<div style={{display: "flex"}}...',
    },
];

export default function Chatbar() {
    const router = useRouter();
    const [open, toggleOpen] = useToggle(false);

    return (
        <Sidebar
            side="left"
            isOpen={open}
            toggleOpen={toggleOpen}
            addItemButtonTitle="새 채팅"
            folderComponents={<DummyFolderComponents />}
            itemComponents={<Conversations conversations={dummy} />}
            handleCreateItem={() => router.push("/")}
        />
    );
}
