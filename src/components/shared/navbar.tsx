import MobileSidebar from "./mobile-sidebar";
import NavbarRoutes from "./navbar-routes";

export const Navbar = () => {
  return (
    <div className="p-3 flex items-center justify-between w-full h-full bg-white z-auto">
      <div>
        <MobileSidebar />
      </div>
      <div className="h-full bg-white">
        <NavbarRoutes children={<span></span>} />
      </div>
    </div>
  );
};
