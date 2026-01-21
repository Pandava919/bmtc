'use client'

import { useEffect, useState } from "react"
import { 
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "./ui/table"
import axios from "axios";
import { PaginationComp } from "./pagination";
import { BusItem } from "./bus-info-table-item";

interface BusInfo extends FormData{
    id: string;
}
export function BusInfoTable() {
    const [busInfo, setBusInfo] = useState<BusInfo[] | null>([]);
    const [pagination, setPagination] = useState({
        totalElements: 0,
        pageNumber: 0
    });
    const [columns, setColumns] = useState([
        {
            name: 'busNumber',
            title: "Bus Number"
        },
        {
            name: 'regestrationNumber',
            title: "Regestration Number"
        },
        {
            name: 'busType',
            title: 'Bus Type'
        },
        {
            name: 'startLocation',
            title: 'Start Location'
        },
        {
            name: 'destination',
            title: 'Destination'
        },
        {
            name: 'noOfTrips',
            title: 'No of Trips'
        },
        {
            name: 'actions',
            title: 'Actions'
        }
    ])

    useEffect(
        () => {
            async function fetch() {
                try {
                    const {data} = await axios.get('http://localhost:3000/api/v1/bus-data')
                    setBusInfo(data.busData)
                    // setPagination({totalElements: data.totalElements})
                } catch (error) {
                    console.error(error)
                }
            }
            fetch();

            return () => {
                setBusInfo([]);
            };
        },
        [pagination]
    )

    const handlePageChange = () => {
        return ''
    }

    console.log(busInfo)
    
    return (
        <>
            <div className="px-10">
                <h2 className="text-2xl font-medium flex justify-start">Added Information</h2>
                <div>
                    <Table>
                        <TableHeader >
                            <TableRow>
                                {columns.map((column) => {
                                    return <TableHead key={column.name} title={column.title}>{column.title}</TableHead>
                                })}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {busInfo && busInfo.length && busInfo.map((busItem) => {
                                return <BusItem bus={busItem} key={busItem.id}  />
                            })}
                        </TableBody>
                        <TableFooter>
                            {/* <PaginationComp
                                totalElements={pagination.totalElements}
                                pageNumber={pagination.pageNumber}
                                handlePageChange={handlePageChange}
                            /> */}
                        </TableFooter>
                    </Table>
                </div>
            </div>
        </>
    )
}