import s from "./ArtGallerySection.module.css";
import { Animate, Text, Title } from "@/core/shared";

import Image from "next/image";
import cn from "classnames";
import img_1 from "@/public/img/home-page/art-gallery/img_1.webp";
import img_2 from "@/public/img/home-page/art-gallery/img_2.webp";
import img_3 from "@/public/img/home-page/art-gallery/img_3.webp";

export const ArtGallerySection = () => {
  return (
    <section className={s.section}>
      <div className={s.content}>
        <Title tag={"h3"} className={s.title}>
          <Animate as={"span"} anim={"opacity"}>
            Арт-галерея
            <br /> с оригиналами произведений искусства
          </Animate>
        </Title>
      </div>
      <div className={s["images-block"]}>
        <Animate anim={"opacity"} delay={0}>
          <Image height={424} className={cn(s.img, s.img_1)} src={img_2} alt={"img_2"} />
        </Animate>
        <Animate anim={"opacity"} delay={100}>
          <Image height={424} className={cn(s.img, s.img_2)} src={img_1} alt={"img_1"} />
        </Animate>
        <Animate anim={"opacity"} delay={200}>
          <Image height={424} className={cn(s.img, s.img_3)} src={img_2} alt={"img_2"} />
        </Animate>
        <Animate anim={"opacity"} delay={300}>
          <Image height={424} className={cn(s.img, s.img_4)} src={img_3} alt={"img_3"} />
        </Animate>
        <Animate anim={"opacity"} delay={400}>
          <Image height={424} className={cn(s.img, s.img_5)} src={img_3} alt={"img_3"} />
        </Animate>
      </div>
      <div className="container">
        <div className={s.textColumn}>
          <Text className={s.text}>
            <Animate anim={"opacity"} as={"p"}>
              Артефакты коллекций в отелях не повторяются, однако постоянно актуализируются и формируют отдельное
              пространство, которое при каждой встрече откроется вам немного по-новому.
            </Animate>
          </Text>
        </div>
      </div>
    </section>
  );
};
