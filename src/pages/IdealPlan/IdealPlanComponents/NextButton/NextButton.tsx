import { FC, PropsWithoutRef } from "react";
import INextButtonProps from "./NextButton.types";
import "./NextButton.style.scss";
import { NavLink } from "react-router-dom";

const NextButton: FC<PropsWithoutRef<INextButtonProps>> = ({ active, link }) => {
  return (
    <div className="bottom">
      <NavLink
        className={active
          ? "proximoButtom__active"
          : "proximoButtom"  
        }
        to={active ? link : ''}
      >
          Próximo
      </NavLink>
    </div>
  );
};

export default NextButton;