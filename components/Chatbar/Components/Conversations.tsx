import { ConversationComponent } from "./Conversation";

const tempList = [
    {
        id: 1,
        title: "title1",
    },
    {
        id: 2,
        title: "title2",
    },
    {
        id: 3,
        title: "title3",
    },
];

export const Conversations = () => {
    return (
        <>
            {tempList.map((temp) => (
                <ConversationComponent
                    key={temp.id}
                    id={temp.id}
                    title={temp.title}
                />
            ))}
        </>
    );
};
