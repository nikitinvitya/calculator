import {useContext} from "react";
import {ExpContext} from "./ExpContext";
import {MAX_SYMBOLS_IN_EXP} from "shared/const/const";
import {useResult} from "../../ResultProvider/lib/useResult";

export interface UseExpResult {
  changeExp: (symbol: string) => void;
  clearExp: () => void;
  deleteLast: () => void;
  exp: string;
}

export const useExp = (): UseExpResult => {
  const {exp, setExp} = useContext(ExpContext)
  const {result, clearResult} = useResult()

  const mathOperators = ['+', '-', '*', '/'];

  const changeExp = (symbol: string) => {
    if (result) {
      clearResult();
      clearExp();
    }

    setExp(prev => {
      if (prev.length >= MAX_SYMBOLS_IN_EXP) return prev;

      const operatorRegex = /[-+*/]/;
      const lastNumber = prev.split(operatorRegex).pop();
      const lastSymbol = prev.slice(-1);

      if (prev === '0') {
        if (!/[0-9-]/.test(symbol)) return prev;
        if (symbol === '.') return '0.';
        return symbol;
      }

      if (mathOperators.includes(symbol) && mathOperators.includes(lastSymbol)) {
        return prev;
      }

      if (symbol === '.' && lastNumber?.includes('.')) {
        return prev;
      }

      if (symbol === '%') {
        if (!lastNumber) return prev;
        const withoutLast = prev.slice(0, prev.length - lastNumber.length);
        const percentValue = String(parseFloat(lastNumber) / 10);
        return withoutLast + percentValue;
      }

      return prev + symbol;
    });
  };



  const clearExp = () => {
    if(result) {
      clearResult()
    }
    setExp('0')
  }

  const deleteLast = () => {
    if(result) {
      clearResult()
      clearExp()
    }
    setExp(prev => {
      if (prev.length === 1) {
        return '0'
      }
      return prev.slice(0, prev.length - 1)
    })
  }

  return {exp, changeExp, clearExp, deleteLast}
}