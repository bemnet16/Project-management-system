import GraphDisplay from "@/components/common/graph-display";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PhaseChart from "./phase-chart";
import { DataTable } from "./data-table";
import { phaseList } from "./phaseList";
import { columns } from "./columns";




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
        <PhaseChart />
      </TabsContent>

      <TabsContent value="table" className="w-full">
        <DataTable data={phaseList} columns={columns} />
      </TabsContent>

      <TabsContent value="graph" className="pt-8 overflow-scroll custom-scrollbar">
        <GraphDisplay />
      </TabsContent>

    </Tabs>
  );
};

export default SummaryTab;
