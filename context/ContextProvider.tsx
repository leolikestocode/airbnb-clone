import { createContext, ReactElement, useState } from "react";
import { addDays } from "date-fns";
import { Range } from "react-date-range";

import { ICoordinates } from "../../types/general";
import { defaultCoordinates } from "../lib/helpers";

interface IContext {
  topSearch: string;
  setTopSearch: (_: string) => void;
  date: Range;
  setDate: (_: Range) => void;
  selectedLocation: ICoordinates;
  setSelectedLocation: (_: ICoordinates) => void;
}

const rangeDate = {
  startDate: new Date(),
  endDate: addDays(new Date(), 3),
  key: "pick-date",
};

export const Context = createContext<IContext>({
  topSearch: "",
  setTopSearch: (_: string) => {},
  date: rangeDate,
  setDate: (_: Range) => {},
  selectedLocation: defaultCoordinates,
  setSelectedLocation: (_: ICoordinates) => {},
});

function ContextProvider({ children }: { children: ReactElement }) {
  const [topSearch, setTopSearch] = useState("");
  const [date, setDate] = useState<Range>(rangeDate);
  const [selectedLocation, setSelectedLocation] =
    useState<ICoordinates>(defaultCoordinates);

  return (
    <Context.Provider
      value={{
        topSearch,
        setTopSearch,
        date,
        setDate,
        selectedLocation,
        setSelectedLocation,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
