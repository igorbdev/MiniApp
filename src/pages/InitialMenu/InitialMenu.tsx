import { FC } from "react"
import './InitialMenu.style.scss'
import svgProfile2 from '../../assets/svgs/svgProfile2.svg'
import svgX from '../../assets/svgs/svgX.svg'
import svgInicio from '../../assets/svgs/svgInicio.svg'
import svgPlan from '../../assets/svgs/svgPlan.svg'
import svgIdealPlan from '../../assets/svgs/svgIdealPlan.svg'
import svgDolar from '../../assets/svgs/svgDolar.svg'
import svgEdit from '../../assets/svgs/svgEdit.svg'
import svgHeart from '../../assets/svgs/svgHeart.svg'
import svgDoc from '../../assets/svgs/svgDoc.svg'
import { _dataFake } from "../../DataFake"
import { NavLink } from "react-router-dom"

const _data = _dataFake

const InitialMenu: FC = () => {
    return (
        <div className="InitialMenu">
            <div className="containerMenuInitialHeader">
                <div className="containerInfosMenuInitial">
                    <div className="imgProfile"><img src={svgProfile2} alt="" /></div>
                    <div className="nameProfile">
                        <h1>{_data.fullName}</h1>
                        <p>{_data.email}</p>
                    </div>
                </div>
                
                <div className="ExitProfile">
                    <NavLink to='/'><img src={svgX} alt="fechar" /></NavLink>
                </div>
            </div>

            <div className="containerButtonMenuInicial">
                <div className="buttonMenuInicial">
                    <img src={svgInicio} alt="icone" />
                    <p>Início</p>
                </div>
                <div className="buttonMenuInicial">
                    <img src={svgPlan} alt="icone" />
                    <p>Planejamentos</p>
                </div>
                <NavLink to='/PlanoIdeal' className="buttonMenuInicial">
                    <img src={svgIdealPlan} alt="icone" />
                    <p>O plano ideal para você!</p>
                </NavLink>
                <div className="buttonMenuInicial">
                    <img src={svgDolar} alt="icone" />
                    <p>Financeiro</p>
                </div>
                <div className="buttonMenuInicial">
                    <img src={svgEdit} alt="icone" />
                    <p>Dados cadastrais</p>
                </div>
                <div className="buttonMenuInicial">
                    <img src={svgHeart} alt="icone" />
                    <p>Indicar amigos</p>
                </div>
                <div className="buttonMenuInicial">
                    <img src={svgDoc} alt="icone" />
                    <p>Documentos</p>
                </div>
            </div>

            <div className="footerMenuInicial">
                <p>Canais de atendimento</p>
                <p>FAQ</p>
                <p>Termos de uso</p>
                <p>Avalie na Google Play / Apple store</p>
            </div>
        </div>
       
    )
}

export default InitialMenu