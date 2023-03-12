import React, { FC, PropsWithChildren } from "react";

import icon_arrow from "../../assets/icons/icon_arrow.svg";
import icon_menu from "../../assets/icons/icon_menu.svg";
import icon_cart from "../../assets/icons/icon_cart.svg";
import logo_magalu from "../../assets/logo/logo-consorcio-magalu-white.svg";

import { RoutePageNameEnum } from "../../routes/Routes.types";
import { IToolbarProps } from "./Toolbar.types";
import "./Toolbar.style.scss";
import { NavLink } from "react-router-dom";

const Toolbar: FC<PropsWithChildren<IToolbarProps>> = ({
  link,
  pageName: textPage,
  children, 
}) => {

  return (
    <div className="Toolbar">
      <div className="toolbar-header">
        <div className="toolbar-left-buttons">
          <NavLink className="toolbar-btn back-button" to={link}>
            <img src={icon_arrow} alt="Voltar" />
          </NavLink>
        </div>
        <div className="toolbar-title">
          {textPage === RoutePageNameEnum.Home && (
            <img src={logo_magalu} alt="Carrinho" />
          )}
          {textPage !== RoutePageNameEnum.Home && `${textPage}`}
        </div>
        <div className="toolbar-right-buttons">
          <button className="toolbar-btn back-button">
            <img src={icon_cart} alt="Carrinho" />
          </button>
            <NavLink className="toolbar-btn back-button" to='/InitialMenu' >
              <img src={icon_menu} alt="Menu" />
            </NavLink>
        </div>
      </div>
      {children && <div className="toolbar-body">{children}</div>}
    </div>
  );
};

export default Toolbar;
