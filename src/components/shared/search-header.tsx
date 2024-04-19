import { Search } from "lucide-react"
import { Input } from "../ui/input"

const SearchHeader = () => {
  return (
    <div className="sm:min-w-[450px]  md:min-w-[300px] lg:min-w-[400px] xl:min-w-[500px] pl-1 flex items-center h-full  relative">
        <Input
          type="text"
          placeholder="Search ..."
          className="w-full bg-gray-100 text-slate-600 base-medium rounded-lg md:pb-3" />
          <Search className="absolute right-4  top-1 sm:top-2 text-gray-400"/>
    </div>
  )
}

export default SearchHeader