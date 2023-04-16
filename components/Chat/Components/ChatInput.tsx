import { IconSend } from "@tabler/icons-react";
import { useRef } from "react";

export default function ChatInput() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    return (
        <div className="absolute bottom-0 left-0 w-full pt-6 border-transparent bg-gradient-to-b from-transparent via-white to-white dark:border-white/20 dark:via-mygpt-second dark:to-mygpt">
            <div className="stretch mx-2 mt-4 flex flex-row gap-3 last:mb-2 md:mx-4 md:mt-[52px] md:last:mb-6 lg:mx-auto lg:max-w-3xl">
                <div className="flex relative mx-2 w-full bg-[#56606E] rounded-md">
                    <textarea
                        ref={textareaRef}
                        className="drop-shadow-md max-h-[400px] w-full py-3 pl-5 text-white bg-transparent border-0 resize-none pr-9 outline-0 focus-visible:border focus-visible:rounded-md"
                        placeholder="Input"
                        onInput={handleInput}
                        rows={1}
                    />
                    <button className="absolute p-1 rounded-sm right-2 top-2 text-white/60">
                        <IconSend size={18} />
                    </button>
                </div>
            </div>

            <div className="px-3 pt-2 pb-3 text-center text-[12px] text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
                최신 개발 도구와 기술을 습득하면 더욱 높은 품질의 소프트웨어를
                개발할 수 있습니다. 또한, 개발 과정에서 지속적인 테스트와 코드
                리뷰를 수행하여 안정적이고 유지보수가 용이한 소프트웨어를
                만들어야 합니다. (made by chatGPT)
            </div>
        </div>
    );
}
