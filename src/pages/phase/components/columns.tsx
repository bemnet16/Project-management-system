import { ColumnDef } from "@tanstack/react-table";


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

import { Eye, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";


import { DataTableColumnHeader } from "@/components/table/data-table-column-header";

import { priorities, statuses } from "@/constants";
import { phaseDataTableType, phaseSchema } from "@/constants/schema";




export const columns: ColumnDef<phaseDataTableType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "phase",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="phase" />
    ),
    cell: ({ row }) => (
      <div className="flex space-x-2">
        {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
        <span className="max-w-[100px] truncate font-medium text-slate-800">
          {row.getValue("phase")}
        </span>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  // {
  //   accessorKey: "programmanager",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader
  //       column={column}
  //       className="min-w-[170px] mx-6 pl-4"
  //       title="Program manager"
  //     />
  //   ),
  //   cell: ({ row }) => {
  //     // const label = labels.find((label) => label.value === row.original.label)

  //     return (
  //       <div className="flex space-x-2 mx-6">
  //         {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
  //         <Avatar>
  //           <AvatarImage src="https://github.com/shadcn.png" />
  //           <AvatarFallback>CN</AvatarFallback>
  //         </Avatar>
  //         <div className="flex flex-col">
  //           <span className="max-w-[200px] truncate font-semibold text-slate-800">
  //             {row.getValue("programmanager")}
  //           </span>
  //           <span className="max-w-[200px] truncate font-medium text-xs text-slate-500">
  //             {row.getValue("programmanager")}
  //          </span>
  //         </div>
  //       </div>
  //     );
  //   },
  //   enableSorting: false,
  // },

  {
    accessorKey: "initialbudget",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Initial Budget" />;
    },
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2 justify-center">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className=" truncate font-medium text-slate-700">
            {row.getValue("initialbudget")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "usedbudget",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Used Budget" />;
    },
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2 justify-center">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className=" truncate font-medium text-slate-700">
            {row.getValue("usedbudget")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "allocatedtime",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Time Allocated" />;
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 justify-center">
          <span className=" truncate font-medium text-slate-700">
            {row.getValue("allocatedtime")}
          </span>
        </div>
      );
    },
  },
 
  {
    accessorKey: "remainingtime",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Remaining Time" />;
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 justify-center">
          <span className=" truncate font-medium text-slate-700">
            {row.getValue("remainingtime")}
          </span>
        </div>
      );
    },
  },
  
  {
    accessorKey: "progressreport",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Progress Report" />;
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 justify-center">
          <span className=" truncate font-medium text-slate-700 bg-gray-50 px-3 py-1 rounded-lg">
            {row.getValue("progressreport")} Reports
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "priority",
    header: () => (
      <div className="base-semibold text-slate-700 text-center">Priority</div>
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      );

      if (!priority) {
        return null;
      }

      return (
        <div className=" flex items-center justify-center ">
          {/* {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          <span
            className={cn(
              "text-[#0DA800] font-bold text-[14px]",
              `${
                priority.value == "HIGH"
                  ? "text-[#0DA800]"
                  : priority.value === "MEDIUM"
                  ? "text-[#CDB900]"
                  : "text-[#CB2703]"
              }`
            )}
          >
            {row.getValue("priority")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
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
        <div className={cn("flex  items-center justify-center border-2 text-[#008D1F] border-[#00D22E] bg-[#7AF996] rounded-full p-1 ", 
        `${
          row.getValue("status") == "completed"
            ? "text-[#0DA800] border-[#0DA800] bg-[#7AF996]"
            : row.getValue("status") === "inprogress"
            ? "text-[#CDB900] border-[#CDB900] bg-[#F9F67A]"
            : "text-[#CB2703] border-[#CB2703] bg-[#F9967A]"
        }`
        )}>
          
          
          
          <Badge variant="secondary"   >  
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

  {
    accessorKey: "view",
    header: () => <div className="base-semibold text-slate-700 text-center">View</div>,
    id: "view",
    cell: () => (
      <span className="hover:cursor-pointer hover:text-indigo-400 text-center">
        <Eye  className=""/>
      </span>
    ),
  },

  {
    id: "actions",
    accessorKey: "actions",
     header: () => <div className="base-semibold text-slate-700">Actions</div>,
    cell: ({ row }) =>  <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px] bg-white">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Make a copy</DropdownMenuItem>
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="bg-white">
            <DropdownMenuRadioGroup value={phaseSchema.parse(row.original).id}>
              {Array.from({length : 3}).map((_ , idx) => (
                <DropdownMenuRadioItem key={idx} value={idx.toString()}>
                  {idx}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>,
  },
];
