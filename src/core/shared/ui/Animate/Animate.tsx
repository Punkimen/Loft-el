"use client";
import {useInView} from "react-intersection-observer";
import {ElementType, FC, ReactNode} from "react";
import cn from "classnames";
import s from "./Animate.module.css";

type AnimType = "opacity" | "fadeUp" | "skewDown" | "bounce";

interface IAnimateProps {
  anim: AnimType;
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  options?: {
    root?: Element;
    triggerOnce?: boolean;
    threshold?: number; // 0 to 1
    rootMargin?: string;
  };
}

const animWithOverflow: AnimType[] = ["fadeUp"];

export const Animate: FC<IAnimateProps> = ({delay, className, as, children, options, anim}) => {
  const {ref, inView} = useInView({
    root: options?.root,
    triggerOnce: options?.triggerOnce ?? true,
    threshold: options?.threshold ?? 0.1,
    rootMargin: options?.rootMargin ?? "",
  });
  const Tag = as || "div";
  const SimpleComponent = (
    <Tag
      ref={ref}
      style={{animationDelay: `${delay || 0}ms`}}
      className={cn(s.animate, className, s[anim], inView && s.animated)}
    >
      {children}
    </Tag>
  );

  const OverflowComponent = (
    <span ref={ref} className={cn(s.overflow)}>
      <Tag
        style={{animationDelay: `${delay || 0}ms`}}
        className={cn(s.animate, className, s[anim], inView && s.animated)}
      >
        {children}
      </Tag>
    </span>
  );
  return animWithOverflow.includes(anim) ? OverflowComponent : SimpleComponent;
};
