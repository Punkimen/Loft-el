import { Btn } from "../../shared/ui/Btn/Btn";
import s from "./BookingBtn.module.css";

export const BookingBtn = () => {
    return <Btn className={s.btn} as={"link"} href={"#"}>Выбрать номер</Btn>;
};
