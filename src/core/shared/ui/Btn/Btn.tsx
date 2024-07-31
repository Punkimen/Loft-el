"use client";
import {ButtonHTMLAttributes, ReactNode} from "react";
import Link, {LinkProps} from "next/link";
import cn from "classnames";
import s from "./Btn.module.css";

type AsLinkOrBtnType = "link" | "button";

interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
interface ILinkProps extends LinkProps {}

type ConditionalProps<T extends AsLinkOrBtnType> = T extends "link" ? ILinkProps : IBtnProps;

interface CommonProps<T extends AsLinkOrBtnType> {
  as: T;
  children: ReactNode;
  className?: string;
  styleBtn?: "reset";
}

type BtnProps<T extends AsLinkOrBtnType> = CommonProps<T> & ConditionalProps<T>;

export const Btn = <T extends AsLinkOrBtnType>({as, children, className, styleBtn, ...props}: BtnProps<T>) => {
  const classStr = cn(s.btn, className, styleBtn && s[`btn_${styleBtn}`]);

  if (as === "link") {
    return (
      <Link className={classStr} {...(props as unknown as ILinkProps)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classStr} {...(props as IBtnProps)}>
      {children}
    </button>
  );
};
