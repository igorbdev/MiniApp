import { FC } from "react";
import "./CirclesHome.style.scss";
import svgStar from '../../../../assets/svgs/svgStar.svg'
import svgPlans from '../../../../assets/svgs/svgPlans.svg'
import svgCheck from '../../../../assets/svgs/svgCheck.svg'
import svgHammer from '../../../../assets/svgs/svgHammer.svg'
import svgWorld from '../../../../assets/svgs/svgWorld.svg'
import svgGift from '../../../../assets/svgs/svgGift.svg'
import svgPlane from '../../../../assets/svgs/svgPlane.svg'
import svgProfile from '../../../../assets/svgs/svgProfile.svg'
import svgPerga from '../../../../assets/svgs/svgPerga.svg'
import svgCash from '../../../../assets/svgs/svgCash.svg'


const CircleHome: FC = () => {

  return (
    <div className="CircleHome" >
        <div className="circlesHome">
          <div className="circleStar" ><img src={svgStar} alt="star" /></div>
          <p className="circleText">Melhores do dia</p>
        </div>  
        <div className="circlesHome">
          <div className="circlePlans" ><img src={svgPlans} alt="plans" /></div>
          <p className="circleText">Planos em destaque</p>
        </div>   
        <div className="circlesHome">
          <div className="circleCheck" ><img src={svgCheck} alt="check" /></div>
          <p className="circleText">Ofertas disponíveis</p>
        </div>  
        <div className="circlesHome">
          <div className="circleThrow" ><img src={svgHammer} alt="throw" /></div>
          <p className="circleText">Fazer um lance</p>
        </div>
        <div className="circlesHome">
          <div className="circleAssemblies" ><img src={svgWorld} alt="assemblies" /></div>
          <p className="circleText">Conferir assembléias</p>
        </div>
        <div className="circlesHome">
          <div className="circleContemplation" ><img src={svgGift} alt="contemplation" /></div>
          <p className="circleText">Acompanhar contemplação</p>
        </div>
        <div className="circlesHome">
          <div className="circleDebit" ><img src={svgPlane} alt="debit" /></div>
          <p className="circleText">Débito automático</p>
        </div>
        <div className="circlesHome">
          <div className="circleProfile" ><img src={svgProfile} alt="infos" /></div>
          <p className="circleText">Atualizar meus dados</p>
        </div>
        <div className="circlesHome">
          <div className="circleExtract" ><img src={svgPerga} alt="extract" /></div>
          <p className="circleText">Extrato do consórcio</p>
        </div>
        <div className="circlesHome">
          <div className="circleAntecipate" ><img src={svgCash} alt="antecipate" /></div>
          <p className="circleText">Antecipar parcelas</p>
        </div>
    </div>
  );
};

export default CircleHome;