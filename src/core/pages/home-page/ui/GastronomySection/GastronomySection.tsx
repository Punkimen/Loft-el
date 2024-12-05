import s from "./GastronomySection.module.css";
import { Animate, Text, Title } from "@/core/shared";
import circle_small from "@/public/img/home-page/gastronomy/circle_small.svg";
import circle_medium from "@/public/img/home-page/gastronomy/circle_medium.svg";
import circle_big from "@/public/img/home-page/gastronomy/circle_big.svg";
import img_first from "@/public/img/home-page/gastronomy/img_1.webp";
import img_third from "@/public/img/home-page/gastronomy/img_3.webp";
import img_second from "@/public/img/home-page/gastronomy/img_2.webp";

import Image from "next/image";
import cn from "classnames";

export const GastronomySection = () => {
  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className="container">
          <Title tag={"h3"} className={s.title}>
            <Animate as={"span"} anim={"opacity"}>
              Гастрономическое наследие со&nbsp;всего&nbsp;мира в&nbsp;авторском переосмыслении
            </Animate>
          </Title>
        </div>
      </div>

      {/* <Animate anim={"opacity"}> */}
      <div className={s["images-block"]}>
        <Image className={cn(s.circle, s.circle_small)} src={circle_small} alt={"circle"} />
        <Image className={cn(s.circle, s.circle_medium)} src={circle_medium} alt={"circle"} />
        <Image className={cn(s.circle, s.circle_big)} src={circle_big} alt={"circle"} />

        <Animate anim={"opacity"} delay={100}>
          <Image className={cn(s.img, s.img_first)} src={img_first} alt={"img_1"} />
        </Animate>
        <Animate anim={"opacity"} delay={200}>
          <Image className={cn(s.img, s.img_second)} src={img_third} alt={"img_3"} />
        </Animate>
        <Animate anim={"opacity"} delay={300}>
          <Image className={cn(s.img, s.img_third)} src={img_second} alt={"img_2"} />
        </Animate>
      </div>
      {/* </Animate> */}

      <div className="container">
        <div className={s.textColumn}>
          <Text className={s.text}>
            <Animate anim={"opacity"} as={"p"}>
              Каждый ресторан сети LOFT'EL – это авторское прочтение гастрономии со всего мира, лучшие рецепты высокой
              кухни от шефов, оригинальная подача и нетривиальные вкусовые сочетания, которые обязательно заиграют новыми
              красками при знакомстве.
            </Animate>
          </Text>
        </div>
      </div>
    </section >
  );
};
