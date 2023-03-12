import { FC, useEffect, useRef, useState } from "react";
import "./CardsPlans.style.scss";
import {motion} from 'framer-motion'
import imgCar from '../../../../assets/imgCar.png'
import imgHouse from '../../../../assets/imgHouse.png'

const CardsPlans: FC = () => {
  const _carousel:any = useRef();
  const [_width, _setWidth] = useState<number>(0);

  useEffect(() => {
    _setWidth(_carousel.current.scrollWidth - _carousel.current.offsetWidth);
  }, [])

  return (
    <div className="carousel" >
      <motion.div ref={_carousel} className="CardsPlans" whileTap={{ cursor: "grabbing"}} drag="x" dragConstraints={{ right: 0, left: -_width}}>
        <div className="cardPlan">
          <div className="tagCard"><p>imóveis</p></div>
          <img src={imgCar} alt="Carro" />
          <div className="containerInfos">
            <p className="cardValue">R$ 50.000,00</p>
            <p className="containerInfosLeft">Parcela: <span className="containerInfosRight">R$ 865,00</span></p>
          </div>
          <div className="containerInfosBottom">
            <p className="InfosLeftBottom">Prazo: <span>60 meses</span></p>
            <p className="InfosLeftBottom">Fundo reserva: <span>1%</span></p>
            <p className="InfosLeftBottom">Taxa Adm: <span>20%</span></p>
          </div>
          <div className="ButtonSelect"><p>Selecione</p></div>
        </div>

        <div className="cardPlan">
          <div className="tagCard"><p>imóveis</p></div>
          <img src={imgHouse} alt="Carro" />
          <div className="containerInfos">
            <p className="cardValue">R$ 220.000,00</p>
            <p className="containerInfosLeft">Parcela: <span className="containerInfosRight">R$ 1.150,00</span></p>
          </div>
          <div className="containerInfosBottom">
            <p className="InfosLeftBottom">Prazo: <span>200 meses</span></p>
            <p className="InfosLeftBottom">Fundo reserva: <span>1%</span></p>
            <p className="InfosLeftBottom">Taxa Adm: <span>20%</span></p>
          </div>
          <div className="ButtonSelect"><p>Selecione</p></div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardsPlans;