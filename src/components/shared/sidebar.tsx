import SidebarRoutes from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full  shadow-slate-500 flex flex-col items-center overflow-y-auto no-scrollbar  rounded-r-2xl">
      <div className="p-4 py-2">
        <img height={150} width={150} className="rounded-full w-24 h-24" alt="logo svg" src="/assets/images/logo.svg" />
      </div>
      <div className="flex flex-col w-full h-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
