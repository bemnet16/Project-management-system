import { Eye } from "lucide-react";

interface rowItemProps{
    title: string;
    type: string;
    manager: string;
    estimatedBudget: number | string;
    usedBudget: number | string;
    leftBudget: number | string;
    
}

const RowItem = ({title, estimatedBudget, leftBudget, manager, type, usedBudget} : rowItemProps) => {
  return (
    <div className="grid grid-cols-9 items-center gap-x-2 p-3 border-b-2 min-w-[35rem]">
      <h4 className="text-slate-700 font-semibold text-base col-span-2">
        {title}
      </h4>
      <h4 className="text-slate-500 text-sm font-semibold">{ type }</h4>
      <h4 className="text-slate-500 text-sm font-semibold col-span-2">{manager} </h4>
      <h4 className="text-slate-500 text-sm font-semibold">{estimatedBudget} </h4>
      <h4 className="text-slate-500 text-sm font-semibold">{usedBudget} </h4>
      <h4 className="text-slate-500 text-sm font-semibold">{leftBudget} </h4>

      <h4>
        <Eye className="w-6 h-5 hover:cursor-pointer hover:text-gray-500" />
      </h4>
    </div>
  );
};

export default RowItem;
