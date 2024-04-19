import PathLink from "@/components/shared/path-link";
import SearchNavbar from "@/components/shared/search-navbar";
import AppraisalCard, { SmallCard } from "./components/appraisal-card";
import AppraisalItem from "./components/appraisal-item";

const paths = [
  {
    name: "Program Management",
    link: "/program",
  },
  {
    name: "Project",
    link: "/project",
  },
  {
    name: "Apprisal",
    link: "/apprisal",
  },
];

const apprisals = [
  {
    title: "Project",
    bg: "bg-[#98F6E5]",
  },
  {
    title: "Phase",
    bg: "bg-[#98C3F6]",
  },
  {
    title: "Milestone",
    bg: "bg-[#E998F6]",
  },
  {
    title: "Module",
    bg: "bg-[#FFDF8E]",
  },
  {
    title: "Task",
    bg: "bg-[#FEB8BD]",
  },
  {
    title: "Activity",
    bg: "bg-[#B8E5FE]",
  },
];

const ApprisalPage = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 pb-6 relative">
      <SearchNavbar />

      <PathLink paths={paths} current={"Apprisal"} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 px-4">
        <div className="min-w-[250px] flex flex-col gap-6 text-slate-700 bg-[#B6F698] border-2 bordeer-[#5AFFD7] rounded-xl p-4">
          <AppraisalCard />
        </div>
        <div className="min-w-[250px] flex flex-col gap-6 text-slate-700 bg-[#FFA1A1] border-2 bordeer-[#5AFFD7] rounded-xl p-4">
          <AppraisalCard />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-4 p-2">
        {apprisals.map((app, idx) => (
          <SmallCard
            key={idx}
            title={app.title}
            bg={app.bg}
            description={null}
          />
        ))}
      </div>

      <div className="mt-4 border-2 overflow-x-scroll no-scrollbar">
        <div className="grid grid-cols-8 gap-x-2 bg-gray-100 p-2 min-w-[35rem]">
          <h4 className="text-slate-600 text-sm font-medium col-span-2">
            Team
          </h4>
          <h4 className="text-slate-600 text-sm font-medium">Execution Rate</h4>
          <h4 className="text-slate-600 text-sm font-medium">
            Time Utilization
          </h4>
          <h4 className="text-slate-600 text-sm font-medium">Team Work</h4>
          <h4 className="text-slate-600 text-sm font-medium">
            Budget Utilization
          </h4>
          <h4 className="text-slate-600 text-sm font-medium">
            Delivery status
          </h4>
          <h4 className="text-slate-600 text-sm font-medium">View</h4>
        </div>

        {Array.from({ length: 5 }).map((_, idx) => (
          <AppraisalItem key={idx} title={(idx + 1).toString()} />
        ))}
      </div>
    </div>
  );
};

export default ApprisalPage;
