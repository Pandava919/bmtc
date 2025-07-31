interface User {
    email: string;
    password: string;
}
export async function POST(request: Request, response:Response, next:Function) {
    const body: User = await request.json();
    const email = body.email;
    const password = body.password;
    if (!email || !password) {
        return Response.json({ message: "Please fill in all fields" }, { status: 400 });
    }

    return Response.json({ message: "Sign in successful", data: { email, password } }, { status: 200 });
}
