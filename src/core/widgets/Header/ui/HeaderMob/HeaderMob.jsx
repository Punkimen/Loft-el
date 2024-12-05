"use client";

import React, {useState} from "react";

import {SideNav} from "@/core/widgets/SideNav/SideNav";
import {Animate} from "@/core/shared";
import s from "./HeaderMob.module.css";

export const HeaderMob = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={s.root}>
      <Animate className={s.burgerAnimation} anim={"skewDown"}>
        <div className={`${s.burger} ${isActive && s.active}`} onClick={() => setIsActive(!isActive)}>
          <span></span>
          <span></span>
        </div>
      </Animate>
      <SideNav active={isActive} />
    </div>
  );
};
