import { Title } from "@/core/shared";
import s from "./WelcomeSesion.module.css";
import { BookingBtn } from "@/core/widgets/BookingBtn/BookingBtn";

export const WelcomeSection = () => {
    return (
        <section className={s.root}>
            <div className="container">
                <p className={s.text}>Saint Petersburg</p>
                <Title className={s.title} tag={"h1"}>
                    Mr. Pinky’s Villa
                </Title>
                <p className={s.descr}>Lifestyle-бутик-отель: по мотивам истории загадочного Mr. Pinky, коллекционера и путешественника из&nbsp;Гонконга</p>

                <BookingBtn />
            </div>
        </section>
    );
};
