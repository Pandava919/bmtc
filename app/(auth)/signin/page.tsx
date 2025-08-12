'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const session = useSession();

    async function handleSignIn(e: any) {
        e.preventDefault()

        const response = await signIn('credentials', {
            redirect: false,
            email,
            password
        })
        console.log(response);
        if (response?.status === 200) {
          router.push('/dashboard')
        }
        // if (!email || !password) {
        //     return;
        // }
        // try {
        //     const response = await axios.post("http://localhost:3000/api/signin", {
        //         email,
        //         password
        //     });
        //     if (response.data.status === 200) {
        //         router.push('/dashboard');
        //     }
        // } catch (error) {
        //     console.log(error?.message || "An error occurred during sign in");
        // }
    }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100 dark:bg-neutral-600">
      <div className="flex items-center justify-center flex-col gap-5 shadow-sm shadow-gray-500 rounded-md p-3">
        <div>
            <h1 className="text-3xl font-bold">Sign in</h1>
        </div>
        <form onSubmit={handleSignIn}>
            <div className="w-60 max-w-md flex items-center justify-center flex-col gap-4">
                <Input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                <Button
                    className="w-24 bg-gray-200"
                    type="submit"
                    variant="secondary"
                >
                    Sign In
                </Button>
            </div>
        </form>
      </div>
    </div>
  );
}