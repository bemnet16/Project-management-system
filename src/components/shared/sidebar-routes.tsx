import { useState } from "react";

import { LogOut, Settings, Home, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { cn } from "@/lib/utils";

import SidebarItem from "./sidebar-item";
import { DahshboardRoutes, ProgramManagementRoutes, humanResourseRoutes } from "@/constants";



const SidebarRoutes = () => {

  const [active, setActive] = useState("dashboard");


  return (
    <div className="flex flex-col w-full h-full justify-between px-1">
      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col w-full items-center gap-y-2 text-slate-500 text-[16px] font-[500] transition-all hover:text-slate-600  "
        >
          <AccordionItem value="dashboard" className="w-full  ">
            <AccordionTrigger
              className={cn(
                "w-full hover:bg-sky-200 rounded-full px-4 no-underline",
                `${active == "dashboard" ? "bg-sky-200" : ""}`
              )}
              onFocus={() => setActive("dashboard")}
            >
              <div className="flex items-center gap-x-2">
                <Home size={22} className={"text-slate-500"} />
                Dashboard
              </div>
            </AccordionTrigger>
            <AccordionContent className=" pl-5">
              {DahshboardRoutes.map((route, idx) => {
                return (
                  <SidebarItem
                    href={route.href}
                    key={idx}
                    icon={route.icon}
                    label={route.label}
                  />
                );
              })}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="humanresourse" className="w-full  ">
            <AccordionTrigger
              className={cn(
                "w-full hover:bg-sky-200 rounded-full px-4",
                `${active == "hr" ? "bg-sky-200" : ""}`
              )}
              onFocus={() => setActive("hr")}
            >
              <div className="flex items-center gap-x-2 py-0">
                <Users size={22} className={"text-slate-500"} />
                Human Resourse
              </div>
            </AccordionTrigger>
            <AccordionContent className=" pl-5">
              {humanResourseRoutes.map((route, idx) => {
                return (
                  <SidebarItem
                    href={route.href}
                    key={idx}
                    icon={route.icon}
                    label={route.label}
                  />
                );
              })}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="programmanger" className="w-full  ">
            <AccordionTrigger
              className={cn(
                "w-full hover:bg-sky-200 rounded-full px-4",
                `${active == "programmanger" ? "bg-sky-200" : ""}`
              )}
              onFocus={() => setActive("programmanger")}
            >
              <div className="flex items-center gap-x-2 py-0 ">
                <Users size={22} className={"text-slate-500"} />
                Project Management
              </div>
            </AccordionTrigger>
            <AccordionContent className=" pl-5">
              {ProgramManagementRoutes.map((route, idx) => {
                return (
                  <SidebarItem
                    href={route.href}
                    key={idx}
                    icon={route.icon}
                    label={route.label}
                  />
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mb-4">
        <SidebarItem icon={Settings} label="settings" href="/settings" />
        <SidebarItem icon={LogOut} label="Logout" href="/logout" />
      </div>
    </div>
  );
};

export default SidebarRoutes;
