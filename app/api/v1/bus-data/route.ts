import { BusInfo } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

async function GET(req: NextRequest, res: NextResponse) {
    const searchParams = await req.nextUrl.searchParams;

    const busType = searchParams.get('busType');
    const tripDate = searchParams.get('tripDate');
    const startLocation = searchParams.get('startLocation');
    const destination = searchParams.get('destination');
    const pageNumber = searchParams.get('pageNumber') || '1';
    const pageSize = searchParams.get('pageSize') || '10';

    let query: any = {};

    if (busType) query.busType = busType;
    if (tripDate) query.tripDate = tripDate;
    if (startLocation) query.startLocation = startLocation;
    if (destination) query.destination = destination;

    const busData = await BusInfo.find(query).limit(parseInt(pageSize)).skip((parseInt(pageNumber) - 1) * parseInt(pageSize));
    const totalElements = await BusInfo.countDocuments();

    if (busData.length === 0) {
        return NextResponse.json({ message: 'No bus data found' }, { status: 404 });
    }

    return NextResponse.json({busData, totalElements, pageNumber, pageSize}, { status: 200 });
}

async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    if (!body) {
        return NextResponse.json({ message: 'No data provided' }, { status: 400 });
    }
    const { busType, tripDate, startLocation, destination, noOfTrips, busNumber, RegestrationNumber, timings } = body;

    if (!busType || !tripDate || !startLocation || !destination || !noOfTrips || !busNumber || !RegestrationNumber) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    
    const data = await BusInfo.create({
        busType,
        tripDate,
        startLocation,
        destination,
        noOfTrips,
        busNumber,
        RegestrationNumber,
        timings
    })

    return NextResponse.json({ message: 'Data received', data }, { status: 201 });
}

export { 
    GET,
    POST,
    DELETE
}