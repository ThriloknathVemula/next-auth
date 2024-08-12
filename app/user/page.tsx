"use client"
import { useSession } from "next-auth/react"

export default function User (){
    const session = useSession();

    return(
        <div>
            <h1>Hard coded values</h1>
            {JSON.stringify(session.data?.user)}
        </div>
    )
}