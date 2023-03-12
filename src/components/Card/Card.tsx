import { FC } from "react";
import "./Card.style.scss";
import { ICardProps } from "./Card.types";
import svgClock from '../../assets/icons/svgClock.svg';
import Star from '../../assets/svgs/Star.svg'
import Heart from '../../assets/svgs/Heart.svg'
import Video from "./CardComponents/video";
import Podcast from "./CardComponents/podcast";
import Reader from "./CardComponents/reader";



const Card: FC<ICardProps> = ({imagem, title,date, time, type}) => {
  
  const _setType = (tipo:string) => {
    switch (tipo) {
      case 'video':
        return <Video />;
      case 'podcast':
        return <Podcast />;
      default:
        return <Reader />;
    }
  }

  return (
    <div className="ContainerCard" >
      <div className="ContainerCardType">
      {_setType(type)}
      </div>
      <div>
        <img className="imageCard" src={imagem} alt="imagem" />
      </div>
      <div className="containerCardInfos">
        <h4 className="TitleCardInfos">{title}</h4>
        <div className="containerCardInfosBottom">
            <p className="InfosCardInfos">{date}</p>
            <p className="InfosCardInfos"><img src={svgClock} alt="time" />  {time}</p>
        </div>

        <div className="FooterCardInfos">
            <img src={Star} alt="stars" />
            <img src={Heart} alt="Heart" />
        </div>
      </div>
    </div>
  );
};

export default Card;