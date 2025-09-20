import {useContext} from "react";
import {ResultContext} from "./ResultContext";
import {getResult} from "shared/api/getResult";

export interface UseResult {
  calcResult: (exp: string) => void;
  clearResult: () => void;
  result: string;
}

export const useResult = ():UseResult => {
  const {result, setResult} = useContext(ResultContext)

  const calcResult = async (exp: string) => {
    try {
      const data = await getResult(exp)
      if(data.error) {
        setResult("Error")
      }
      let result = data.result
      if (typeof result === "number") {
        result = parseFloat(result.toFixed(20))
      }

      setResult(String(result))
    } catch (e) {
      console.log(e)
      setResult("Error")
    }
  }

  const clearResult = () => {
    setResult("");
  };

  return {result, clearResult, calcResult}

}