import {IBaseComponent} from "@/core/shared";
import {FC, ReactNode} from "react";
import cn from "classnames";
type TitleTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
import s from "./Title.module.css";

interface ITitleProps extends IBaseComponent {
	tag: TitleTagType;
	children: ReactNode;
}

export const Title: FC<ITitleProps> = ({tag, isHidden, className, children}) => {
	const Tag = tag;
	if (isHidden) return null;
	return <Tag className={cn(s.title, className)}>{children}</Tag>;
};
