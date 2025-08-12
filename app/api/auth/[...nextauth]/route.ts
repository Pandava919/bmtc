
import { User } from "@/lib/db";
import axios from "axios";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

interface User {
  email: string;
  password: string;
}


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "", type: "email", placeholder: "Enter your email" },
        password: { label: "", type: "password", placeholder: "Enter your password" }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as User;
        
        if (!email || !password) {
          throw new Error("Email and password are required");
        }
        //! add if signup is needed


        // const response = await axios.post("http://localhost:3000/api/signin", {
        //   email,
        //   password
        // });
        // const { data } = response;

        // if (data.status === 200) {
        //   return data.data;
        // }

        const user = await User.findOne({ email });

        const validUSer = await bcrypt.compare(password, user?.password);

        if (!validUSer) {
          throw new Error("Invalid email or password");
        }
          return user;
      }
    }) 
  ]
})

export { handler as GET, handler as POST }