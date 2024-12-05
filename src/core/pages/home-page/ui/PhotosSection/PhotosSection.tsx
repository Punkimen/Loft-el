import s from "./PhotosSection.module.css";
import { Animate, Text, Title } from "@/core/shared";
import photo_1 from "@/public/img/home-page/photos/photo_1.webp";
import photo_2 from "@/public/img/home-page/photos/photo_2.webp";
import photo_3 from "@/public/img/home-page/photos/photo_3.webp";
import Image from "next/image";
import arrow from "@/public/img/home-page/Arrow.svg";
import { ParallaxComponent } from "@/core/shared/ui/Parallax/Parallax";

const images = [photo_1, photo_2, photo_3];

export const PhotosSection = () => {
  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className="container">
          <Title tag={"h3"} className={s.title}>
            <Animate as={"span"} anim={"opacity"}>
              Каждый отель – неповторимая легенда и уникальное наполнение
            </Animate>
          </Title>
          <div className={s.columns}>
            <Text className={s.text}>
              <Animate anim={"opacity"} as={"p"}>
                Lifestyle-отель – это качественно новая категория отелей, охватывающая весь спектр ценностей
                современного человека: от самореализации и заботы о себе до досуга и entertainment.
              </Animate>
            </Text>
            <Text className={s.text}>
              <Animate anim={"opacity"} as={"p"}>
                Каждый отель уникален по концепции и&nbsp;наполнению, но содержит в себе все необходимое для комфортной
                жизни: wellness- пространство, коворкинг, ресторан авторской кухни и другие привычные атрибуты,
                объединенные собственной историей.
              </Animate>
            </Text>
          </div>
        </div>
      </div>
      <ParallaxComponent translateX={["-40%", "10%"]} className={s.photos}>

        {images.map((img, index) => (
          <Animate as={"div"} anim={"opacity"} delay={index * 100} className={s.img} key={img.src}>
            <Image src={img} alt={`photo ${index + 1}`} />
          </Animate>
        ))}
      </ParallaxComponent>
      <Animate className={s.arrow} as={"div"} anim={"bounce"} delay={0}>
        <Image src={arrow} alt={arrow} />
      </Animate>
    </section>
  );
};
