import {Animate, Title} from "@/core/shared";
import cn from "classnames";
import {ParallaxComponent} from "@/core/shared/ui/Parallax/Parallax";
import s from "./Welcome.module.css";
export const Welcome = () => {
  return (
    <section className={s.welcome}>
      <div className={cn(s.content, "container")}>
        <Animate anim={"opacity"}>
          <Title tag={"h1"} className={s.title}>
            Lifestyle hotel&nbsp;collection
          </Title>
        </Animate>
        <ParallaxComponent speed={5}>
          <Animate className={s.decor} anim={"skewDown"} delay={100}>
            by mr. Pinky
          </Animate>
        </ParallaxComponent>
      </div>
    </section>
  );
};
