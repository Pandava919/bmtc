import { connectDB, User } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(req: NextRequest, res: NextResponse) {
    connectDB();
    const body = await req.json();

    if(!body.email || !body.password) {
        return
    }
    const presentUser = await User.findOne({ email: body.email });
    if(presentUser) {
        return NextResponse.json({
            message: 'User already exists',
            status: 400
        })
    }

    const hash = await bcrypt.hashSync(body.password, 10);
    const hashedPassword = await bcrypt.hashSync(body.password, hash);

    const response = await User.create({
        email: body.email,
        password: hashedPassword
    })

    return NextResponse.json({
        message: 'Sign in successfull',
        data: response,
        status: 200
    })
}