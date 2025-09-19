import React from 'react';
import './styles/index.scss'
import {classNames} from "../shared/lib/classNames";
import {CalculatorBody} from "../widgets/CalculatorBody";

const App = () => {
  return (
    <div className={classNames('app')}>
      <CalculatorBody />
    </div>
  );
};

export default App;