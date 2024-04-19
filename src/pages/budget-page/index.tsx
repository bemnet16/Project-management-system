import PathLink from "@/components/shared/path-link";
import SearchNavbar from "@/components/shared/search-navbar";
import ChartView from "./components/chart-view";
import RowItem from "./components/row-item";


const programs = [
    {
        title: "Web Development",
        type: "Material",
        manager: "Bemnet Adugnaw",
        estimatedBudget: "12 Laptops",
        usedBudget: "10 Laptops",
        leftBudget: "2 Laptops"
    },{
        title: "App Development",
        type: "Capital",
        manager: "Bemnet Adugnaw",
        estimatedBudget: 1000000,
        usedBudget: 536434,
        leftBudget: 463566
    },{
        title: "Web Development",
        type: "Material",
        manager: "Bemnet Adugnaw",
        estimatedBudget: "12 Laptops",
        usedBudget: "10 Laptops",
        leftBudget: "2 Laptops"
    },{
        title: "Web Development",
        type: "Material",
        manager: "Bemnet Adugnaw",
        estimatedBudget: "12 Laptops",
        usedBudget: "10 Laptops",
        leftBudget: "2 Laptops"
    },{
        title: "Web Development",
        type: "Material",
        manager: "Bemnet Adugnaw",
        estimatedBudget: "12 Laptops",
        usedBudget: "10 Laptops",
        leftBudget: "2 Laptops"
    }
]

const paths = [
  {
    name: "Program Management",
    link: "/program",
  },
  {
    name: "Budget",
    link: "/budget",
  }
];


const BudgetPage = () => {
  return (
     <div className="w-full flex flex-col gap-y-4 pb-6 relative">
      <SearchNavbar />

      <PathLink paths={paths} current={"Budget"} />
      
      
      <ChartView />

       <div className="mt-4 border-2 overflow-x-scroll no-scrollbar py-2 px-8">
        <div className="grid grid-cols-9 gap-x-2 bg-gray-100 p-2 min-w-[35rem]">
          <h4 className="text-slate-600 text-sm font-medium col-span-2">
            Program
          </h4>
          <h4 className="text-slate-600 text-sm font-medium">
            Budget Type
          </h4>
          <h4 className="text-slate-600 text-sm font-medium col-span-2 ">Manager</h4>
          <h4 className="text-slate-600 text-sm font-medium min-w-[300px]">Estimated Budget</h4>
          <h4 className="text-slate-600 text-sm font-medium">
            Used Budget
          </h4>
          <h4 className="text-slate-600 text-sm font-medium">
            Left Budget
          </h4>
          <h4 className="text-slate-600 text-sm font-medium">View</h4>
        </div>
            {
                programs.map((program, idx) => (
                    <RowItem key={idx} {...program} />
                ))
            }
      </div>

      </div>
  )
}

export default BudgetPage