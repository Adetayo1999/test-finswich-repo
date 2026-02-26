/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";

interface CustomTableProps<T> {
  className?: string;
  columns: any;
  data: T[];
  loading?: boolean;
}

export const CustomTable = <T,>({ columns, data }: CustomTableProps<T>) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="relative">
      <table className={clsx("w-full  text-sm text-left rtl:text-right")}>
        <thead className=" text-[#949494] text-xs border-b border-[#CFCFCF] font-manrope">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="pr-8  capitalize    py-4 whitespace-nowrap font-normal"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="py-4 text-[#0F0F0F]   whitespace-nowrap pr-6 border-b border-[#CFCFCF]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
