import { createColumnHelper } from "@tanstack/react-table";
import { Beer } from "../../api/beerApi";

const columnHelper = createColumnHelper<Beer>();

export const tableColumns: any = [
  columnHelper.accessor("alcohol", {
    header: "Alc %",
  }),
  columnHelper.accessor("blg", {
    header: "BLG",
  }),
  columnHelper.accessor("brand", {
    header: "Brand",
  }),
  columnHelper.accessor("hop", {
    header: "Hop",
  }),
  columnHelper.accessor("ibu", {
    header: "IBU",
  }),
  columnHelper.accessor("malts", {
    header: "Malts",
  }),
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("style", {
    header: "Style",
  }),
  columnHelper.accessor("yeast", {
    header: "Yeast",
  }),
];
