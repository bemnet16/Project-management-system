import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { BellRing } from "lucide-react";

const NavbarRoutes = ({ children }: { children: React.ReactNode }) => {
  // const { pathname } = useLocation();

  return (
    <>
      <div className="flex justify-between items-center w-full h-full gap-x-2 ">
        {children}

        <div className="min-w-[90px] flex items-center gap-x-2">
          <Link to="/notification">
            <Button size="sm" variant={"ghost"}>
              <BellRing className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/profile" className="flex items-center">
            {/* <Button size="sm" variant={"ghost"}> */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZIG7rVkxZNSk9ahTmjKCe1jfRPqRS0NyFtQy8BoLjw&s"
              className="rounded-full w-10 h-10 mr-2"
              alt=""
            />

            <div className="hidden md:hidden lg:flex flex-col gap-y-0 pr-4">
              <h1 className="font-medium m-0">Bemnet Adugnaw</h1>
              <p className="text-sky-400 text-sm m-0 pl-2">Human resourse</p>
            </div>
            {/* </Button> */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarRoutes;
