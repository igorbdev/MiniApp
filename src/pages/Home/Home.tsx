import React, { FC, useEffect, useRef, useState } from "react";
import Toolbar from "../../components/Toolbar";
import SearchFilter from "../../components/Toolbar/components/SearchFilter";
import { _dataFake } from "../../DataFake";
import { RoutePageNameEnum } from "../../routes/Routes.types";
import "./Home.style.scss";
import CircleHome from "./HomeComponents/Circles/CirclesHome";
import SlideHomeConsorcio from "./HomeComponents/SlideHomeConsorcio/SlideHomeConsorcio";
import CardsPlans from "./HomeComponents/CardsPlans/CardsPlans";
import Card from "../../components/Card/Card";
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'
import img10 from '../../assets/img10.png'
import img11 from '../../assets/img11.png'
import img12 from '../../assets/img12.png'
import img13 from '../../assets/img13.png'
import img14 from '../../assets/img14.png'
import img15 from '../../assets/img15.png'
import img16 from '../../assets/img16.png'
import img17 from '../../assets/img17.png'
import img18 from '../../assets/img18.png'
import img19 from '../../assets/img19.png'
import img20 from '../../assets/img20.png'
import img21 from '../../assets/img21.png'
import img22 from '../../assets/img22.png'
import img23 from '../../assets/img23.png'
import img24 from '../../assets/img24.png'
import {motion} from 'framer-motion'


