import { flexRender } from "@tanstack/react-table";

const TableUI = ({
  onSortingChange,
  getCoreRowModel,
  getSortedRowModel,
  debugTable,
  ...props
}: any) => (
  <div>
    <table>
      <thead>
        {props.getHeaderGroups().map((headerGroup: any) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header: any) => {
              return (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {props
          .getRowModel()
          .rows.slice(0, 30)
          .map((row: any) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell: any) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
      </tbody>
    </table>
    <div>{props.getRowModel().rows.length} Rows</div>
  </div>
);

export default TableUI;
