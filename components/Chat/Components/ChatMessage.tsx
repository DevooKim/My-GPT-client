interface Props {
    message: {
        role: string;
        content: string;
    };
}

export function ChatMessage({ message }: Props) {
    return (
        <div
            className={`${
                message.role === "user" && "bg-blue-900"
            } text-neutral-200`}
        >
            <div className="relative flex max-w-2xl gap-4 p-4 m-auto text-base">
                <div>{message.content}</div>
            </div>
        </div>
    );
}
