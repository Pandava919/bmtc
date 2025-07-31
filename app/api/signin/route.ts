import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();

    if(!body.email || !body.password) {
        return
    }
    return NextResponse.json({
        message: 'Sign in successfull',
        data: body,
        status: 200
    })
}