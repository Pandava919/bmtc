
import { User } from "@/lib/db";
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

        const user = await User.findOne({ email });
        if (!user) {
          const salt = await bcrypt.genSalt(5)
          const encryptedPass = await bcrypt.hash(password, salt);
          const newUser = await User.create({
            email,
            password: encryptedPass
          });

          return newUser;
        }

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