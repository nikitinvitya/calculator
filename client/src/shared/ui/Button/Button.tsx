import cls from './Button.module.scss'
import React from "react";
import {classNames} from "shared/lib/classNames";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({className, children, onClick}: ButtonProps) => {
  return (
    <button
      className={classNames(cls.Button, {}, [className])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
