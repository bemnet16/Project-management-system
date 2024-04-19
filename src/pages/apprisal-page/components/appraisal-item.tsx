import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

interface appraisalItemProps{
    title: string;
    
}

const AppraisalItem = ({title} : appraisalItemProps) => {
  return (
    <div className="grid grid-cols-8 items-center gap-x-2 p-3 border-b-2 min-w-[35rem]">
      <h4 className="text-slate-700 font-semibold text-base col-span-2">
        Project {title}
      </h4>
      <h4 className="text-blue-800 text-sm font-semibold">80%</h4>
      <h4 className="text-blue-800 text-sm font-semibold">77%</h4>
      <h4 className="text-blue-800 text-sm font-semibold">86%</h4>
      <h4 className="text-blue-800 text-sm font-semibold">58%</h4>
      <Badge className="bg-green-300 w-fit">On Time</Badge>
      <h4>
        <Eye className="w-6 h-5 hover:cursor-pointer hover:text-gray-500" />
      </h4>
    </div>
  );
};

export default AppraisalItem;
