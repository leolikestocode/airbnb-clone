import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobeAltIcon, MenuIcon, SearchIcon } from "@heroicons/react/outline";
import { UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { signIn, useSession, signOut } from "next-auth/react";

import { Logo, LogoShorter } from "../lib/icons";
import { Context } from "../context/ContextProvider";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [openCalendar, setOpenCalendar] = useState(false);
  const { topSearch, setTopSearch, date, setDate } = useContext(Context);
  const [guests, setGuests] = useState(router.query.guests || 2);
  const logoColor = router.pathname === "/" ? "white" : "red";
  const bgColor = router.pathname === "/" ? "bg-black" : "bg-white";

  const searchPlaces = () => {
    router.push({
      pathname: "/places",
      query: {
        search: topSearch,
        startDate: date.startDate?.toISOString(),
        endDate: date.endDate?.toISOString(),
        guests,
      },
    });
    setOpenCalendar(false);
  };

  return (
    <header className={`sticky top-0 z-50 ${bgColor}`}>
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
            <div className="flex flex-col items-center justify-center absolute top-auto left-[50%] right-[50%] mt-2 z-10">
              <DateRangePicker
                onChange={(item: RangeKeyDict) => setDate(item["pick-date"])}
                moveRangeOnFirstSelection={false}
                ranges={[date]}
                minDate={new Date()}
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
                    min="2"
                    max="4"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                  />
                </div>
                <button
                  onClick={searchPlaces}
                  className="bg-green-500 text-white py-2 px-4 rounded-full disabled:bg-gray-500"
                  disabled={topSearch.length < 3}
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
            {session ? (
              <img
                src={session.user?.image || ""}
                alt={session.user?.name || ""}
                className="h-7 ml-2 rounded-full"
                onClick={() => signOut()}
              />
            ) : (
              <UserCircleIcon
                className="text-gray-500 h-7 ml-2"
                onClick={() => signIn()}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
