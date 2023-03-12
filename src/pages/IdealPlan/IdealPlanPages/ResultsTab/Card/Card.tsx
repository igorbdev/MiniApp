import { FC } from "react";
import { ReactComponent as Home } from "../../../../../assets/svgs/svgHome.svg";
import "./Card.style.scss";

const Card: FC = () => {
  return (
    <div className="card">
      <div className="card__img">
        <Home />
      </div>
      <div className="card__dscp">
        <h2>R$ 220.000,00</h2>
        <div className="card__dscp__times">
          <div className="card__dscp__times__label">
            Parcela:
          </div>
          <div className="card__dscp__times__value">
            R$ 1.150,00
          </div>
        </div>
        <p className="card__dscp__term">
          Prazo: <b>200 meses</b>
        </p>
        <p className="card__dscp__fund">
          Fundo reserva: <b>1%</b> | Taxa Adm:<b>20%</b>
        </p>
      </div>
      <div className="card__buttom">
        <button>
          Selecione
        </button>
      </div>
    </div>
  );
};

export default Card;