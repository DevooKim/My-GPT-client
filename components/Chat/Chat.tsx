import ChatInput from "./Components/ChatInput";
import TemperatureSlider from "./Components/Temperature";

interface Props {
    item: any[];
}

export default function Chat({ item }: Props) {
    return (
        <div className="relative w-full">
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
                <div>{item.map((v) => v.title)}</div>
            )}
            <ChatInput />
        </div>
    );
}
