import { FC, useState } from "react";
import Toolbar from "../../../../components/Toolbar";
import { RoutePageNameEnum } from "../../../../routes/Routes.types";
import NextButton from "../../IdealPlanComponents/NextButton/NextButton";
import { checkBoxValues } from './RadioButtons.data';
import "../../IdealPlan.style.scss";
import "./RadioButtonsTab.style.scss";

const RadioButtonsTab: FC = () => {
  const [_activeButton, _setActiveButton] = useState(false);
  const [_pageName, _setPageName] = useState<RoutePageNameEnum>(
    RoutePageNameEnum.PlanoIdeal
  );
  return (
    <>
      <Toolbar pageName={_pageName} link='/CheckBoxesTab' />
      <section className="container">
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consect adipiscing elit?
          </p>
        </div>
        <div className="checkBoxesField">
          {checkBoxValues.map(item => (
            <div className="checkBoxesField__input" key={item.id}>
              <input
                type="radio"
                id={item.code}
                name="checkBox"
                onClick={() => _setActiveButton(true)}
              />
              <label htmlFor={item.code}>
                {item.label}
              </label>
            </div>
          ))}
        </div>
        <NextButton active={_activeButton} link='/SelectTab' />
      </section>
    </>
  );
};

export default RadioButtonsTab;