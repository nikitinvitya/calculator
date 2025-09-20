import {classNames} from "shared/lib/classNames";
import cls from './CalculatorBody.module.scss'
import {DigitPanel} from "widgets/DigitPanel";
import {Display} from "widgets/Display";

interface CalculatorBodyProps {
  className?: string;
}

export const CalculatorBody = (options: CalculatorBodyProps) => {
  return (
    <div className={classNames(cls.CalculatorBody)}>
      <Display/>
      <DigitPanel/>
    </div>
  );
};

