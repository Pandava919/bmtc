'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { TableCell, TableRow } from "./ui/table";
import { DeleteIcon, EditIcon, MoreVertical, ViewIcon } from "lucide-react";
import { Button } from "./ui/button";

interface ITableItemProps{
    bus: any;
}
export function BusItem({ bus }: ITableItemProps) {
return (
    <TableRow
        contextMenu=""
        className="cursor-pointer border-0"
    >
        <TableCell align="center">
            {bus.busNumber}
        </TableCell>
        <TableCell align="center">
            {bus.RegestrationNumber}
        </TableCell>
        <TableCell align="center">
            {bus.busType}
        </TableCell>
        <TableCell align="center">
            {bus.startLocation}
        </TableCell>
        <TableCell align="center">
            {bus.destination}
        </TableCell>
        <TableCell align="center">
            {bus.noOfTrips}
        </TableCell>
        <TableCell>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger className="cursor-pointer">
                        <MoreVertical />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Button variant='outline' className="w-full outline-0 cursor-pointer rounded-none ">
                                <EditIcon /> Edit
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button variant='outline' className="w-full">
                                <DeleteIcon /> Delete
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button variant='outline' className="w-full">
                                <ViewIcon /> View
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </TableCell>
    </TableRow>
)
}