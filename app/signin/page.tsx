"use client"

//custom sign in page

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function(){
    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center gap-2 p-20">
            <input type="text" placeholder="Enter your email"/>
            <input type="password" placeholder="Enter your password"/>
            <button onClick={async()=>{
                const res = await signIn("credentials",{
                    username:"",
                    password:"",
                    redirect:false
                });
                console.log(res);
                router.push('/');
            }}>Login with Email</button>
            <br/>
            <button onClick={async()=>{await signIn('google')}}>Login with Google</button>
            <button onClick={async()=>{await signIn('github')}}>Login with Github</button>
        </div>
    )
}