import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Hotel, MessageCircleMore } from "lucide-react";


interface ManagerCardProps {
  data: {type: string,
  name: string,
  manager: string,
  position: string}
}


const ManagerCard = ({data} : ManagerCardProps) => {

  const { type, name, manager, position } = data

  return (
    <>
    <div className="flex items-center gap-x-1 pl-4">
      <h1 className="text-slate-600 font-bold">{type} -</h1>
      <h4 className="h4-bold text-slate-700">{ name }</h4>
    </div>
    <div className="flex gap-x-2 items-center bg-[#E3F4FF] rounded-md max-w-[300px] ml-4 px-3 py-2">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png" />
        </Avatar>
        <div className="flex flex-col gap-0 w-full">
          <h3 className="text-base  font-semibold text-slate-700">
            {manager}
          </h3>
          <div className="flex justify-between items-center w-full">
            <p className="text-[13px] font-medium text-slate-500">
              {position}
            </p>
            <div className="flex gap-x-1">
              <span className="bg-white rounded-full p-1 hover:cursor-pointer">
                <MessageCircleMore className="text-indigo-700 w-4 h-4" />
              </span>
              <span className="bg-white rounded-full p-1 hover:cursor-pointer">
                <Hotel className="text-indigo-700 w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default ManagerCard