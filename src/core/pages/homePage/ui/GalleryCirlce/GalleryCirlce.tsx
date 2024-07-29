"use client";
import cn from "classnames";
import img_1 from "@/core/app/assets/img/homePage/gallery_circle/img_1.jpg";
import img_2 from "@/core/app/assets/img/homePage/gallery_circle/img_2.jpg";
import img_3 from "@/core/app/assets/img/homePage/gallery_circle/img_3.jpg";
import img_4 from "@/core/app/assets/img/homePage/gallery_circle/img_4.jpg";
import img_5 from "@/core/app/assets/img/homePage/gallery_circle/img_5.jpg";
import img_6 from "@/core/app/assets/img/homePage/gallery_circle/img_6.jpg";
import img_7 from "@/core/app/assets/img/homePage/gallery_circle/img_7.jpg";
import img_8 from "@/core/app/assets/img/homePage/gallery_circle/img_8.jpg";
import img_9 from "@/core/app/assets/img/homePage/gallery_circle/img_9.jpg";
import img_10 from "@/core/app/assets/img/homePage/gallery_circle/img_10.jpg";
import img_11 from "@/core/app/assets/img/homePage/gallery_circle/img_11.jpg";
import img_12 from "@/core/app/assets/img/homePage/gallery_circle/img_12.jpg";
import {Animate, Title} from "@/core/shared";
import Image from "next/image";
import {CSSProperties, useEffect, useRef, useState} from "react";
import {useParallax} from "react-scroll-parallax";
import s from "./GalleryCirlce.module.css";

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

export const GalleryCirlce = () => {
  const [size, setSize] = useState(0);
  const [mount, setMount] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const parallax = useParallax<HTMLDivElement>({
    rotate: [-90, 90],
  });
  useEffect(() => {
    if (!ref.current) return;
    const width = ref.current.getBoundingClientRect().width;
    setMount(true);
    setSize(width);

    return () => setMount(false);
  }, []);

  return (
    <section className={cn(s.gallery, "container")}>
      <div className={s.wrapper} ref={ref}>
        <Image src={"/img_1.jpg"} alt={"test"} />
        <div ref={parallax.ref} className={s.images}>
          {mount && (
            <>
              {images.map((img, index) => (
                <div key={img.src} className={s.img} style={setStyles(index, size, images.length)}>
                  <Image style={{rotate: `${index * 30}deg`}} src={img} alt={`img ${index + 1}`} />
                </div>
              ))}
            </>
          )}
        </div>
        <Title tag={"h2"} className={s.title}>
          <Animate as={"span"} anim={"opacity"}>
            История, традиции и&nbsp;культурный контекст: полное погружение в атмосферу места
          </Animate>
        </Title>
      </div>
    </section>
  );
};
