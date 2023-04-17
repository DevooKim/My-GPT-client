import { ConversationComponent } from "./Conversation";

interface Props {
    conversations: any[];
}
export const Conversations = ({ conversations }: Props) => {
    return (
        <>
            {conversations.map((conversation) => (
                <ConversationComponent
                    key={conversation.id}
                    id={conversation.id}
                    title={conversation.name}
                />
            ))}
        </>
    );
};
