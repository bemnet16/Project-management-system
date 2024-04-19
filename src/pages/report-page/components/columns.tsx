import { ColumnDef } from "@tanstack/react-table";


import { Badge } from "@/components/ui/badge";


import { cn } from "@/lib/utils";


import { DataTableColumnHeader } from "@/components/table/data-table-column-header";

import {  statuses } from "@/constants";
import { reportDataTableType } from "@/constants/schema";




export const columns: ColumnDef<reportDataTableType>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },

  {
    accessorKey: "name",
    header: ({ column ,   }) => {
      <DataTableColumnHeader column={column} title="name" />
    },
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <span className="max-w-[100px] truncate font-medium text-slate-800">
          {row.getValue("name")}
        </span>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "sentdate",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Sent Date" />;
    },
    cell: ({ row }) => {

      return (
        <div className="flex space-x-2 justify-center">
          <span className=" truncate font-medium text-slate-700">
            {row.getValue("sentdate")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "senttime",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Time" />;
    },
    cell: ({ row }) => {

      return (
        <div className="flex space-x-2 justify-center">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className=" truncate font-medium text-slate-700">
            {row.getValue("senttime")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "users",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Users" />;
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 justify-center">
          <span className=" truncate font-medium text-slate-700">
            {row.getValue("users")}
          </span>
        </div>
      );
    },
  },
 
  {
    accessorKey: "attachment",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Attachment" />;
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 justify-center">
          <span className=" truncate font-medium text-blue-600 hover:underline cursor-pointer">
            {row.getValue("attachment")}
          </span>
        </div>
      );
    },
  },
  

  {
    accessorKey: "status",
    header: () => (
      <div className="base-semibold text-slate-700 text-center">Status</div>
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className={cn("flex max-w-[130px] items-center mx-auto border-2 text-[#008D1F] border-[#00D22E] bg-[#7AF996] rounded-full p-1 ", 
        `${
          row.getValue("status") == "completed"
            ? "text-[#0DA800] border-[#0DA800] bg-[#7AF996]"
            : row.getValue("status") === "inprogress"
            ? "text-[#CDB900] border-[#CDB900] bg-[#F9F67A]"
            : "text-[#CB2703] border-[#CB2703] bg-[#F9967A]"
        }`
        )}>
          
          
          
          <Badge variant="secondary" className="text-center flex justify-center w-full"   >  
            <status.icon className="w-3 h-3 mr-1 mt-1" />
            {row.getValue("status")}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  // {
  //   accessorKey: "view",
  //   header: () => <div className="base-semibold text-slate-700 text-center">View</div>,
  //   id: "view",
  //   cell: () => (
  //     <span className="hover:cursor-pointer hover:text-indigo-400 text-center">
  //       <Eye  className=""/>
  //     </span>
  //   ),
  // },

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
