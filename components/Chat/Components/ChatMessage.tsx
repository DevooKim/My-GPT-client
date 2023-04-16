import { IconUser, IconRobot } from "@tabler/icons-react";

interface Props {
    message: {
        role: string;
        content: string;
    };
}

export function ChatMessage({ message }: Props) {
    const isUser = message.role === "user";

    return (
        <div className={`${isUser && "bg-mygpt-second"} text-neutral-200 border-b border-black/30`}>
            <div className="relative flex max-w-2xl gap-4 p-4 m-auto text-base">
                <div className="mr-3">{isUser ? <IconUser size="30"/> : <IconRobot size="30"/>}</div>
                <div>{message.content}</div>
            </div>
        </div>
    );
}
