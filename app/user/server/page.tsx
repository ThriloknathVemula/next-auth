import { getServerSession } from "next-auth";

async function getUser(){
    const session = await getServerSession();
    return session;
}

export default async function ServerUser(){
    const session = await getUser()
    return(
        <div>
            <h1 className="font-bold">Server Component</h1>
            {JSON.stringify(session)}
        </div>
    )
}