import React, {createContext} from "react";

interface ResultContextProps {
  result?: string;
  setResult?: React.Dispatch<React.SetStateAction<string>>;
}

export const ResultContext = createContext<ResultContextProps>({})