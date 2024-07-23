"use client";

import {Parallax, ParallaxProps} from "react-scroll-parallax";
import {FC} from "react";

export const ParallaxComponent: FC<ParallaxProps> = ({children, ...props}) => {
  return <Parallax {...props}>{children}</Parallax>;
};
