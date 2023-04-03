/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";
import {
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import TableUI from "./TableUI";
import { tableColumns } from "./columns";
import { Beer } from "../../api/beerApi";

/**
 * ! Initializes the table layout with the right data and corresponding column headers
 */

interface TableInstanceProps {
  queryData: Beer[];
}

const TableInstance = ({ queryData }: TableInstanceProps) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = tableColumns;
  const data = queryData;

  const tableInstance: any = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return <TableUI {...tableInstance} />;
};

export default TableInstance;
