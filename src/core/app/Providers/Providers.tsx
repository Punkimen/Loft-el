"use client";

import React, {FC, ReactNode} from "react";
import {ParallaxProvider} from "react-scroll-parallax";

export const Providers: FC<{children: ReactNode}> = ({children}) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};
