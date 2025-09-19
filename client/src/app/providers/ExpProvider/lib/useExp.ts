import {useContext} from "react";
import {ExpContext} from "./ExpContext";
import {MAX_SYMBOLS_IN_EXP} from "../../../../shared/const/const";

export interface UseExpResult {
  changeExp: (symbol: string) => void;
  clearExp: () => void;
  deleteLast: () => void;
  exp: string;
}

export const useExp = (): UseExpResult => {
  const {exp, setExp} = useContext(ExpContext)

  const changeExp = (symbol: string) => {
    setExp(prev => {
      if (prev.length > MAX_SYMBOLS_IN_EXP) return prev
      const lastNumber = prev.split(/[\+\-\*\/]/).pop()
      const lastSymbol = prev.slice(-1)

      if (['+', '*', '/'].includes(symbol) && prev === '0') return prev
      else if (['+', '-', '*', '/', '.'].includes(symbol) && ['+', '-', '*', '/'].includes(lastSymbol)) return prev

      if (symbol === '%') {
        if (!lastNumber) return prev
        const withoutLast = prev.slice(0, prev.length - lastNumber.length)
        const percentValue = String(parseFloat(lastNumber) / 10)
        return withoutLast + percentValue
      }

      else if (symbol === '.') {
        if (prev === '0') return '0.'
        if (lastNumber?.includes('.')) return prev;
        return prev + symbol
      }

      else if (prev === '0' && symbol !== '.') return symbol
      else return prev + symbol
    })
  }

  const clearExp = () => {
    setExp('0')
  }

  const deleteLast = () => {
    setExp(prev => {
      if (prev.length === 1) {
        return '0'
      }
      return prev.slice(0, prev.length - 1)
    })
  }

  return {exp, changeExp, clearExp, deleteLast}
}