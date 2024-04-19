import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import SearchNavbar from "@/components/shared/search-navbar";
import PathLink from "@/components/shared/path-link";
import SummaryTab from "./components/summary-tab";
import ManagerCard from "@/components/common/manager-card";


const paths = [
  {
    name: "Program Management",
    link: "/project",
  },
];

const ProjectPage = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 pb-6 relative">

      <SearchNavbar />

      <PathLink paths={paths} current={"Project"} />

      <ManagerCard data={{type: "Program", manager: "Bemnet Adugnaw", name:"Software Developemnt", position: "Software Engineer (CEO)" }} />

      <div className="w-full flex justify-between items-center px-2">
        <h2 className="h3-bold">Summary</h2>
        <div className="flex gap-x-2">
          <Button className="primary-button">
            <Link to="/report/project/idforprogram">See Report</Link>
          </Button>

          <Button className="primary-button">
            <Link to="/project/create">Create project</Link>
          </Button>
        </div>
      </div>

      <SummaryTab />
    </div>
  );
};

export default ProjectPage;
