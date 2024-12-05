"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import s from "./Question.module.css";
import cn from "classnames";
import { useWindowWidth } from "@/core/shared/hooks/useWindowWidth";

interface IQuestionProps {
  title: string;
  text: string[];
}

export const Question: FC<IQuestionProps> = React.memo(({ title, text }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const ref: React.RefObject<HTMLDivElement> = useRef(null);
  const windowWidth = useWindowWidth();
  useEffect(() => {
    const height = ref?.current?.getBoundingClientRect()?.height;
    setHeight(height || 0);
  }, [ref, open, windowWidth]);

  return (
    <div className={cn(s.question, open && s.open)}>
      <div
        data-aos="opacity"
        className={cn(s.header)}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={cn(s.title)}>{title}</div>
        <div className={s.arrow}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.02172 16V9.37H0.481719V7.6H7.02172V0.969999H9.00172V7.6H15.5417V9.37H9.00172V16H7.02172Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div style={{ height: `${!open ? 0 : height}px` }} className={s.body}>
        <div ref={ref} className={s.inner}>
          {text.map((el, index) => {
            return <div key={index} dangerouslySetInnerHTML={{ __html: el }} />;
          })}
        </div>
      </div>
    </div>
  );
});
