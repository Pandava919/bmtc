import { Appbar } from "@/components/Appbar";
import { BusInfoTable } from "@/components/bus-info-table";
import { DataCollectionForm } from "@/components/form";
import { PaginationComp } from "@/components/pagination";


export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center px-5">
      {/* <Appbar /> */}
      {/* <PaginationComp /> */}
      <BusInfoTable />
      {/* <DataCollectionForm /> */}
    </div>
  );
}
