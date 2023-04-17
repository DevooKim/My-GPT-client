import fsPromise from "fs/promises";

import Chat from "@/components/Chat/Chat";
interface Props {
    item: any[];
}
export default function Home({ item }: Props) {
    return (
        <div className="flex justify-center w-full">
            <Chat item={item} />
        </div>
    );
}

export async function getServerSideProps(context: any) {
    const { id } = context.params;
    const data = await fsPromise.readFile(
        `${process.cwd()}/public/dummy.json`,
        {
            encoding: "utf-8",
        }
    );

    const { history } = JSON.parse(data);

    const target = history.find((h: any) => h.id === id?.[0]);

    return { props: { item: target?.messages || [] } };
}
