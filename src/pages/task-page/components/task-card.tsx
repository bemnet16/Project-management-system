import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const TaskCard = () => {
  return (
    <>
      <p className="base-semibold">Create a Front Page</p>
      <p className="text-xs">
        submission date <span className="font-bold">21-03-2024</span>
      </p>
      <div className="w-full flex justify-end items-center mt-4 mb-0 ">
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png" />
        </Avatar>
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png" />
        </Avatar>
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png" />
        </Avatar>
      </div>
      <Button className="ml-auto text-sm text-blue-700 hover:text-blue-500 font-bold px-0">Move</Button>
    </>
  );
};

export default TaskCard;
