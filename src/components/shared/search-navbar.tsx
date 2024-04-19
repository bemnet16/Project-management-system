import NavbarRoutes from "./navbar-routes";
import SearchHeader from "./search-header";

const SearchNavbar = () => {
  return (
    <div className="hidden sm:block sticky top-0 py-2 bg-white z-50  w-full ">
      <NavbarRoutes>
        <SearchHeader />
      </NavbarRoutes>
    </div>
  );
};

export default SearchNavbar;
