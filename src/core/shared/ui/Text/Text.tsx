import {FC, ReactNode} from "react";
import cn from "classnames";
import s from "./Text.module.css";
import {IBaseComponent} from "@/core/shared";

interface ITextProps extends IBaseComponent {
  children: ReactNode;
}

export const Text: FC<ITextProps> = ({children, isHidden, className}) => {
  if (isHidden) return null;
  return <div className={cn(s.text, className)}>{children}</div>;
};
