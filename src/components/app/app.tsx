import { Header } from "components/header/header";
import { StartMakingMoney } from "components/start-making-money/start-making-money";
import { TrainingWhatWill } from "components/training-what-will/training-what-will";
import { useEffect, useState } from "react";
import { Modal } from "components/modal/modal";
import cn from "classnames";
import "./app.scss";

function App(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("lock");
    }

    const close = (evt: any) => {
      if (evt.code === "Escape" && isOpen) {
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", close);

    return () => {
      document.body.classList.remove("lock");
      window.removeEventListener("keydown", close);
    };
  }, [isOpen]);

  return (
    <div className="App">
      <Header isOpen={isOpen} />
      <main className={cn("main", { blur: isOpen })}>
        <article>
          <StartMakingMoney isOpen={isOpen} onOpen={onOpen} />
          <TrainingWhatWill />
          {isOpen ? <Modal onOpen={onOpen} /> : null}
        </article>
      </main>
    </div>
  );
}

export default App;
