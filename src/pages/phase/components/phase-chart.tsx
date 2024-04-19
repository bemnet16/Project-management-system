// * Fetch data from API

import BudgetTimeCard from "@/components/common/budget-time-card";
import ChartCard from "@/components/common/chart-card";

// * Dummy Data
const chartData = [
  { type: "Budget", estimated: 1000000, used: 876545, left: 123455 },
  { type: "Time", estimated: 12, used: 8, left: 4 },
];

const PhaseChart = () => {
  return (
    <div className="w-full flex items-center gap-8 pb-5 overflow-x-scroll no-scrollbar ">
       <div  className="min-w-[300px] sm:min-w-[380px]">
      <ChartCard
        data={{ type: "Phase", completed: 46, inprogress: 23, delayed: 18 }}
      />
</div>

      {chartData.map((data, idx) => (
        <div key={idx} className="min-w-[300px] sm:min-w-[380px]">
          <BudgetTimeCard {...data} />
        </div>
      ))}
    </div>
  );
};

export default PhaseChart;
