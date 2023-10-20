import { Card } from "types";

type CardItemProps = {
  card: Card;
};

export function CardItem({ card }: CardItemProps): JSX.Element {
  return (
    <article className="card-item">
      <img src={card.image} alt="Карточка" />
      <p className="card-item__description">{card.description}</p>
    </article>
  );
}
