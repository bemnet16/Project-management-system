import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import { StepBack, StepForward } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const PagesLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="h-full w-full pt-2 bg-gray-50">
      <div className="h-[90px] sm:hidden fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>

      {showSidebar && (
        <div className="h-full hidden md:flex flex-col w-64 fixed inset-y-0  z-50  px-2 bg-slate-50">
          <Sidebar />
        </div>
      )}

      <main className={cn(" min-h-screen pt-[85px] sm:pt-0 md:pt-0 bg-white rounded-xl rounded-tl-2xl flex flex-col relative", `${showSidebar ? "md:ml-64" : "md:ml-0"}`)}>
        <div className="sm:pl-3 ">
          <Outlet />
        </div>
      </main>
    
      <span className={cn("hidden md:block bg-white  fixed  top-4 left-5  z-50 rounded-full hover:bg-slate-50", `${!showSidebar && "left-[-10px] rounded-md h-10 hover:left-0 top-16 hover:h-24 shadow-md"}`)} onClick={() => setShowSidebar(!showSidebar)}>
      {showSidebar ?  <StepBack className=" w-8 h-8 text-slate-600 cursor-pointer p-1 " /> :   <StepForward className=" w-8 h-8 text-slate-600 cursor-pointer p-1 " />}
      </span>
    </div>
  );
};

export default PagesLayout;
