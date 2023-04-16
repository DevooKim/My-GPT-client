import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Chatbar from "../components/Chatbar/Chatbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="height=device-height, width=device-width, initial-scale=1, user-scalable=no"
                />
            </Head>
            <div
                className="flex flex-col flex-1 h-full max-w-full"
                style={{ height: "100dvh" }}
            >
                <div className="sticky top-0 w-full text-white border border-white sm:hidden">
                    <div>mobile - mobile - mobile</div>
                </div>
                <main className="relative flex flex-col w-screen h-screen overflow-hidden">
                    <div className="flex w-full h-full sm:pt-0">
                        <Chatbar />
                        <div className="flex flex-1">
                            <Component {...pageProps} />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
