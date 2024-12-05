import s from "./GuestExperienceSection.module.css";
import { Animate, Text, Title } from "@/core/shared";
import { guestExperienceImages } from "./images";
import circle from "@/public/img/home-page/guest-experience/circle.svg";
import skull from "@/public/img/home-page/guest-experience/skull.webp";

import Image from "next/image";
import cn from "classnames";
import { ParallaxComponent } from "@/core/shared/ui/Parallax/Parallax";
import arrow from "@/public/img/home-page/Arrow.svg";

export const GuestExperienceSection = () => {

  return (
    <section className={s.section}>
      <div className={s.content}>
        <Title tag={"h3"} className={s.title}>
          <Animate as={"span"} anim={"opacity"}>
            Позаботились о ваших органах чувств: ароматы, ощущения и звуковое сопровождение для персонализации guest
            experience
          </Animate>
        </Title>
      </div>
      <div className={s.imagesBlock}>
        <Image height={160} className={cn(s.skull)} src={skull} alt={`photo ${6}`} />
        <Image className={cn(s.circle)} src={circle} alt={`photo ${6}`} />

        <Animate as={"div"} anim={"opacity"} delay={0}>
          {guestExperienceImages.map((image, index) => {
            const isOdd = index % 2 === 0;
            return (
              <ParallaxComponent key={image.src} easing={[0.68, -0.6, 0.32, -0.6]} speed={isOdd ? 2 : -2}>
                <Image
                  height={285}
                  className={cn(s.img, s[`img_${index + 1}`])}
                  src={image}
                  alt={`photo ${index + 1}`}
                />
              </ParallaxComponent>
            );
          })}
        </Animate>
      </div>
      <div className={s.columns}>
        <ParallaxComponent className={s.parallax} translateY={[20, -20, "easeInOut"]}>
          <Text className={s.text}>
            <Animate anim={"opacity"}>
              <p>Мультизональное настраиваемое освещение, системы очищения и увлажнения воздуха</p>
              <p>Косметика класса люкс. Davines, Sachajuan, Zenology, Lalique, Marvis и др</p>
              <p>Круглосуточный room-service и авторские напитки от шеф-бармена PLACEBO/25</p>
            </Animate>
          </Text>
        </ParallaxComponent>
        <ParallaxComponent className={s.parallax} translateY={[-20, 20, "easeInOut"]}>
          <Text className={s.text}>
            <Animate anim={"opacity"}>
              <p>Авторская мебель из натуральной кожи и дерева In-house бренда ASKETI.CA</p>
              <p>Ванны и душевые поддоны из натурального дерева</p>
              <p>Карта beauty-решений в каждом номере</p>
            </Animate>
          </Text>
        </ParallaxComponent>
      </div>
      <Animate className={s.arrow} as={"div"} anim={"bounce"} delay={0}>
        <Image src={arrow} alt={arrow} />
      </Animate>
    </section>
  );
};
