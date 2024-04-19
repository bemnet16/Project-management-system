import NavbarRoutes from "@/components/shared/navbar-routes";
import PathLink from "@/components/shared/path-link";
import SearchHeader from "@/components/shared/search-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { reportsList } from "./components/reportslist";


const paths = [
  {
    name: "Program Management",
    link: "/program",
  },
  {
    name: "Project",
    link: "/Project/projectId",
  }
];

const ReportPage = () => {
  return (
    <div className="flex flex-col gap-y-4 pb-6 relative">
      <div className="hidden sm:block sticky top-0 py-2 bg-white z-50  w-full ">
        <NavbarRoutes>
          <SearchHeader />
        </NavbarRoutes>
      </div>

      <PathLink paths={paths} current="Report" />
      
       <div className="w-full flex justify-end items-center px-2">
          <Button className="primary-button">
            <Link to="/report/create">Add Report</Link>
          </Button>
      </div>

      <DataTable data={reportsList} columns={columns} />
      
      </div>
      
  )
}

export default ReportPage