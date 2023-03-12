import { FC, useEffect, useRef, useState } from "react";
import "./SlideHomeConsorcio.style.scss";
import imgConsortium1 from '../../../../assets/imgConsortium1.png'
import imgConsortium2 from '../../../../assets/imgConsortium2.png'
import imgConsortium3 from '../../../../assets/imgConsortium3.png'


const SlideHomeConsorcio: FC = () => {

  

  return (
      <div  className="containerSlide">
        <div><img className="img" src={imgConsortium1} alt="imageBanner" /></div>
        <div><img className="img" src={imgConsortium2} alt="imageBanner" /></div>
        <div><img className="img" src={imgConsortium3} alt="imageBanner" /></div>
      </div>
  );
};

export default SlideHomeConsorcio;