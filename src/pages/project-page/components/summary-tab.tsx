import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ProjectChart from "./project-chart";
import { DataTable } from "./data-table";
import { columns } from "./columns";

import { projectList } from "./projectList";
import GraphDisplay from "@/components/common/graph-display";



const SummaryTab = () => {
  return (
    <Tabs defaultValue="chart" className="w-full p-1 ">

      <TabsList className="w-full flex justify-around gap-x-10 bg-gray-50 mb-4 py-4">
        <TabsTrigger className="w-full rounded-md text-slate-500" value="chart">
          Chart
        </TabsTrigger>
        <TabsTrigger className="w-full rounded-md text-slate-500" value="table">
          Table
        </TabsTrigger>
        <TabsTrigger className="w-full rounded-md text-slate-500" value="graph">
          Graph
        </TabsTrigger>
      </TabsList>

      <TabsContent className="w-full sm:px-4" value="chart">
        <ProjectChart />
      </TabsContent>

      <TabsContent value="table" className="w-full">
        <DataTable data={projectList} columns={columns} />
      </TabsContent>

      <TabsContent value="graph" className="pt-8 overflow-scroll custom-scrollbar">
        <GraphDisplay />
      </TabsContent>

    </Tabs>
  );
};

export default SummaryTab;
