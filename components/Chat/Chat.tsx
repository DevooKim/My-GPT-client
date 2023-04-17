import ChatInput from "./Components/ChatInput";
import { ChatMessage } from "./Components/ChatMessage";
import TemperatureSlider from "./Components/Temperature";

interface Props {
    item: any[];
}

export default function Chat({ item }: Props) {
    return (
        <div className="relative flex-1 overflow-hidden bg-mygpt">
            <div className="max-h-full overflow-x-hidden">
                {!item.length ? (
                    <div className="mx-auto flex w-[350px] flex-col pt-12 sm:w-[600px]">
                        <div className="text-4xl font-semibold text-center text-gray-100 ">
                            MY GPT
                        </div>
                        <div className="p-3 mt-4 border rounded-lg border-neutral-200">
                            <TemperatureSlider />
                        </div>
                    </div>
                ) : (
                    <>
                        {item.map((v, index) => (
                            <ChatMessage key={index} message={v} />
                        ))}
                        <div
                            className="h-[172px] bg-[#343541]"
                        />
                    </>
                )}
            </div>
            <ChatInput />
        </div>
    );
}
