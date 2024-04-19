
import BudgetTimeCard from "@/components/common/budget-time-card";
import ChartCard from "@/components/common/chart-card";

// * Fetch data from API


// * Dummy Data
const chartData = [
  { type: "Budget", estimated: 1000000, used: 876545, left: 123455 },
  { type: "Time", estimated: 12, used: 8, left: 4 },
];

const ChartView = () => {
  return (
     <div className="w-full flex items-center gap-8 pb-5 overflow-x-scroll no-scrollbar ">
      <div  className="min-w-[300px] sm:min-w-[380px]">
          <ChartCard  data={ { type: "Program", completed: 10, inprogress: 23, delayed: 6 }} />
      </div>

        {chartData.map((data, idx) => (
           <div  key={idx} className="min-w-[300px] sm:min-w-[380px]">
          <BudgetTimeCard key={idx} {...data} />
          </div>
        ))}
    </div>
  )
}

export default ChartView