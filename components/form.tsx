'use client'

import React, { useState } from "react"
import * as formJson from '../public/form.json'
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";
import { BusInfoTable } from "./bus-info-table";

interface FormData {
    busNumber: string;
    route: string,
    busType: string;
    regestrationNumber:string;
    startDate: string,
    noOfTrips: number,
    startLocation: string;
    destination: string;
    timings?: string;
}

export const DataCollectionForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        busNumber: '',
        route: '',
        busType: '',
        regestrationNumber: '',
        startDate: '',
        noOfTrips: 0,
        startLocation: '',
        destination: '',
        timings: ''
    });
    const [loading, setLoading] = useState<boolean>(false);

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}))
        console.log(formData)
    }

    const handleSubmit = async() => {
        const {busNumber, busType, route, regestrationNumber, noOfTrips, startDate, startLocation, destination} = formData;
        try{
            setLoading(true);
            // if (!busNumber || !busType || !route || !regestrationNumber || !noOfTrips || !startDate || !startLocation || ! destination) {
            //     setLoading(false);
            //     return;
            // }
            console.log(formData)
            const res = await axios.post('http://localhost:3000/api/v1/bus-data', formData);
            console.log(res)
            setLoading(false);
        }catch(e) {
            console.error(e);
            setLoading(false);
        }

        setFormData({
            busNumber: '',
            route: '',
            busType: '',
            regestrationNumber: '',
            startDate: '',
            noOfTrips: 0,
            startLocation: '',
            destination: '',
            timings: ''
        })
    }

    return(
        <>
            <div className="flex flex-col gap-10">
                <div className="min-w-screen flex justify-center">
                    <div className="border-1 p-5 rounded-md flex flex-col justify-center items-center gap-8">
                        <div className=" w-[700px] grid grid-cols-3 gap-5 items-center justify-center">
                            {
                                formJson.map((field) => (
                                        <Input
                                            key={field.name}
                                            placeholder={field.placeholder}
                                            name={field.name}
                                            onChange={handleOnchange}
                                            type={field.type}
                                            value={formData[field.name as keyof FormData]}
                                        />
                                    ))
                            }
                        </div>
                        <div>
                            <Button
                                onClick={handleSubmit}
                                variant='outline'
                                className="border-2 cursor-pointer bg-gray-200 font-medium"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
                <hr className="border-dashed border-black w-[1400px]" />
                <div className="">
                    <BusInfoTable />
                </div>
            </div>
        </>
    )
}