import { createContext, ReactElement, useState } from "react";
import { addDays } from "date-fns";
import { Range } from "react-date-range";
interface IContext {
  topSearch: string;
  setTopSearch: (_: string) => void;
  date: Range;
  setDate: (_: Range) => void;
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
});

function ContextProvider({ children }: { children: ReactElement }) {
  const [topSearch, setTopSearch] = useState("");
  const [date, setDate] = useState<Range>(rangeDate);

  return (
    <Context.Provider value={{ topSearch, setTopSearch, date, setDate }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
