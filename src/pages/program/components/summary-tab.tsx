import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ProgramChart from "./program-chart";
import ProgramGraph from "./program-graph";
import { DataTable } from "./data-table";
import { demmyPrograms } from "./demmyPrograms";
import { columns } from "./columns";




// Simulate a database read for tasks.

// async function getTasks() {
//   const data = await fs.readFile(
//     path.join(process.cwd(), "src/pages/program/tasks/data/tasks.json")
//   )

//   const tasks = JSON.parse(data.toString())

//   return z.array(taskSchema).parse(tasks)
// }






const SummaryTab = () => {

 // useEffect(() => {
  //   getTasks().then((tasks) => {
  //     setTasks(tasks)
  //   })
  // }, [tasks]);


  return (
    <Tabs defaultValue="table" className="w-full p-1">

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
        <ProgramChart />
      </TabsContent>

      <TabsContent value="table">
        <DataTable data={demmyPrograms} columns={columns} />
      </TabsContent>

      <TabsContent value="graph" className="pt-8 overflow-scroll custom-scrollbar">
        <ProgramGraph />
      </TabsContent>

    </Tabs>
  );
};

export default SummaryTab;
