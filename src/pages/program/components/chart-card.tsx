import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlarmClockCheck, AudioWaveform, TimerOff } from "lucide-react";
import PiechartPercentage from "./piechart-percentage";

interface ChartCardProps {
  type: string;
  completed: number;
  inprogress: number;
  delayed: number;
}

const ChartCard = ({
  type,
  completed,
  inprogress,
  delayed,
}: ChartCardProps) => {
  const total = completed + inprogress + delayed;
  const comp_per = ((completed / total) * 100).toFixed(2);
  const inpr_per = ((inprogress / total) * 100).toFixed(2);
  const del_per = ((delayed / total) * 100).toFixed(2);

  const pieData = [
    { name: "inprogress", value: inprogress, color: "#f6f34f" },
    { name: "completed", value: completed, color: "#63ef81" },
    { name: "delayed", value: delayed, color: "#f07c5c" },
  ];

  return (
    <Card className="max-w-[300px] sm:max-w-[380px] shadow-md shadow-slate-100 border-2 border-slate-100 rounded-2xl">
     
      <CardHeader>
        <CardTitle className="base-semibold sm:h3-bold text-slate-700">{type}</CardTitle>
      </CardHeader>
      <CardContent className=" flex flex-col md:relative border-slate-50/0">
      
        <div className="text-end md:absolute md:right-0 md:top-0 flex flex-col gap-2 mr-2 text-[12px] sm:text-sm text-slate-500">
          <span className="flex justify-end items-center">
            <span className="bg-[#00D22E] w-4 h-4 rounded-full mr-1 mt-1" />
            completed &nbsp;&nbsp;&nbsp; {comp_per}%
          </span>
          <span className="flex justify-end items-center">
            <span className="bg-[#CDB900] w-4 h-4 rounded-full mr-1 mt-1" /> In
            Progress &nbsp; {inpr_per}%
          </span>
          <span className="flex justify-end items-center">
            <span className="bg-[#CB2703] w-4 h-4 rounded-full mr-1 mt-1" />
            Delayed &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {del_per}%
          </span>
        </div>

        <div className="w-full  ">
          <PiechartPercentage datas={pieData} />
        </div>

        <div className="flex flex-col gap-2 text-[12px] sm:text-sm">
          <h4 className="small-semibold sm:base-semibold text-slate-600">{total} {type} in total</h4>
          <div className="flex-between">
            <p className="text-slate-500">
              {completed} {type}
            </p>
            <Badge className="custom-badge badge-green w-32">
              <AlarmClockCheck className="w-4 h-4 mr-1" />
              Completed
            </Badge>
          </div>
          <div className="flex-between">
            <p className="text-slate-500">
              {inprogress} {type}
            </p>
            <Badge className="custom-badge  badge-yellow w-32">
              <AudioWaveform className="w-4 h-4 mr-1" />
              In Progress
            </Badge>
          </div>
          <div className="flex-between">
            <p className="text-slate-500">
              {delayed} {type}
            </p>
            <Badge className="custom-badge badge-red w-32">
              <TimerOff className="w-4 h-4 mr-1" />
              Delayed
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant={"ghost"}
          className="bg-slate-100 hover:bg-slate-200 my-0 py-0 h-7 ml-auto mt-6"
        >
          See Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ChartCard;
