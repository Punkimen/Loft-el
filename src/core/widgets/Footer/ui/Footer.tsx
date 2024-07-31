import cn from "classnames";
import s from "./Footer.module.css";
import Link from "next/link";
import {Animate, Text} from "@/core/shared";
export const Footer = () => {
  const links = [
    {
      href: "#",
      text: "Главная",
    },
    {
      href: "#",
      text: "О нас",
    },
    {
      href: "#",
      text: "Номера",
    },
    {
      href: "#",
      text: "Услуги",
    },
    {
      href: "#",
      text: "Мероприятия",
    },
    {
      href: "#",
      text: "Контакты",
    },
    {
      href: "#",
      text: "Карьера в LOFT'EL",
    },
  ];
  return (
    <footer className={cn(s.footer, "container")}>
      <nav className={s["nav-container"]}>
        <ul className={s.list}>
          {links.map((el, index) => (
            <li key={el.text}>
              <Animate anim={"skewDown"} delay={index * 100}>
                <Link href={el.href}>{el.text}</Link>
              </Animate>
            </li>
          ))}
        </ul>
        <div className={s.contacts}>
          <Animate anim={"fadeUp"}>
            <Link className={s.phone} href={"tel:79991200000"} target={"_blank"}>
              +7 999 120-00-00
            </Link>
          </Animate>
          <Animate anim={"fadeUp"}>
            <Link className={s.phone} href={"mailto:info@loftel.ru"} target={"_blank"}>
              info@loftel.ru
            </Link>
          </Animate>
          <Animate anim={"fadeUp"}>
            <Link className={s.phone} href={"tel:79991200000"} target={"_blank"}>
              Telegram
            </Link>
          </Animate>
          <Animate anim={"fadeUp"}>
            <Link className={s.phone} href={"tel:79991200000"} target={"_blank"}>
              Whatsapp
            </Link>
          </Animate>
        </div>
        <div className={s.address}>
          <Animate anim={"fadeUp"}>
            <Link className="" href="" target={"_blank"}>
              Санкт-Петербург: Люблинский переулок, 9
            </Link>
          </Animate>
          <Animate anim={"fadeUp"}>
            <Link className="" href="" target={"_blank"}>
              Москва: coming soon
            </Link>
          </Animate>
          <Animate anim={"fadeUp"}>
            <Link className="" href="" target={"_blank"}>
              Бали, Убуд: coming soon
            </Link>
          </Animate>
        </div>
      </nav>
      <div className={s.policy}>
        <Animate anim={"fadeUp"}>
          <Link className="" href="" target={"_blank"}>
            Политика конфиденциальности
            <br /> Условия использования
          </Link>
        </Animate>
        <Animate anim={"fadeUp"}>
          <Text>ООО "Техинвест" ОГРН 1157847059633. ИНН/КПП 7811171296</Text>
        </Animate>
      </div>
    </footer>
  );
};
