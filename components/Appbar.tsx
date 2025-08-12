"use client"

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function Appbar() {
    const session = useSession();
    const router = useRouter()
    console.log(session)
    const logOut =  () => {
        signOut({redirect: false});
        router.push('/signin')
    }

    const logIn = () => {
        router.push('/signin')
    }
    return (
        <div className="flex justify-between min-w-screen px-5 py-2 bg-neutral-100 dark:bg-neutral-800 shadow-sm ">
            <div className="">
                <h1 className="text-3xl font-bold">BMTC</h1>
            </div>
            <div>
                {session.data?.user && <Button className="bg-gray-400 text-white font-medium hover:bg-gray-500 cursor-pointer" variant="default" onClick={ logOut }>Signout</Button>}
                {!session?.data?.user && <Button className="bg-gray-400 text-white font-medium hover:bg-gray-500 cursor-pointer" variant="default" onClick={ logIn }>Signin</Button>}
            </div>
        </div>
    )
}