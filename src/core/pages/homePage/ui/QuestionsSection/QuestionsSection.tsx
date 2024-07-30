import s from "./QuestionsSection.module.css";
import {Animate, Text, Title} from "@/core/shared";
import Questions from "@/core/widgets/Questions/ui/Questions";

export const QuestionsSection = () => {
  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className="container">
          <Title tag={"h2"} className={s.title}>
            <Animate as={"span"} anim={"opacity"}>
              Остались вопросы?
            </Animate>
          </Title>
          <Text className={s.text}>
            <Animate anim={"opacity"} as={"p"}>
              Помощники Мистера Пинки расскажут о номерах и предложат лучшие из доступных
            </Animate>
          </Text>
          <form className={s.form}>
            <input className={s.field} type="text" placeholder="Имя" />
            <input className={s.field} type="text" placeholder="Телефон" />
            <button className={s.btn} type="submit">
              Связаться
            </button>
          </form>
          <Questions />
        </div>
      </div>
    </section>
  );
};
