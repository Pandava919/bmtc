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
        
       if (email === "test@example.com" && password === "123") {
          return { id: "1", name: "Test User", email };
        }

        return null;
      }
    }) 
  ]
})

export { handler as GET, handler as POST }