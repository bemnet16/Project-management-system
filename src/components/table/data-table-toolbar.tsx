import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";




import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";
import { RefreshCcw, Undo } from "lucide-react";


interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  searchfor?: string;
  toolBarDatas: { title: string; options: { value: string; label: string }[] }[];
}

export function DataTableToolbar<TData>({
  searchfor,
  toolBarDatas,
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-end sm:items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn(searchfor!)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(searchfor!)?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        <div className="flex flex-col sm:flex-row  gap-2 text-end  w-full">


        {toolBarDatas.map((filterOpt, idx) => (
          <div key={idx}>
            {table.getColumn(filterOpt.title) && (
              <DataTableFacetedFilter
                key={idx}
                column={table.getColumn(filterOpt.title)}
                title={filterOpt.title}
                options={filterOpt.options}
              />
            )}
          </div>
        ))}
       

        {/* {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )} */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Undo className="ml-2 h-4 w-4" />
          </Button>
        )}
         </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          table.resetColumnFilters()
          table.resetSorting()}}
        className="ml-auto hidden h-8 lg:flex mr-2 hover:bg-gray-50"
      >
        <RefreshCcw className="mr-2 h-4 w-4 " />
        Refresh
      </Button>
      <DataTableViewOptions table={table} />
    </div>
  );
}
