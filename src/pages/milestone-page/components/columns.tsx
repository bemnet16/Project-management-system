import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/table/data-table-column-header";

import { milestoneDataTableType } from "@/constants/schema";
import { Eye } from "lucide-react";

export const columns: ColumnDef<milestoneDataTableType>[] = [
  // {
  //   accessorKey: "name",
  //   header: ({ column }) => {
  //     <DataTableColumnHeader column={column} title="Milstone" />
  //   },
  //   cell: ({ row }) => (
  //     <div className="flex space-x-2">
  //       <span className="max-w-[100px] truncate font-medium text-slate-800">
  //         {row.getValue("name")}
  //       </span>
  //     </div>
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },

  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Milestone" />;
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 justify-start">
          <span className=" truncate font-medium text-slate-700">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <DataTableColumnHeader column={column} title="Status" />
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 justify-center">
          <span className=" truncate font-medium text-slate-700">
            {row.getValue("status")}
          </span>
        </div>
      );
    },
    enableSorting: false,
  },

  {
    accessorKey: "remainingtime",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Remaining Time" />;
    },
    cell: ({ row }) => {
      return (
        <div className=" flex justify-center">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className=" truncate font-medium text-slate-700">
            {row.getValue("remainingtime")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "milestonetype",
    header: ({ column }) => {
      return (<div className="flex-center">
        <DataTableColumnHeader column={column} title="Milestone type" />
      </div>);
    },
    cell: ({ row }) => {
      return (
        <div className="flex  justify-center">
          <span className=" truncate font-medium text-slate-700">
            {row.getValue("milestonetype")}
          </span>
        </div>
      );
    },
    enableSorting: false,
  },

  {
    accessorKey: "report",
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <DataTableColumnHeader column={column} title="Status Report" />
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 justify-center">
          <span className=" truncate font-medium text-blue-600 hover:underline cursor-pointer">
            {row.getValue("report")}
          </span>
        </div>
      );
    },
    enableSorting: false,
  },

  {
    accessorKey: "view",
    header: () => (
      <div className="base-semibold text-slate-700 text-center">View</div>
    ),
    id: "view",
    cell: () => (
      <span className="hover:cursor-pointer hover:text-indigo-400 text-center">
        <Eye className="mx-auto" />
      </span>
    ),
  },

  // {
  //   id: "actions",
  //   accessorKey: "actions",
  //    header: () => <div className="base-semibold text-slate-700">Actions</div>,
  //   cell: ({ row }) =>  <DropdownMenu>
  //     <DropdownMenuTrigger asChild>
  //       <Button
  //         variant="ghost"
  //         className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
  //       >
  //         <MoreHorizontal className="h-4 w-4" />
  //         <span className="sr-only">Open menu</span>
  //       </Button>
  //     </DropdownMenuTrigger>
  //     <DropdownMenuContent align="end" className="w-[160px] bg-white">
  //       <DropdownMenuItem>Edit</DropdownMenuItem>
  //       <DropdownMenuItem>Make a copy</DropdownMenuItem>
  //       <DropdownMenuItem>Favorite</DropdownMenuItem>
  //       <DropdownMenuSeparator />
  //       <DropdownMenuSub>
  //         <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
  //         <DropdownMenuSubContent className="bg-white">
  //           <DropdownMenuRadioGroup value={reportSchema.parse(row.original).id}>
  //             {Array.from({length : 3}).map((_ , idx) => (
  //               <DropdownMenuRadioItem key={idx} value={idx.toString()}>
  //                 {idx}
  //               </DropdownMenuRadioItem>
  //             ))}
  //           </DropdownMenuRadioGroup>
  //         </DropdownMenuSubContent>
  //       </DropdownMenuSub>
  //       <DropdownMenuSeparator />
  //       <DropdownMenuItem>
  //         Delete
  //         <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
  //       </DropdownMenuItem>
  //     </DropdownMenuContent>
  //   </DropdownMenu>,
  // },
];