const HomePage: FC = () => {
  /** State responsável por armazenar o nome da página ativa */
  const [_pageName, _setPageName] = useState<RoutePageNameEnum>(
    RoutePageNameEnum.Home
  );

  const _carouselCircle:any = useRef([]);
  const [_carouselCircleWidth, _setCarouselCircleWidth] = useState<number>(0);
  useEffect(() => {
    _setCarouselCircleWidth(_carouselCircle.current.scrollWidth - _carouselCircle.current.offsetWidth);
  }, [])

  const _data = _dataFake;

  

  return (
    <div className="Home" id="Home">
      <Toolbar pageName={_pageName} link=''>
        <SearchFilter />
      </Toolbar>
      <h1 className="containerHello">Olá, <span>{_data.name} {`:)`}</span></h1>

      <div className="Container">
      <motion.div ref={_carouselCircle} className="ContainerCircleHome" whileTap={{ cursor: "grabbing"}} drag="x" dragConstraints={{ right: 0, left: -_carouselCircleWidth}}>
        <CircleHome />
      </motion.div>
        

        <div className="simulate">
          <p className="simulateTitle">Simular</p>
          <p className="simulateText">Meu consórcio</p>
        </div>
      
        <motion.div className="ContainerConsortium" whileTap={{ cursor: "grabbing"}} drag="x" dragConstraints={{ right: 0, left: -_carouselCircleWidth}}>
          <SlideHomeConsorcio />
        </motion.div>
        

        <div className="mainPlans">
          <div className="mainPlansTitle">
            <h2>Principais Planos</h2>
            <p className="TitleRight">Carregar Tudo</p>
          </div>

          <motion.div whileTap={{ cursor: "grabbing"}} drag="x" dragConstraints={{ right: 0, left: -_carouselCircleWidth}}>
            <CardsPlans />
          </motion.div>          
        </div>

        <div className="Trails">
          <h5 className="titleTrails">Minhas Trilhas</h5>

          <div className="titleContainerCars">
            <p className="titleCarsLeft">Carros, Motos, Caminhão</p>
            <p className="titleCarsRight">Carregar tudo</p>
          </div>

          <motion.div className="CarsContainerCarousel" whileTap={{ cursor: "grabbing"}} drag="x" dragConstraints={{ right: 0, left: -_carouselCircleWidth * 2}}>
            <div className="CarsContainer">
              <Card type='podcast' imagem={img1} title='Carro 0 km ou usado? Vantagens e desvant...' date='31/10/2021' time='00:30' />
              <Card type='video' imagem={img2} title='Como comprar um SUV pagando menos?' date='29/09/2021' time='00:23' />
              <Card type='reader' imagem={img3} title='Dia Nacional do Trânsito: dicas para...' date='25/09/2021' time='00:30' />
              <Card type='podcast' imagem={img4} title='Vale a pena fazer consórcio para carro...' date='26/04/2021' time='00:32' />
              <Card type='reader' imagem={img5} title='Como cadastrar e usar a CNH digital: dicas...' date='25/03/2021' time='00:30' />
              <Card type='reader' imagem={img6} title='O que é melhor: carro novo ou usado?' date='12/03/2021' time='00:30' />
              <Card type='reader' imagem={img7} title='Último mês da Promoção 2 em 1: su...' date='04/12/2020' time='00:30' />
              <Card type='reader' imagem={img8} title='Fui contemplado no consórcio de automó...' date='09/09/2021' time='00:30' />
              <Card type='video' imagem={img9} title='Quer viajar de carro nas férias de verão?' date='22/10/2020' time='00:41' />
              <Card type='podcast' imagem={img10} title='Você sabe como ofertar o seu carro...' date='30/08/2020' time='0:35' />
            </div>
          </motion.div>

          <div className="titleContainerCars">
            <p className="titleCarsLeft">Eletro</p>
            <p className="titleCarsRight">Carregar tudo</p>
          </div>

          <motion.div className="CarsContainerCarousel" whileTap={{ cursor: "grabbing"}} drag="x" dragConstraints={{ right: 0, left: -_carouselCircleWidth * 2}}>
          <div className="CarsContainer">
              <Card type='video' imagem={img11} title='Saiba todos os produtos que você...' date='25/10/2021' time='00:29' />
              <Card type='reader' imagem={img12} title='Como comprar equipamentos poten...' date='08/10/2021' time='00:23' />
              <Card type='reader' imagem={img13} title='Chegou a hora de subir o nível das suas...' date='08/09/2021' time='00:30' />
              <Card type='podcast' imagem={img14} title='Como montar sua banda de rock atravé...' date='16/07/2021' time='00:33' />
              <Card type='reader' imagem={img15} title='Como comprar o último lançamento ...' date='12/07/2021' time='00:30' />
              <Card type='reader' imagem={img16} title='Dia do Cinema Brasileiro: 5 dicas de...' date='19/06/2021' time='00:30' />
              <Card type='reader' imagem={img17} title='Os melhores celulares de 2021: saiba qual ...' date='13/01/2021' time='00:30' />
              <Card type='reader' imagem={img18} title='Apps que ajudam a fazer renda extra' date='30/11/2020' time='00:30' />
              <Card type='video' imagem={img19} title='3 melhores jogos para crianças' date='10/10/2020' time='00:22' />
              <Card type='podcast' imagem={img20} title='Eletrônicos: Por que é uma boa hora para ...' date='16/08/2020' time='0:34' />
            </div>
          </motion.div>

          <div className="titleContainerCars">
            <p className="titleCarsLeft">Agro</p>
            <p className="titleCarsRight">Carregar tudo</p>
          </div>

          <motion.div className="CarsContainerCarousel" whileTap={{ cursor: "grabbing"}} drag="x" dragConstraints={{ right: 0, left: -_carouselCircleWidth * 2}}>
            <div className="CarsContainer">
              <Card type='video' imagem={img21} title='É possível adquirir drones com um cons...' date='21/04/2021' time='00:18' />
              <Card type='reader' imagem={img22} title='Consórcio para drones agrícolas: como essa...' date='31/03/2021 ' time='00:23' />
              <Card type='reader' imagem={img23} title='Conheça o consórcio de agronegócio' date='10/03/2021' time='00:30' />
              <Card type='podcast' imagem={img24} title='A força do setor de agronegócio na pand...' date='19/02/2021 ' time='00:33' />
            </div>
          </motion.div>



        </div>
      </div>
      

    </div>
  );
};

export default HomePage;
