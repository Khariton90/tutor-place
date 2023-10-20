import { useState } from "react";
import cn from "classnames";
import "./header.scss";
import logo from "assets/logo.png";

type HeaderProps = {
  isOpen: boolean;
};

export function Header({ isOpen }: HeaderProps): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <header className={cn("header", { blur: isOpen })}>
      <div className="container">
        <div className="header__body">
          <a href="#" className="header__logo">
            <img src={logo} alt="logo" />
          </a>
          <div
            className={cn("header__burger", { active: open })}
            onClick={() => setOpen(!open)}
          ></div>
          <nav className={cn("header__menu", { active: open })}>
            <ul className="header__list">
              <li>
                <a href="#" className="header__link">
                  Главная
                </a>
              </li>
              <li>
                <a href="#" className="header__link">
                  Что даст обучение
                </a>
              </li>
              <li>
                <a href="#" className="header__link">
                  Личный кабинет
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
