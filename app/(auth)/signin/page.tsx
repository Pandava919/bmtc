'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignIn() {
        // if (!email || !password) {
        //     alert("Please fill in all fields");
        //     return;
        // }
        try {
            const response = await axios.post("http://localhost:3000/api/signin", {
                email,
                password
            });
            console.log(response.data);
        } catch (error) {
            console.log(error?.message || "An error occurred during sign in");
        }
    }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100 dark:bg-neutral-600">
      <div className="flex items-center justify-center flex-col gap-5 shadow-sm shadow-gray-500 rounded-md p-3">
        <div>
            <h1 className="text-3xl font-bold">Sign in</h1>
        </div>
        <div className="w-60 max-w-md flex items-center justify-center flex-col gap-4">
            <Input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <Button
                className="w-24 bg-gray-200"
                variant="secondary"
                onClick={handleSignIn}
            >
                Sign In
            </Button>
        </div>
      </div>
    </div>
  );
}