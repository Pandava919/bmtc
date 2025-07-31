"use client"

import { Button } from "@/components/ui/button";
import SignIn from "../(auth)/signin/page";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function Appbar() {
    const session = useSession();
    const router = useRouter()
    return (
        <div className="flex justify-between px-5 py-2 fixed top-0 left-0 right-0 bg-neutral-100 dark:bg-neutral-800 shadow-sm ">
            <div className="">
                <h1 className="text-3xl font-bold">BMTC</h1>
            </div>
            <div>
                {session.data?.user && <Button className="bg-gray-400 text-white font-medium hover:bg-gray-500 cursor-pointer" variant="default" onClick={ () => router.push('/signin')}>Signout</Button>}
                {!session?.data?.user && <Button className="bg-gray-400 text-white font-medium hover:bg-gray-500 cursor-pointer" variant="default" onClick={ () => router.push('/signin')}>Signin</Button>}
            </div>
        </div>
    )
}