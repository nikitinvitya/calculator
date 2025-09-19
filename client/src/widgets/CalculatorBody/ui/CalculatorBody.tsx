import {classNames} from "../../../shared/lib/classNames";
import cls from './CalculatorBody.module.scss'
import {DigitPanel} from "../../DigitPanel";
import {Display} from "../../Display";

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

