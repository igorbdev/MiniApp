import { FC, useEffect, useId, useState } from "react";
import Toolbar from "../../../../components/Toolbar";
import { RoutePageNameEnum } from "../../../../routes/Routes.types";
import NextButton from "../../IdealPlanComponents/NextButton/NextButton";
import "../../IdealPlan.style.scss";
import "./MonetaryValueTab.style.scss";

const MonetaryValueTab: FC = () => {
  const [_pageName, _setPageName] = useState<RoutePageNameEnum>(
    RoutePageNameEnum.PlanoIdeal
  );
  const [_activeButton, _setActiveButton] = useState(false);
  const [_value, _setValue] = useState<string>();
  const _monetaryValue = useId();
  useEffect(() => {
    _setActiveButton(_value !== '' && _value !== undefined)
  }, [_value]);
  return (
    <>
      <Toolbar pageName={_pageName} link='/PlanoIdeal' />
      <section className="container">
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consect adipiscing elit. Integer ornare nibh ut sem dapibus varius?
          </p>
        </div>
        <div className="inputBox">
          <input
            type="text"
            value={_value}
            id={_monetaryValue}
            placeholder="Valor"
            className="inputBox__input"
            onChange={e => _setValue(e.target.value)}
          />
          <label
            htmlFor={_monetaryValue}
            className="inputBox__label"
          >
            Valor
          </label>
        </div>
        <NextButton active={_activeButton} link='/CheckBoxesTab' />
      </section>
    </>
  );
};

export default MonetaryValueTab;