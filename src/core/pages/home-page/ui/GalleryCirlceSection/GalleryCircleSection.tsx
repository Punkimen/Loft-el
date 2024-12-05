"use client";
import cn from "classnames";
import img_1 from "@/public/img/home-page/gallery-circle/img_1.webp";
import img_2 from "@/public/img/home-page/gallery-circle/img_2.webp";
import img_3 from "@/public/img/home-page/gallery-circle/img_3.webp";
import img_4 from "@/public/img/home-page/gallery-circle/img_4.webp";
import img_5 from "@/public/img/home-page/gallery-circle/img_5.webp";
import img_6 from "@/public/img/home-page/gallery-circle/img_6.webp";
import img_7 from "@/public/img/home-page/gallery-circle/img_7.webp";
import img_8 from "@/public/img/home-page/gallery-circle/img_8.webp";
import img_9 from "@/public/img/home-page/gallery-circle/img_9.webp";
import img_10 from "@/public/img/home-page/gallery-circle/img_10.webp";
import img_11 from "@/public/img/home-page/gallery-circle/img_11.webp";
import img_12 from "@/public/img/home-page/gallery-circle/img_12.webp";
import { Animate, Title } from "@/core/shared";
import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";
import s from "./GalleryCirlceSection.module.css";
import arrow from "@/public/img/home-page/Arrow.svg";

const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10, img_11, img_12];
const setStyles = (index: number, size: number, totalImages: number): CSSProperties => {
  const angle = (360 / totalImages) * index - 90;
  // 172 - это ширина картинки, пока захардкодил, мб подставлять динамически
  const radius = size / 2 - 172 / 2;
  const centerX = size / 2;
  const centerY = size / 2;

  const x = centerX + radius * Math.cos(angle * (Math.PI / 180));
  const y = centerY + radius * Math.sin(angle * (Math.PI / 180));
  return {
    position: "absolute",
    top: `${y}px`,
    left: `${x}px`,
    transform: "translate(-50%, -50%)", // Center the image
  };
};

export const GalleryCircleSection = () => {
  const [size, setSize] = useState(0);
  const [mount, setMount] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const width = ref.current.getBoundingClientRect().width;

    setMount(true);

    if (width > 708) setSize(width);
    else setSize(766);

    return () => setMount(false);
  }, []);

  return (
    <section className={cn(s.gallery, "container")}>
      <div className={s.wrapper} ref={ref}>
        <Animate anim={"opacity"} delay={500}>
          <div className={s.circle}>
            <div className={s.images}>
              {mount && (
                <>
                  {images.map((img, index) => (
                    <div key={img.src} className={s.img} style={setStyles(index, size, images.length)}>
                      <Image style={{ rotate: `${index * 30}deg` }} src={img} alt={`img ${index + 1}`} />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </Animate>

        <Title tag={"h3"} className={s.title}>
          <Animate as={"span"} anim={"opacity"}>
            История, традиции и&nbsp;культурный контекст: полное погружение в атмосферу места
          </Animate>
        </Title>
      </div>
      <Animate className={s.arrow} as={"div"} anim={"bounce"} delay={0}>
        <Image src={arrow} alt={arrow} />
      </Animate>
    </section>
  );
};
