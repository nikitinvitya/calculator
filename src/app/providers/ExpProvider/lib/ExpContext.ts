import React, {createContext} from "react";

interface ExpContextProps {
  exp?: string;
  setExp?: React.Dispatch<React.SetStateAction<string>>;
}

export const ExpContext = createContext<ExpContextProps>({})