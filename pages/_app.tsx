import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Chatbar from "../components/Chatbar/Chatbar";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <main
                // className={`flex h-screen w-screen flex-col text-sm text-white dark:text-white ${lightMode}`}
                className={`flex h-screen w-screen flex-col text-sm `}
            >
                <div className="fixed top-0 w-full sm:hidden">
                    <div>mobile navbar</div>
                </div>
                <div className="flex h-full w-full pt-[48px] sm:pt-0">
                    <Chatbar />
                    <div className="flex flex-1">
                        <Component {...pageProps} />
                    </div>
                </div>
            </main>
        </>
    );
}
