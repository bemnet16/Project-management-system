import ManagerCard from "@/components/common/manager-card";
import PathLink from "@/components/shared/path-link";
import SearchNavbar from "@/components/shared/search-navbar";
import TaskCard from "./components/task-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const paths = [
  {
    name: "Program Management",
    link: "/program",
  },
  {
    name: "Project",
    link: "/project",
  },
];

const TaskPage = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 pb-6 relative">
      <SearchNavbar />

      <PathLink paths={paths} current={"Task"} />

      <ManagerCard
        data={{
          type: "Project",
          name: "Web Development",
          manager: "Bemnet Adugnaw",
          position: "Software Engineer",
        }}
      />

      <div className="w-full flex justify-between items-center px-2">
        <div></div>
        <Button className="primary-button">
          <Link to="/task/create">Create Task</Link>
        </Button>
      </div>

      <div className="w-full flex justify-between items-start gap-x-2 rounded-xl border-2 overflow-x-scroll no-scrollbar">
        <div className="w-full flex-center flex-col gap-y-2">
          <h1 className="h4-bold text-slate-600">Open</h1>
          {Array.from({ length: 2 }).map((_, idx) => (
            <div
              key={idx}
              className="min-w-[250px] flex flex-col text-slate-700 bg-[#E2FFF8] border-2 bordeer-[#5AFFD7] rounded-xl p-2 pb-0"
            >
              <TaskCard />
            </div>
          ))}
        </div>
        <div className="w-full flex-center flex-col gap-y-2">
          <h1 className="h4-bold text-slate-600">In Progress</h1>
          {Array.from({ length: 1 }).map((_, idx) => (
            <div
              key={idx}
              className="min-w-[250px] flex flex-col text-slate-700 bg-[#67FF64] border-2 bordeer-[#04B000] rounded-xl p-2 pb-0"
            >
              <TaskCard />
            </div>
          ))}
        </div>
        <div className="w-full flex-center flex-col gap-y-2">
          <h1 className="h4-bold text-slate-600">Overdue</h1>
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="min-w-[250px] flex flex-col text-slate-700 bg-[#93B8FF] border-2 bordeer-[#3D73FF] rounded-xl p-2 pb-0"
            >
              <TaskCard />
            </div>
          ))}
        </div>
        <div className="w-full flex-center flex-col gap-y-2">
          <h1 className="h4-bold text-slate-600">completed</h1>
          {Array.from({ length: 2 }).map((_, idx) => (
            <div
              key={idx}
              className="min-w-[250px] flex flex-col text-slate-700 bg-[#FF76FA] border-2 bordeer-[#F000F5] rounded-xl p-2 pb-0"
            >
              <TaskCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
