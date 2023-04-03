import { Beer } from "../../api/beerApi";
import TableInstance from "./TableInstance";

interface TableQueryProps {
  queryData: Beer[];
  isLoading?: boolean;
  error?: any;
}

const TableQuery = ({ isLoading, error, queryData }: TableQueryProps) => {
  if (isLoading) return <p>fetching data...</p>;

  if (error) return <p>Something went wrong... the sadness.</p>;

  return <TableInstance queryData={queryData} />;
};

export default TableQuery;
