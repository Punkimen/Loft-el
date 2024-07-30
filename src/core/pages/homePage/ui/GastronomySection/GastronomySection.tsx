import s from "./GastronomySection.module.css";
import {Animate, Text, Title} from "@/core/shared";
import circle_small from "@/public/img/homePage/gastronomy/circle_small.svg";
import circle_medium from "@/public/img/homePage/gastronomy/circle_medium.svg";
import circle_big from "@/public/img/homePage/gastronomy/circle_big.svg";
import img_first from "@/public/img/homePage/gastronomy/img_1.webp";
import img_third from "@/public/img/homePage/gastronomy/img_3.webp";
import img_second from "@/public/img/homePage/gastronomy/img_2.webp";

import Image from "next/image";
import cn from "classnames";

export const GastronomySection = () => {
  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className="container">
          <Title tag={"h2"} className={s.title}>
            <Animate as={"span"} anim={"opacity"}>
              Гастрономическое наследие со всего мира в авторском переосмыслении
            </Animate>
          </Title>
        </div>
      </div>
      <div className={s["images-block"]}>
        <Image className={cn(s.circle, s.circle_small)} src={circle_small} alt={"circle"} />
        <Image className={cn(s.circle, s.circle_medium)} src={circle_medium} alt={"circle"} />
        <Image className={cn(s.circle, s.circle_big)} src={circle_big} alt={"circle"} />
        <Image className={cn(s.img, s.img_first)} src={img_first} alt={"img_1"} />
        <Image className={cn(s.img, s.img_second)} src={img_second} alt={"img_2"} />
        <Image className={cn(s.img, s.img_third)} src={img_third} alt={"img_3"} />
      </div>
      <div className={s.textColumn}>
        <Text className={s.text}>
          <Animate anim={"opacity"} as={"p"}>
            Каждый ресторан сети LOFT'EL – это авторское прочтение гастрономии со всего мира, лучшие рецепты высокой
            кухни от шефов, оригинальная подача и нетривиальные вкусовые сочетания, которые обязательно заиграют новыми
            красками при знакомстве.
          </Animate>
        </Text>
      </div>
    </section>
  );
};
