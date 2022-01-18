import { useRouter } from "next/router";
import { useContext } from "react";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
} from "@heroicons/react/outline";

import { Logo, LogoShorter } from "../lib/icons";
import { Context } from "../context/ContextProvider";

function Header() {
  const router = useRouter();
  const { topSearch, setTopSearch } = useContext(Context);

  return (
    <header>
      <div className="py-3 flex justify-between items-center px-2">
        {/* Left */}
        <div onClick={() => router.push("/")}>
          <Logo color="white" className="hidden md:inline" />
          <LogoShorter color="white" className="md:hidden" />
        </div>

        {/* Center */}
        <div className="relative p-3 rounded-md w-52 md:w-96">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
            type="text"
            placeholder="Search"
            value={topSearch}
            onChange={(e) => setTopSearch(e.target.value)}
          />
        </div>

        {/* Right */}
        <div className="flex items-center space-x-3">
          <span className="text-white font-semibold text-sm flex-1 whitespace-nowrap hidden md:static">
            Become a host
          </span>
          <GlobeAltIcon className="text-white db w-6 hidden md:static" />
          <div className="flex rounded-full bg-white p-2">
            <MenuIcon className="text-gray-500 w-5" />
            <UserCircleIcon className="text-gray-500 h-7 ml-2" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
