import {classNames} from "../../../shared/lib/classNames";
import cls from './DigitPanel.module.scss'
import {useExp} from "../../../app/providers/ExpProvider/lib/useExp";
import {Button} from "../../../shared/ui/Button/Button";
import {getButtons} from "../../../features/getButtons";
import {useResult} from "../../../app/providers/ResultProvider/lib/useResult";

export const DigitPanel = () => {
  const {changeExp, clearExp, deleteLast, exp} = useExp();
  const {calcResult} = useResult()
  const buttons = getButtons({changeExp, clearExp, deleteLast, calcResult, exp})

  return (
    <div className={classNames(cls.DigitPanel)}>
      {
        buttons.map((btn) => (
          <Button
            key={btn.children.toString()}
            children={btn.children}
            className={classNames(btn.className, {}, [cls.btn])}
            onClick={btn.onClick}
          />
        ))
      }
    </div>
  );
};

