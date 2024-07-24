"use client";
import {useInView} from "react-intersection-observer";
import {FC, ReactNode} from "react";
import cn from "classnames";
import s from "./Animate.module.css";

type AnimType = "opacity" | "fadeUp" | "skewDown";

interface IAnimateProps {
  anim: AnimType;
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  options?: {
    root?: Element;
    triggerOnce?: boolean;
    threshold?: number; // 0 to 1
  };
}

const animWithOverflow: AnimType[] = ["fadeUp"];

export const Animate: FC<IAnimateProps> = ({delay, className, children, options, anim}) => {
  const {ref, inView} = useInView({
    root: options?.root,
    triggerOnce: options?.triggerOnce || true,
    threshold: options?.threshold || 0.1,
  });

  const SimpleComponent = (
    <div
      ref={ref}
      style={{animationDelay: `${delay || 0}ms`}}
      className={cn(s.animate, className, s[anim], inView && s.animated)}
    >
      {children}
    </div>
  );

  const OverflowComponent = (
    <div ref={ref} className={cn(s.overflow)}>
      <div
        style={{animationDelay: `${delay || 0}ms`}}
        className={cn(s.animate, className, s[anim], inView && s.animated)}
      >
        {children}
      </div>
    </div>
  );
  return animWithOverflow.includes(anim) ? OverflowComponent : SimpleComponent;
};
