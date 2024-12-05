import { Animate, Btn } from "@/core/shared";
import s from "./SideNav.module.css";
import Link from "next/link";
import { FC } from "react";

const links = [
    {
        href: "#",
        text: "The birch",
    },
    {
        href: "#",
        text: "Mr. Pinky",
    },
    {
        href: "#",
        text: "Madame Roche",
    },
    {
        href: "#",
        text: "Сервис",
    },
    {
        href: "#",
        text: "дополнительно",
    },
    {
        href: "#",
        text: "контакты",
    },
];

type TSideNav = {
    active: boolean;
}

export const SideNav: FC<TSideNav> = ({ active }) => {

    return (
        <div className={`${s.root} ${active && s.active}`}>
            <nav className={s.nav}>
                <ul className={s.list}>
                    {links.map((el, index) => (
                        <li key={el.text}>
                            <Animate key={index + el.text} anim={"skewDown"} delay={index * 100}>
                                <Link href={el.href}>{el.text}</Link>
                            </Animate>
                        </li>
                    ))}
                </ul>
            </nav>
            <Link className={s.phone} href={"tel:79991200000"} target={"_blank"}>
                +7 999 120-00-00
            </Link>
            <div className={s.switch}>
                {/* <Animate anim={"fadeUp"} delay={100}> */}
                <Btn as={"button"} styleBtn={"reset"} className={s.lang}>
                    en
                </Btn>
                {/* </Animate> */}
                {/* <Animate anim={"fadeUp"} delay={200}> */}
                <Btn as={"button"} styleBtn={"reset"} className={s.lang}>
                    ru
                </Btn>
                {/* </Animate> */}
            </div>
        </div>
    );
};
