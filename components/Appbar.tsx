import { signIn, signOut } from "next-auth/react"

export const Appbar = ()=>{
    return <div className="flex justify-between items-center p-2">
        <h1 className="font-bold text-xl">App Bar</h1>
        <div className="flex gap-1 items-center">
            <button className="bg-slate-200 text-black p-1 px-2 rounded-md" onClick={()=>signIn()}>Signin</button>
            <button className="bg-slate-200 text-black p-1 px-2 rounded-md"  onClick={()=>signOut()}>Logout</button>
        </div>
    </div>
}