import image from "assets/man1.png";
import bigImage from "assets/man-320-320.png";
import greenEllipse from "assets/green-ellipse.png";
import money from "assets/money.png";
import light1 from "assets/Lightning.png";
import light2 from "assets/Lightning2.png";
import swean from "assets/swean.png";
import smile from "assets/image-smile.png";
import "./start-making-money.scss";

type StartMakingMoneyProps = {
  isOpen: boolean;
  onOpen: () => void;
};

export function StartMakingMoney({
  onOpen,
}: StartMakingMoneyProps): JSX.Element {
  return (
    <section className="section start-making-money">
      <div className="container">
        <div className="start-making-money__title">
          <picture>
            <img className="ellipse" src={greenEllipse} alt="ellipse" />
          </picture>
          <h1 className="title">
            Не упусти возможность войти в <b>прибыльную нишу</b>
          </h1>
        </div>
        <div className="start-making-money__man">
          <img className="money additional-image" src={money} alt="money" />
          <img
            className="light1 additional-image"
            src={light1}
            alt="lightning"
          />
          <img
            className="light2 additional-image"
            src={light2}
            alt="lightning"
          />
          <img className="swean additional-image" src={swean} alt="swean" />
          <img className="smile additional-image" src={smile} alt="smile" />

          <picture className="preview">
            <source media="(min-width: 861px)" srcSet={bigImage} />
            <img src={image} alt="man" />
          </picture>
        </div>

        <div className="subtitle">
          <p>Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
        </div>
        <button className="btn-primary" onClick={onOpen}>
          Начать зарабатывать на NFT
        </button>
      </div>
    </section>
  );
}
