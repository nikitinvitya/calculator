import React, {useMemo, useState} from 'react';
import {ResultContext} from "../lib/ResultContext";

interface ResProviderProps {
  children?: React.ReactNode;
}

const ResultProvider = ({children}: ResProviderProps) => {

  const [result, setResult] = useState('')

  const defaultProps = useMemo(() => ({
    result: result,
    setResult: setResult,
  }), [result])

  return (
    <ResultContext.Provider value={defaultProps}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultProvider;