import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobeAltIcon, MenuIcon, SearchIcon } from "@heroicons/react/outline";
import { UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import { DateRangePicker, RangeKeyDict, Range } from "react-date-range";

import { Logo, LogoShorter } from "../lib/icons";
import { Context } from "../context/ContextProvider";

function Header() {
  const router = useRouter();
  const [openCalendar, setOpenCalendar] = useState(false);
  const { topSearch, setTopSearch, date, setDate } = useContext(Context);
  const [guests, setGuests] = useState(1);
  const logoColor = router.pathname === "/" ? "white" : "red";

  return (
    <header>
      <div className="py-3 flex justify-between items-center px-2">
        {/* Left */}
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Logo color={logoColor} className="hidden md:inline" />
          <LogoShorter color={logoColor} className="md:hidden" />
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
            onFocus={() => setOpenCalendar(true)}
          />
          {openCalendar && (
            <div className="flex flex-col items-center justify-center absolute top-auto left-[50%] right-[50%] mt-2">
              <DateRangePicker
                onChange={(item: RangeKeyDict) => setDate(item["pick-date"])}
                moveRangeOnFirstSelection={false}
                ranges={[date]}
                direction="horizontal"
              />
              <div className="flex items-center justify-around bg-white w-[558px]">
                <h3 className="whitespace-nowrap">Number of guests</h3>
                <div className="relative p-3 rounded-md w-32">
                  <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                    <UsersIcon className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
                    type="number"
                    name="guests"
                    min="1"
                    max="4"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                  />
                </div>
                <button
                  onClick={() => router.push("/places")}
                  className="bg-green-500 text-white py-2 px-4 rounded-full"
                >
                  Confirm
                </button>
                <button
                  className="bg-red-500 text-white p-2 px-4 rounded-full"
                  onClick={() => setOpenCalendar(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
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
