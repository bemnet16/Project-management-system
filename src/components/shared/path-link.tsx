import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";

interface pathLinkProps {
  paths: { name: string; link: string }[];
  current: string;
}

const PathLink = ({ paths, current }: pathLinkProps) => {
  return (
    <>
      <div className="hidden sm:flex items-center gap-x-2 pl-3">
        {paths.map(({ name, link }, index) => (
          <Link key={index} className="small-medium hover:underline" to={link}>
            {name} &gt;
          </Link>
        ))}

        <span className="small-regular bg-[#F2FAFF] px-2 py-[1px] border-2 border-[#CACACA] text-[#918e8e] rounded-md pb-1">
          {current}
        </span>
      </div>
      <Separator className=" bg-gray-50" />
    </>
  );
};

export default PathLink;
