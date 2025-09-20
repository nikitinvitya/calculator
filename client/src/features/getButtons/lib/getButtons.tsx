import cls from '../../../widgets/DigitPanel/ui/DigitPanel.module.scss'
import DeleteIcon from '../../../shared/assets/icons/DeleteIcon.svg'

interface getButtonProps {
  changeExp: (symbol: string) => void;
  clearExp: () => void;
  deleteLast: () => void;
  calcResult: () => void;
}

export const getButtons = ({changeExp, clearExp, deleteLast, calcResult}: getButtonProps) => [
    {children: "AC", onClick: clearExp, className: cls.specialBtn},
    {children: <DeleteIcon className={cls.deleteLastBtn}/>, onClick: deleteLast, className: cls.specialBtn},
    {children: "%", onClick: () => changeExp("%"), className: cls.specialBtn},
    {children: "÷", onClick: () => changeExp("÷"), className: cls.operationsBtn},

    {children: "7", onClick: () => changeExp("7"), className: cls.digitsBtn},
    {children: "8", onClick: () => changeExp("8"), className: cls.digitsBtn},
    {children: "9", onClick: () => changeExp("9"), className: cls.digitsBtn},
    {children: "×", onClick: () => changeExp("×"), className: cls.operationsBtn},

    {children: "4", onClick: () => changeExp("4"), className: cls.digitsBtn},
    {children: "5", onClick: () => changeExp("5"), className: cls.digitsBtn},
    {children: "6", onClick: () => changeExp("6"), className: cls.digitsBtn},
    {children: "-", onClick: () => changeExp("-"), className: cls.operationsBtn},

    {children: "1", onClick: () => changeExp("1"), className: cls.digitsBtn},
    {children: "2", onClick: () => changeExp("2"), className: cls.digitsBtn},
    {children: "3", onClick: () => changeExp("3"), className: cls.digitsBtn},
    {children: "+", onClick: () => changeExp("+"), className: cls.operationsBtn},

    {children: "0", onClick: () => changeExp("0"), className: [cls.digitsBtn, cls.zero].join(' ')},
    {children: ".", onClick: () => changeExp("."), className: cls.digitsBtn},
    {children: "=", onClick: () => calcResult(), className: cls.operationsBtn},
  ]
;