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
      email,
      password,
      redirect: true,
      callbackUrl: '/dashboard',
    });
    console.log(response);
    // if (response?.status === 200) {
    //   router.push('/dashboard')
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
              className="w-24 bg-gray-400 font-semibold hover:bg-gray-500"
              type="submit"
              variant="secondary"
              disabled={!(!!email && !!password)}
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
