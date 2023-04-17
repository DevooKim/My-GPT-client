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
        <div
            className={`${
                !isUser ? "bg-mygpt-second" : "bg-inherit"
            } text-neutral-200 border-b border-black/30 px-4`}
        >
            <div className="relative flex gap-4 p-4 m-auto text-base md:max-w-2xl md:py-6 xl:max-w-3xl">
                <div className="text-bold min-w-[40px]">
                    {isUser ? <IconUser size="30" /> : <IconRobot size="30" />}
                </div>
                <div className="w-full">
                    <div className="prose break-all whitespace-pre-wrap">
                        {message.content}
                    </div>
                </div>
            </div>
        </div>
    );
}
