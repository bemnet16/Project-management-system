
import NavbarRoutes from "@/components/shared/navbar-routes";
import PathLink from "@/components/shared/path-link";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DataTable } from "./components/data-table";
import { mileList } from "./components/mile";
import { columns } from "./components/columns";

const paths = [
  {
    name: "Program Management",
    link: "/program",
  },
  {
    name: "Project",
    link: "/Project/projectId",
  },
  {
    name: "Phase",
    link: "/phase/projectId/phaseId",
  },
  {
    name: "Milestone",
    link: "/phase/projectId/phaseId",
  },
];


const MilestonePage = () => {
  return (
     <div className="flex flex-col gap-y-4 pb-6 relative">
      <div className="hidden sm:block sticky top-0 py-2 bg-white z-50  w-full ">
        <NavbarRoutes>
          <>&nbsp;</>
        </NavbarRoutes>
      </div>

      <PathLink paths={paths} current="Milestone" />
      
      
       <div className="w-full flex justify-end items-center px-2">
        {/* <h2 className="h3-bold">Summary</h2> */}
        <div className="flex gap-x-2">
          <Button className="primary-button">
            <Link to="/report/phase/idforproject">See Report</Link>
          </Button>

          <Button className="primary-button">
            <Link to="/milestone/create">Create Milestone</Link>
          </Button>
        </div>
      </div>

      <DataTable data={mileList} columns={columns} />
      </div>

      
  )
}

export default MilestonePage