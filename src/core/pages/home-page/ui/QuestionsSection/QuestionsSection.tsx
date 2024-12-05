import s from "./QuestionsSection.module.css";
import { Animate, Btn, Text, Title } from "@/core/shared";
import Questions from "@/core/widgets/Questions/ui/Questions";

export const QuestionsSection = () => {
  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className="container">
          <Title tag={"h3"} className={s.title}>
            <Animate as={"span"} anim={"fadeUp"}>
              Остались вопросы?
            </Animate>
          </Title>
          <Text className={s.text}>
            <Animate anim={"opacity"} as={"p"} delay={100}>
              Помощники Мистера Пинки расскажут о номерах и предложат лучшие из доступных
            </Animate>
          </Text>

          <Animate anim={"opacity"} delay={200}>
            <form className={s.form}>
              <input className={s.field} type="text" placeholder="Имя" />
              <input className={s.field} type="text" placeholder="Телефон" />
              <Btn as={"button"} className={s.btn} type="submit">
                Связаться
              </Btn>
            </form>
          </Animate>
          <Questions />
        </div>
      </div>
    </section>
  );
};
