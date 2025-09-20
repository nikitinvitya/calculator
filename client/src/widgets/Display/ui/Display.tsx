import {classNames} from "shared/lib/classNames";
import cls from './Display.module.scss'
import {useExp} from "app/providers/ExpProvider/lib/useExp";
import {useEffect, useState} from "react";
import {useResult} from "../../../app/providers/ResultProvider/lib/useResult";

interface DisplayProps {
  className?: string;
}

export const Display = (props: DisplayProps) => {
  const {exp} = useExp()
  const {result} = useResult()
  const [fontSize, setFontSize] = useState(cls.fontDisplayDefault);


  useEffect(() => {
    const exp_length = exp.length
    const result_length = result.length
    if(exp_length > 13 || result_length > 13) {
      setFontSize(cls.fontDisplayM)
    } else if(exp_length > 8 || result_length > 8) {
      setFontSize(cls.fontDisplayL)
    } else
      setFontSize(cls.fontDisplayDefault)
  }, [exp, result])

  return (
    <div className={classNames(cls.Display, {}, [fontSize])}>
      {result ?
        <>
          <div>{exp}</div>
          <div>{result}</div>
        </>
        :
        <>
          <div>{exp}</div>
        </>
      }
    </div>
  );
};

