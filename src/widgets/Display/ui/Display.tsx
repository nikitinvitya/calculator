import {classNames} from "shared/lib/classNames";
import cls from './Display.module.scss'
import {useExp} from "app/providers/ExpProvider/lib/useExp";
import {useEffect, useState} from "react";

interface DisplayProps {
  className?: string;
}

export const Display = (props: DisplayProps) => {
  const {exp} = useExp()
  const [fontSize, setFontSize] = useState(cls.fontDisplayDefault);


  useEffect(() => {
    const length = exp.length
    if(length > 13) {
      setFontSize(cls.fontDisplayM)
    } else if(length > 8) {
      setFontSize(cls.fontDisplayL)
    } else
      setFontSize(cls.fontDisplayDefault)
  }, [exp])

  return (
    <div className={classNames(cls.Display, {}, [fontSize])}>
      {exp}
    </div>
  );
};

