import { createContext, ReactElement, useState } from "react";

interface IContext {
  topSearch: string;
  setTopSearch: (_: string) => void;
}

export const Context = createContext<IContext>({
  topSearch: "",
  setTopSearch: (_: string) => {},
});

function ContextProvider({ children }: { children: ReactElement }) {
  const [topSearch, setTopSearch] = useState("");

  return (
    <Context.Provider value={{ topSearch, setTopSearch }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
