import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import SearchNavbar from "@/components/shared/search-navbar";
import PathLink from "@/components/shared/path-link";
import SummaryTab from "./components/summary-tab";

const paths = [
  {
    name: "Program Management",
    link: "/program",
  },
];

const ProgramPage = () => {
  return (
    <div className="flex flex-col gap-y-4 pb-6 relative">

      <SearchNavbar />

      <PathLink paths={paths} current={"Programme"} />

      <div className="w-full flex justify-between items-center px-2">
        <h2 className="h3-bold">Summary</h2>
        <Button className="primary-button">
          <Link to="/program/create">Create Program</Link>
        </Button>
      </div>

      <SummaryTab />
      
    </div>
  );
};

export default ProgramPage;
