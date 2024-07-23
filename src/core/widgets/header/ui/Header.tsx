import Link from "next/link";
import {Animate, Btn} from "@/core/shared";
import cn from "classnames";
import s from "./Header.module.css";
export const Header = () => {
  return (
    <header className={cn(s.header, "container")}>
      <Animate className={s.logo} anim={"opacity"}>
        Mr. Pinky’s Villa
      </Animate>
      <div className={s.handle}>
        <Animate anim={"fadeUp"}>
          <Link className={s.phone} href={"tel:79991200000"} target={"_blank"}>
            +7 999 120-00-00
          </Link>
        </Animate>
        <div className={s.switch}>
          <Animate anim={"fadeUp"} delay={100}>
            <Btn as={"button"} styleBtn={"reset"} className={s.lang}>
              en
            </Btn>
          </Animate>
          <Animate anim={"fadeUp"} delay={200}>
            <Btn as={"button"} styleBtn={"reset"} className={s.lang}>
              ru
            </Btn>
          </Animate>
        </div>
      </div>
    </header>
  );
};
