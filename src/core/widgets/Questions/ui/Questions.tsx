import s from "./Questions.module.css";
import React, { FC } from "react";
import cn from "classnames";
import { Question } from "@/core/widgets/Questions/ui/Question/Question";
import { Animate } from "@/core/shared";

export interface IQuestion {
  title: string;
  text: string[];
}

const initQuestions: IQuestion[] = [
  {
    title: "What is Onmi®?",
    text: [
      "Onmi® is an innovative AR game that allows players to interact with virtual objects and events in the real world.",
    ],
  },
  {
    title: "Where can I play Onmi®?",
    text: [
      "Onmi® launches in certain limited areas but our coverage will expand worldwide in due time. Follow us on social media for updates.",
    ],
  },
  {
    title: "Can I play for free?",
    text: [
      "The game is free to play for everyone with the ghost system. To get the full potential out of Onmi®, players are encouraged to acquire an Omi body.",
    ],
  },
  {
    title: "Why AR?",
    text: [
      "We utilize AR to enhance the mundane environment, creating unique and thrilling experiences.",
      'We call it "philosophy of reality\'s hidden layer": Art galleries, conceptual changes to otherwise ordinary places and advanced real-life interactions like clothes fitting and AR collaboration.',
    ],
  },
  {
    title: "Why Fashion?",
    text: [
      "Onmi® is the first game to incorporate the art of digital fashion, letting players express themselves in novel, creative ways. Every article of clothing in the game has an in-game value backed by gameplay use cases.",
    ],
  },
  {
    title: "Can I earn in this game?",
    text: [
      `<p>Of course. But It depends on many factors, like:</p>
        <ul>
          <li>Your endurance</li>
          <li>Being ahead of the curve</li>
          <li>Your social skills</li>
          <li>Clever resource management</li>
          <li>A tiny bit of luck</li>
        </ul>
        <p>We also offer special programs for talented people to profit off their art in ONMI®.</p>`,
    ],
  },
  {
    title: "How does Onmi® collaborate with offline brands?",
    text: [
      "Partner brands can create unique digital goods and experiences for Onmi® playerbase.",
      "AR technology allows for expanded interaction with partners' works.",
    ],
  },
];
const Questions: FC<{ className?: string; questions?: IQuestion[] }> = ({ className, questions }) => {
  const questionsForRender = questions ? questions : initQuestions;

  return (
    <div className={cn(s.questions, className)}>
      {questionsForRender.map((el, index) => {
        return <Animate anim={"fadeUp"} delay={index * 100}>
          <Question key={index} title={el.title} text={el.text} />
        </Animate>;
      })}
    </div>
  );
};
export default Questions;
