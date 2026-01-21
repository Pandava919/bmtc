import { BusInfo, connectDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

async function GET(req?: NextRequest, params ?: { params: { id: string } }) {
    const busParams = await params;
    const busId = busParams?.params.id;
    console.log(busId)
    connectDB()

    if (!busId) {
        return NextResponse.json({ message: 'No ID provided' }, { status: 400 });
    }

    const busData = await BusInfo.findById(busId);
    if (!busData) {
        return NextResponse.json(
            { message: "Bus data not found" },
            { status: 404 }
        );
    }
    if (busData) {
        return NextResponse.json(
            { busData },
            { status: 200 }
        );
    }

    return NextResponse.json(
        {message: 'Something went wrong'},
        {status: 500}
    );
}

async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const body = await req.json();
    const param = await params;
    if (!body) {
        return NextResponse.json({ message: 'No data provided' }, { status: 400 });
    }

    const busId = param.id;
    if (!busId) {
        return NextResponse.json({ message: 'No ID provided' }, { status: 400 });
    }

    const busData = await BusInfo.findById(busId);
    if (!busData) {
        return NextResponse.json({ message: 'Bus data not found' }, { status: 404 });
    }

    const updatedBusData = await BusInfo.findByIdAndUpdate(busId, body, { new: true });
    if (!updatedBusData) {
        return NextResponse.json({ message: 'Failed to update bus data' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Bus data updated'}, { status: 202 });
}

async function DELETE(req: NextRequest, { params }: { params: { id: string }}) {
    const param = await params;
    const id = param.id;
    if (!id) {
        return NextResponse.json({ message: 'No ID provided' }, { status: 400 });
    }

    const busData = await BusInfo.findById(id);
    if (!busData) {
        return NextResponse.json({ message: 'Bus data not found' }, { status: 404 });
    }

    await BusInfo.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Deleted Successfully' }, { status: 200 });
}

export {
    GET,
    PUT,
    DELETE
}
