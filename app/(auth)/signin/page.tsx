import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

export default async function SignIn() {

    const response = await axios.post("http://localhost:3000/api/signin", {
        email: "pandava@gmail.com",
        password: "password123"
    });


console.log(response.data);
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100 dark:bg-neutral-600">
      <div className="flex items-center justify-center flex-col gap-5 shadow-sm shadow-gray-500 rounded-md p-3">
        <div>
        <h1 className="text-3xl font-bold">Sign in</h1>
      </div>
      <div className="w-60 max-w-md flex items-center justify-center flex-col gap-4">
        <Input type="email" placeholder="Enter your email" />
        <Input type="password" placeholder="Enter your password" />
        <Button className="w-24 bg-gray-200" variant="secondary">Sign In</Button>
      </div>
      </div>
    </div>
  );
}