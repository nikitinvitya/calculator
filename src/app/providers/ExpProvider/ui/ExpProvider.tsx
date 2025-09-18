import React, {useMemo, useState} from 'react';
import {ExpContext} from "../lib/ExpContext";

interface ExpProviderProps {
  children?: React.ReactNode;
}

const ExpProvider = ({children}: ExpProviderProps) => {

  const [exp, setExp] = useState('0')

  const defaultProps = useMemo(() => ({
    exp: exp,
    setExp: setExp,
  }), [exp])

  return (
    <ExpContext.Provider value={defaultProps}>
      {children}
    </ExpContext.Provider>
  );
};

export default ExpProvider;