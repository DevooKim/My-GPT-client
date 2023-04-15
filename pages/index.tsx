import Chat from "@/components/Chat/Chat";
import { useMemo, useState } from "react";

const item = [
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

export default function Home() {
    const [t, setT] = useState(false);
    const dummy = useMemo(() => (t ? item : []), [t]);
    const toggle = () => setT((p) => !p);

    return (
        <div className="flex justify-center w-full">
            <button className="fixed bottom-4" onClick={toggle}>
                toggle
            </button>
            <Chat item={dummy} />
        </div>
    );
}
