import React from "react";
import queries from "../hooks/useQuery";
import TableQuery from "./table/TableQuery";

export default function BeerTable() {
  const { data, isLoading, error } = queries.useBeerQuery();

  return (
    <div>
      <TableQuery queryData={data} isLoading={isLoading} error={error} />
    </div>
  );
}
