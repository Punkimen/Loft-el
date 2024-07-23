import s from "./Nav.module.css";
import Link from "next/link";
import {Animate} from "@/core/shared";

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

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {links.map((el, index) => (
          <li key={el.text}>
            <Animate anim={"skewDown"} delay={index * 100}>
              <Link href={el.href}>{el.text}</Link>
            </Animate>
          </li>
        ))}
      </ul>
    </nav>
  );
};
