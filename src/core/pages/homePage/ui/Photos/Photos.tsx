import s from "./Photos.module.css";
import {Animate, Text, Title} from "@/core/shared";
import photo_1 from "@/public/img/homePage/photos/photo_1.jpg";
import photo_2 from "@/public/img/homePage/photos/photo_2.jpg";
import photo_3 from "@/public/img/homePage/photos/photo_3.jpg";
import Image from "next/image";
import {ParallaxComponent} from "@/core/shared/ui/Parallax/Parallax";

const images = [photo_1, photo_2, photo_3];

export const Photos = () => {
  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className="container">
          <Title tag={"h2"} className={s.title}>
            <Animate as={"span"} anim={"opacity"}>
              Каждый отель – неповторимая легенда и уникальное наполнение
            </Animate>
          </Title>
          <div className={s.columns}>
            <Text className={s.text}>
              <Animate anim={"opacity"} as={"p"}>
                Lifestyle-отель – это качественно новая категория отелей, охватывающая весь спектр ценностей
                современного человека: от самореализации и заботы о себе до досуга и enterteiment.
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
    </section>
  );
};
