import ChartCard from "./chart-card";

// * Fetch data from API

// * Dummy Data
const chartData = [
  { type: "Program", completed: 6, inprogress: 3, delayed: 1 },
  { type: "Project", completed: 10, inprogress: 23, delayed: 6 },
  { type: "Phase", completed: 46, inprogress: 23, delayed: 18 },
  { type: "Milestones", completed: 54, inprogress: 7, delayed: 38 },
];


const ProgramChart = () => {
  return (
    <div className="w-full flex items-center gap-8 pb-5 overflow-x-scroll no-scrollbar ">
        {chartData.map((data, idx) => (
      <div key={idx} className="min-w-[300px] sm:min-w-[380px]">
          <ChartCard  {...data} />
      </div>
        ))}
    </div>
  );
};

export default ProgramChart;
