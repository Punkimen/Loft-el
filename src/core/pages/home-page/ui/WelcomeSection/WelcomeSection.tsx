import { Animate, Title } from "@/core/shared";
import cn from "classnames";
import { ParallaxComponent } from "@/core/shared/ui/Parallax/Parallax";
import s from "./WelcomeSection.module.css";
import { BookingBtn } from "@/core/widgets/BookingBtn/BookingBtn";
export const WelcomeSection = () => {
  return (
    <section className={s.welcome}>
      <div className={cn(s.content, "container")}>
        <Animate anim={"fadeUp"}>
          <Title tag={"h1"} className={s.title}>
            Lifestyle hotel&nbsp;collection
          </Title>
        </Animate>
        <ParallaxComponent speed={1}>
          <Animate className={s.decor} anim={"skewDown"} delay={200}>
            by mr. Pinky
          </Animate>
        </ParallaxComponent>

        <Animate anim={"opacity"} delay={300}>
          <BookingBtn />
        </Animate>
      </div>
    </section>
  );
};