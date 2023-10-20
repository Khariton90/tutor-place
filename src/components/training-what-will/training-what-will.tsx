import { Card } from "types";
import { CardItem } from "components/card-item/card-item";
import image from "assets/image32.png";
import blueEllipse from "assets/ellipse-blue.png";
import blueViolettEllipse from "assets/Ellipse26-1.png";
import blueViolettBlurEllipse from "assets/Ellipse25.png";
import "./training-what-will.scss";

const cards: Card[] = [
  {
    id: 1,
    image: require("assets/image32.png"),
    description:
      "Откроешь свой первый криптокошелек и научишься c ним работать",
  },
  {
    id: 2,
    image: require("assets/image122.png"),
    description:
      "Откроешь свой первый криптокошелек и научишься c ним работать",
  },
  {
    id: 3,
    image: require("assets/image41.png"),
    description:
      "Откроешь свой первый криптокошелек и научишься c ним работать",
  },
  {
    id: 4,
    image: image,
    description:
      "Откроешь свой первый криптокошелек и научишься c ним работать",
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
