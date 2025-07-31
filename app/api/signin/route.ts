interface User {
    email: string;
    password: string;
}
export async function POST(request: Request, response:Response, next:Function) {
    const body: User = await request.json();

  return Response.json({ message: "Sign in successful", data: body });
}
