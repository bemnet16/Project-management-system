import { Button } from "@/components/ui/button";

const AppraisalCard = () => {
  return (
    <>
      <p className="base-semibold">Create a Front Page</p>
      <p className="text-sm">
        Today’s Fortune 500 list rolls over faster than ever. Today, only 12
        percent of the companies that m
      </p>
      {/* <div className="w-full flex justify-end items-center mt-4 mb-0 ">
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png" />
        </Avatar>
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png" />
        </Avatar>
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png" />
        </Avatar>
      </div> */}
      <Button className="ml-auto text-sm bg-[#D9D9D9] rounded-full font-bold h-6">
        View
      </Button>
    </>
  );
};

export default AppraisalCard;

interface smallCardProps {
  title: string;
  description: string | null;
  bg: string;
}

export const SmallCard = ({ bg, description, title }: smallCardProps) => {
  return (
    <div className={`min-w-[250px] max-h-[150px] flex flex-col gap-6 text-slate-700 border-2 bordeer-[#5AFFD7] rounded-xl p-4 ${bg}`}>
      <p className=" text-slate-600 text-sm font-semibold">{title} Team Apprisal report</p>
      {description && <p className="text-sm">{description}</p>}
      <Button className="ml-auto mt-auto text-sm bg-[#D9D9D9] rounded-full font-bold h-6">
        View
      </Button>
    </div>
  );
};
