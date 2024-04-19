// import { columns } from "../components/columns";
// import { DataTable } from "../components/data-table";
// import { Task, taskSchema } from "./data/schema"

// import { tasksList } from "./data/tasks";
// import { programTableType } from "@/types";

// Simulate a database read for tasks.

// async function getTasks() {
//   const data = await fs.readFile(
//     path.join(process.cwd(), "src/pages/program/tasks/data/tasks.json")
//   )

//   const tasks = JSON.parse(data.toString())

//   return z.array(taskSchema).parse(tasks)
// }

// export default function TaskPage() {
//   const tasks : programTableType[] = tasksList;

//   useEffect(() => {
//     getTasks().then((tasks) => {
//       setTasks(tasks)
//     })
//   }, [tasks]);

//   if (!tasks) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="h-full flex-1 flex-col space-y-8 lg:p-4 md:flex">
//         <DataTable data={tasks} columns={columns} />
//       </div>
//     </>
//   );
// }
