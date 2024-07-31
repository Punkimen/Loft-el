import {Animate, Text, Title} from "@/core/shared";

import Image from "next/image";
import cn from "classnames";
import img_1 from "@/public/img/homePage/art_gallery/img_1.webp";
import img_2 from "@/public/img/homePage/art_gallery/img_2.webp";
import img_3 from "@/public/img/homePage/art_gallery/img_3.webp";
import s from "./ArtGallerySection.module.css";

export const ArtGallerySection = () => {
  return (
    <section className={s.section}>
      <div className={s.content}>
        <Title tag={"h2"} className={s.title}>
          <Animate as={"span"} anim={"opacity"}>
            Арт-галерея
            <br /> с оригиналами произведений искусства
          </Animate>
        </Title>
      </div>
      <div className={s["images-block"]}>
        <Image className={cn(s.img, s.img_1)} src={img_2} alt={"img_2"} />
        <Image className={cn(s.img, s.img_2)} src={img_1} alt={"img_1"} />
        <Image className={cn(s.img, s.img_3)} src={img_2} alt={"img_2"} />
        <Image className={cn(s.img, s.img_4)} src={img_3} alt={"img_3"} />
        <Image className={cn(s.img, s.img_5)} src={img_3} alt={"img_3"} />
      </div>
      <div className={s.textColumn}>
        <Text className={s.text}>
          <Animate anim={"opacity"} as={"p"}>
            Артефакты коллекций в отелях не повторяются, однако постоянно актуализируются и формируют отдельное
            пространство, которое при каждой встрече откроется вам немного по-новому.
          </Animate>
        </Text>
      </div>
    </section>
  );
};
