import { Animate, Title } from "@/core/shared";
import React from "react";
import Image from "next/image";
import mainImg from "@/public/img/home-page/new-facets/mainImg.png";
import s from "./NewFacets.module.css";

export const NewFacets = () => {
    return (
        <section className={s.root}>
            <div className="container">
                <Animate anim={"opacity"} delay={0}>
                    <Image className={s.img} src={mainImg} alt='' />
                </Animate>

                <Title className={s.title} tag={"h2"}>
                    <Animate anim={"fadeUp"} delay={200}>
                        Новые грани Guest Experience
                    </Animate>
                </Title>

                <Animate anim={"opacity"}>
                    <p className={s.descr}>Каждый ресторан сети LOFT'EL – это авторское прочтение гастрономии со всего мира, лучшие рецепты высокой кухни от шефов, оригинальная подача</p>
                </Animate>
            </div>
        </section>
    );
};
