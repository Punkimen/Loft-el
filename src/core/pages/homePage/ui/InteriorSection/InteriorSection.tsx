import s from "./InteriorSection.module.css";
import {Animate, Text, Title} from "@/core/shared";
import interior from "@/public/img/homePage/interior/interior.webp";

import Image from "next/image";
import cn from "classnames";
import {ParallaxComponent} from "@/core/shared/ui/Parallax/Parallax";

export const InteriorSection = () => {
  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className="container">
          <Title tag={"h1"} className={s.title}>
            <Animate as={"span"} anim={"opacity"}>
              Рассматривать, слушать, прикасаться
            </Animate>
          </Title>
        </div>
      </div>
      <ParallaxComponent translateY={[10, 0, "easeInOut"]}>
        <div className={s["images-block"]}>
          <Image className={cn(s.interior)} src={interior} alt={"interior"} />
          <div className={cn(s.backGround)}></div>
        </div>
      </ParallaxComponent>
      <div className={s.textColumn}>
        <Text className={s.text}>
          <Animate anim={"opacity"} as={"p"}>
            Интерьер каждого отеля – неповторимая комбинация мебели собственного производства из благородных пород
            дерева, артефактов ручной работы и предметов искусства со всего мира.
          </Animate>
        </Text>
      </div>
    </section>
  );
};
