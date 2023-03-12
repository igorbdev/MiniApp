import { FC, PropsWithoutRef, useState } from "react";
import "./Cards.style.scss";
import { ICardProps } from "./Cards.types";
import { ReactComponent as SvgCar } from '../../../../assets/svgs/svgCar.svg';
import { ReactComponent as SvgCouch } from '../../../../assets/svgs/svgCouch.svg';
import { ReactComponent as SvgPlant } from '../../../../assets/svgs/svgPlant.svg';
import { ReactComponent as SvgHouse } from '../../../../assets/svgs/svgHouse.svg';

const Cards: FC<PropsWithoutRef<ICardProps>> = ({
  selectedCards,
  setSelectedCards
}) => {
  const [_active1, _setActive1] = useState(false);
  const [_active2, _setActive2] = useState(false);
  const [_active3, _setActive3] = useState(false);
  const [_active4, _setActive4] = useState(false);

  const addSelectedCard = (id: Number) => {
    if (selectedCards.indexOf(id) !== -1) {
      const updatedSelectedCards = selectedCards.filter(card => card !== id);
      setSelectedCards(updatedSelectedCards);
    } else {
      setSelectedCards([...selectedCards, id]);
    }
    
    switch (id) {
      case 1:
        _setActive1(!_active1);
        break;
      case 2:
        _setActive2(!_active2);
        break;
      case 3:
        _setActive3(!_active3);
        break;
      case 4:
        _setActive4(!_active4);
        break;
    }
  };

  return (
    <div className="cards">

      <div className="Row1">
        <div className={_active1 ? "SquadIdeal_active" : "SquadIdeal"} onClick={() => addSelectedCard(1)} >
            <div className="circle">
              <div className="circle__svg">
                <SvgCouch />
              </div>
            </div>
            <div className="circle__text">
              <p>Móveis</p> 
            </div>
        </div>

        <div className={_active2 ? "SquadIdeal_active" : "SquadIdeal"} onClick={() => addSelectedCard(2)} >
            <div className="circle">
              <div className="circle__svg">
                <SvgPlant />
              </div>
            </div>
            <div className="circle__text">
              <p>Agro</p> 
            </div>
        </div>
      </div>

      <div className="Row1">
        <div className={_active3 ? "SquadIdeal_active" : "SquadIdeal"} onClick={() => addSelectedCard(3)} >
            <div className="circle">
              <div className="circle__svg">
                <SvgCar />
              </div>
            </div>
            <div className="circle__text">
              <p>Carro</p> 
            </div>
        </div>

        <div className={_active4 ? "SquadIdeal_active" : "SquadIdeal"} onClick={() => addSelectedCard(4)} >
            <div className="circle">
              <div className="circle__svg">
                <SvgHouse />
              </div>
            </div>
            <div className="circle__text">
              <p>Imóveis</p> 
            </div>
        </div>
      </div>

    </div>
  );
};

export default Cards;