import { Card } from "types";
import { CardItem } from "components/card-item/card-item";
import blueEllipse from "assets/ellipse-blue.png";
import blueViolettEllipse from "assets/Ellipse26-1.png";
import blueViolettBlurEllipse from "assets/Ellipse25.png";
import "./training-what-will.scss";

const cards: Card[] = [
  {
    id: 1,
    image: require("assets/image32.png"),
    description:
      "Откроешь свой первый криптокошелек и научишься с ним работать",
  },
  {
    id: 2,
    image: require("assets/image41.png"),
    description: "Поймёшь, как выбирать правильные дропы",
  },
  {
    id: 3,
    image: require("assets/image44.png"),
    description: "Построишь план по быстрому приумножению заработанных средств",
  },
  {
    id: 4,
    image: require("assets/image122.png"),
    description: "Узнаешь кто такие холдеры и флипперы",
  },
];

export function TrainingWhatWill(): JSX.Element {
  return (
    <section className="section what-will-train">
      <div className="container">
        <h2 className="what-will-train__title">Что даст тебе обучение?</h2>
        <img
          src={blueEllipse}
          className="elliepses blueEllipse"
          alt="blueEllipse"
        />
        <img
          src={blueViolettEllipse}
          className="elliepses blueViolettEllipse"
          alt="blueViolettEllipse"
        />
        <img
          src={blueViolettBlurEllipse}
          className="elliepses blueViolettBlurEllipse"
          alt="blueViolettBlurEllipse"
        />
        <section className="cards">
          {cards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </section>
      </div>
    </section>
  );
}
