import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Chatbar from "./components/Chatbar/Chatbar";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Chatbar />
            <Component {...pageProps} />
        </>
    );
}
