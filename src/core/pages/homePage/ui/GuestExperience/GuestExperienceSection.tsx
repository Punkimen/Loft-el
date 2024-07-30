import s from "./GuestExperienceSection.module.css";
import {Animate, Text, Title} from "@/core/shared";
import img_first from "@/public/img/homePage/guest_experience/img_1.webp";
import img_second from "@/public/img/homePage/guest_experience/img_2.webp";
import img_third from "@/public/img/homePage/guest_experience/img_3.webp";
import img_fourth from "@/public/img/homePage/guest_experience/img_4.webp";
import img_fifth from "@/public/img/homePage/guest_experience/img_5.webp";
import img_sixth from "@/public/img/homePage/guest_experience/img_6.webp";
import circle from "@/public/img/homePage/guest_experience/circle.svg";
import skull from "@/public/img/homePage/guest_experience/skull.webp";

import Image from "next/image";
import cn from "classnames";
import {ParallaxComponent} from "@/core/shared/ui/Parallax/Parallax";

export const GuestExperienceSection = () => {
  return (
    <section className={s.section}>
      <div className={s.content}>
        <Title tag={"h2"} className={s.title}>
          <Animate as={"span"} anim={"opacity"}>
            Позаботились о ваших органах чувств: ароматы, ощущения и звуковое сопровождение для персонализации guest
            experience
          </Animate>
        </Title>
      </div>
      <ParallaxComponent translateY={[-30, 0, "easeInOut"]}>
        <div className={s.imagesBlock}>
          <Image className={cn(s.skull)} src={skull} alt={`photo ${6}`} />
          <Image className={cn(s.circle)} src={circle} alt={`photo ${6}`} />

          <Animate as={"div"} anim={"opacity"} delay={0}>
            <Image className={cn(s.img, s.img_first)} src={img_first} alt={`photo ${1}`} />
            <Image className={cn(s.img, s.img_second)} src={img_second} alt={`photo ${2}`} />
            <Image className={cn(s.img, s.img_third)} src={img_third} alt={`photo ${3}`} />
            <Image className={cn(s.img, s.img_fourth)} src={img_fourth} alt={`photo ${4}`} />
            <Image className={cn(s.img, s.img_fifth)} src={img_fifth} alt={`photo ${5}`} />
            <Image className={cn(s.img, s.img_sixth)} src={img_sixth} alt={`photo ${6}`} />
          </Animate>
        </div>
      </ParallaxComponent>
      <div className={s.columns}>
        <ParallaxComponent translateY={[20, -20, "easeInOut"]}>
          <Text className={s.text}>
            <Animate anim={"opacity"} as={"p"}>
              Мультизональное настраиваемое освещение, системы очищения и увлажнения воздуха
              <br />
              <br />
              Косметика класса люкс. Davines, Sachajuan, Zenology, Lalique, Marvis и др
              <br />
              <br />
              Круглосуточный room-service и авторские напитки от шеф-бармена PLACEBO/25
            </Animate>
          </Text>
        </ParallaxComponent>
        <ParallaxComponent translateY={[-20, 20, "easeInOut"]}>
          <Text className={s.text}>
            <Animate anim={"opacity"} as={"p"}>
              Авторская мебель из натуральной кожи и дерева In-house бренда ASKETI.CA
              <br />
              <br />
              Ванны и душевые поддоны из натурального дерева
              <br />
              <br />
              Карта beauty-решений в каждом номере
            </Animate>
          </Text>
        </ParallaxComponent>
      </div>
    </section>
  );
};
